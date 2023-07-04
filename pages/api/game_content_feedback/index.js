import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"


export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)

    // 피드백 갯수 구하기
    if(req.method == "GET") {
        try {
            const db = (await connectDB).db('project')
            // DB 콜렉션을 탐색하여 각각의 좋아요/싫어요 갯수를 찾아냄
            const likeCount = await db.collection('game_content_feedback').countDocuments({ parent : req.query.data, feedback : 'like' })
            const dislikeCount = await db.collection('game_content_feedback').countDocuments({ parent: req.query.data, feedback: 'dislike' })

            return res.status(200).json({ message : '피드백 조회완료', likeCount, dislikeCount })
        }
        catch(err) {
            console.log(err)
            return res.status(500).json({ message : '서버에러 발생' })
        }
    }

    // 피드백 하기
    if(req.method == 'POST') {
        if(!session) return res.status(400).json({ message : '로그인 이후 이용해 주세요.' })

        try {
            const insertData = {
                userEmail : session.user.email,
                parent : req.body.parent,
                feedback : req.body.feedback,
            }
            const db = (await connectDB).db('project')
            const result = db.collection('game_content_feedback').insertOne(insertData)

            return res.status(200).json({ resut : result, message : '피드백 완료' })
        }
        catch(err) {
            console.log(err)
            return res.status(500).json({ message : '서버에러 발생' })
        }
    }

}