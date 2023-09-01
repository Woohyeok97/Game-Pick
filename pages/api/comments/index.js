import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
// 유효성검사 유틸함수
import verifyContent from "@/util/verifyData"
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)
    const db = (await connectDB).db('project')
    
    // 코멘트 가져오기
    if(req.method == 'GET') {
        try {
            const filter = { parent : req.query.contentId }
            const skipComment = JSON.parse(req.query.skipComment)
            const sortOption = req.query.sortOption
            const limit = +req.query.limit

            // skipComment가 존재한다면(기존에 코멘트 요청을 했거나 or 임시코멘트가 있을때) filter._id 추가
            if(skipComment.length > 0) {
                filter._id = { $nin : skipComment.map((item) => new ObjectId(item._id)) }
            }

            const result = await db.collection('comments')
            .find(filter)
            .sort({[sortOption] : -1, _id : 1}) // 기준이 같으면 먼저 생성된 코멘트를 기준으로 함
            .limit(limit + 1)  
            .toArray()

            //현재요청 이후 더 가져올수있는 코멘트가 존재하는지 확인 
            let hasNext = false

            if(result.length > limit) {
                hasNext = true
                result.pop() // 더 가져올수있는 코멘트 존재 확인후, limit 값에 맞게 result를 수정
            }
            
            return res.status(200).json({ result, hasNext })

        } catch(err) {
            console.error(err)
            return res.status(500).json({ message : '서버 에러발생' })
        }
    }

    // 코멘트 업로드
    if(req.method =='POST') {
        if(!session) return res.status(400).json({ message : '로그인 이후 이용해 주세요.' })
        if(!verifyContent(req.body)) return res.status(400).json({ message : '코멘트의 데이터를 확인해주세요.' })

        try {
            const insertData = {
                parent : req.body.contentId,
                text : req.body.commentText,
                userName : session.user.name,
                userEmail : session.user.email,
                userImage : session.user.image,
                like : 0,
                dislike : 0,
                createDate : new Date(),
            }

            const result = await db.collection('comments').insertOne(insertData)
            return res.status(200).json({ result : result, message : '코멘트 업로드 성공!' })

        } catch(err) {
            console.error(err)
            return res.status(500).json({ message : '서버 에러발생' })
        }
    }
}
