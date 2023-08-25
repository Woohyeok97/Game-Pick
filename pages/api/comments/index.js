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
            // DB탐색 필터
            const filter = { parent : req.query.contentId }
            // 만약 클라이언트에 임시 코멘트가 존재한다면 필터에 해당 id를 추가함
            const skipComment = JSON.parse(req.query.skipComment)

            if(skipComment.length > 0) {
                filter._id = { $nin : skipComment.map((item) => new ObjectId(item)) }
            }
            // 코멘트 정렬 기준
            const sortOption = req.query.fetchOption
            // 제외 코멘트 개수 (현재 클라이언트에 존재하는 코멘트 개수)
            const skipCount = +req.query.skipCount
            // 가져올 코멘트 개수
            const limit = +req.query.limit
             
            const result = await db.collection('comments')
            .find(filter)
            .sort({[sortOption] : -1, _id : 1}) // 추천수가 같으면 먼저 생성된 코멘트를 기준으로 함
            .skip(skipCount)
            .limit(limit)
            .toArray()

            const next = await db.collection('comments')
            .find(filter)
            .sort({[sortOption] : -1, _id : 1})
            .skip(skipCount + limit)
            .limit(limit)
            .toArray()


            return res.status(200).json({ result : result, next : next})
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
