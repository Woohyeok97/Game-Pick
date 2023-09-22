import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"
// 유효성검사 유틸함수
import verifyContent from "@/util/verifyData"


export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)
    const db = (await connectDB).db('project')

    // 컨텐츠 가져오기
    if(req.method == 'GET') {
        try {
            const result = await db.collection('contents').findOne({ _id : new ObjectId(req.query) })
            if(!result) return res.status(400).json({ message : '해당 컨텐츠를 찾을수 없습니다.' })

            return res.status(200).json({ result, message : '컨텐츠 요청성공' })
        } catch(err) {
            console.log(err)
            return res.status(500).json({ message : '서버에러 발생' })
        }
    }
    // 컨텐츠 수정하기
    if(req.method == 'PUT') {
        if(!session || session.user.role != 'admin') return res.status(400).json({ message : '관리자 권한이 없습니다.' }) 
        // 컨텐츠 유효성검사
        if(!verifyContent(req.body)) return res.status(400).json({ message : '컨텐츠의 내용을 확인해주세요.' })

        try {
            // 컨텐츠의 기존 _id값은 수정할수 없으므로, _id를 제외한 나머지 데이터를 따로 저장
            const { _id, ...editContent } = req.body.prevContent
            const result = await db.collection('contents').updateOne({ _id : new ObjectId(req.query) }, { $set : editContent })

            return res.status(200).json({ result, message : '컨텐츠 수정완료' })
        } catch(err) {
            console.log(err)
            return res.status(500).json({ message : '서버에러 발생' })
        }
    }
    // 컨텐츠 삭제하기
    if(req.method == 'DELETE') {
        if(!session || session.user.role != 'admin') return res.status(400).json({ message : '관리자 권한이 없습니다.' }) 

        try {
            const contentComments = await db.collection('comments').find({ parent : req.query.id }).toArray()
            const commentIds = contentComments.map(item => item._id.toString())
            // 1. 컨텐츠 코멘트 피드백 삭제
            await db.collection('feedback').deleteMany({ parent : { $in : commentIds }})

            // 2. 컨텐츠 코멘트 삭제
            await db.collection('comments').deleteMany({ parent : req.query.id })

            // 3. 컨텐츠 피드백 삭제
            await db.collection('feedback').deleteMany({ parent : req.query.id })

            // 4. 컨텐츠 삭제
            const result = await db.collection('contents').deleteOne({ _id : new ObjectId(req.query.id) })

            return res.status(200).json({ result, message : '컨텐츠 삭제완료!' })
        }catch(err) {
            console.log(err)
            return res.status(500).json({ message : '서버에러 발생' })
        }
    }
}

