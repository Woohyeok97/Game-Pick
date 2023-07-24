import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)
    // 피드백 가져오기
    // if(req.method == "GET") {
    //     try {
    //         const db = (await connectDB).db('project')
    //         // 기존에 유저가 피드백 했는지 확인
    //         let feedbackType = null
    //         // 로그인된 경우에만 확인함
    //         if(session) {
    //             const userFeedback = await db.collection('game_comment_feedback').findOne({ parent : req.query.data, userEmail : session.user.email })
    //             // 기존에 피드백을 이미 한 유저일때, isFeedback과 feedbackType을 수정
    //             if(userFeedback) {
    //                 feedbackType = userFeedback.feedback
    //             }
    //         }
    //         // 피드백 갯수 & 피드백 유무를 클라이언트한테 전달
    //         return res.status(200).json({ message : '피드백 조회완료', feedbackType : feedbackType})

    //     } catch(err) {
    //         console.log(err)
    //         return res.status(500).json({ message : '서버에러 발생' })
    //     }
    // }

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