import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
// 유효성검사 유틸함수
import verifyContent from "@/util/verifyData"

export default async function handler(req, res) {
    // 컨텐츠 GET 요청
    if(req.method == 'GET') {
        try {
            const db = (await connectDB).db('project')
            const result = await db.collection('game_content').findOne({ _id : new ObjectId(req.query) })

            return res.status(200).json({ result : result, message : '데이터 요청성공' })
        } catch(err) {
            console.log(err)
            return res.status(500).json({ message : '서버에러 발생' })
        }
    }
    // 컨텐츠 PUT 요청
    if(req.method == 'PUT') {
        // 컨텐츠 유효성검사
        if(!verifyContent(req.body)) return res.status(400).json({ message : '컨텐츠의 내용을 확인해주세요.' })

        try {
            const db = (await connectDB).db('project')
            // content의 _id값은 수정 할수없기 때문에 새로운 객체를 만들어서 _id 프로퍼티를 제거해줌
            const updateContent = { ...req.body }
            delete updateContent._id

            const result = await db.collection('game_content').updateOne({ _id : new ObjectId(req.query) }, { $set : updateContent })
            return res.status(200).json({ result : result, message : '컨텐츠 수정완료' })
        } catch(err) {
            console.log(err)
            return res.status(500).json({ message : '서버에러 발생' })
        }
    }
    // 컨텐츠 DELETE 요청
    if(req.method == 'DELETE') {
        try {
            const db = (await connectDB).db('project')
            const result = await db.collection('game_content').deleteOne({ _id : new ObjectId(req.query) })
            return res.status(200).json({ result : result, message : '컨텐츠 삭제완료' })
        }catch(err) {
            console.log(err)
            return res.status(500).json({ message : '서버에러 발생' })
        }
    }
}

