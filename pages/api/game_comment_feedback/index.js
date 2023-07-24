import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)

    // 피드백 업로드
    if(req.method == "POST") {
        // 로그인 상태일때만 허용
        if(!session) return res.status(400).json({ message : '로그인 이후 이용해 주세요.' })

        try {
            const db = (await connectDB).db('project')
            const userFeedback = await db.collection('game_comment_feedback').findOne({ parent : req.body.parent, userEmail : session.user.email })

            // game_comment_feedback에 insert할 데이터
            const insertData = {
                userEmail : session.user.email,
                parent : req.body.parent,
                feedback : req.body.feedback,
            }

            if(userFeedback) {
                // 기존에 피드백 했다면 기존 피드백을 콜렉션에서 삭제
                const deleteFeedback = await db.collection('game_comment_feedback').deleteOne({ parent : req.body.parent, userEmail : session.user.email })
                // 만약 기존 피드백과 다른 피드백을 한다면 새로운 피드백 업로드
                if(userFeedback.feedback != req.body.feedback) {
                    const result = await db.collection('game_comment_feedback').insertOne(insertData)
                    return res.status(200).json({ resut : result, message : '피드백 완료' })
                }
                return res.status(200).json({ resut : deleteFeedback, message : '피드백 삭제완료' })
            }

            // 기존 피드백이 없다면 피드백 업로드
            const result = await db.collection('game_comment_feedback').insertOne(insertData)
            return res.status(200).json({ resut : result, message : '피드백 완료' })



        } catch(err) {
            console.log(err)
            return res.status(500).json({ message : '서버에러 발생' })
        }
    }
}