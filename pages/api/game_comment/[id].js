import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)
    const db = (await connectDB).db('project')
    
    // 코멘트 삭제하기
    if(req.method == 'DELETE') {
        if(!session) return res.status(400).json({ message : '로그인 이후 이용해 주세요.' })
        // 세션의 email과 코멘트의 userEmail가 일치하지 않으면 status(400) 응답
        if(session.user.email != req.query.userEmail) return res.status(400).json({ message : '본인이 작성한 코멘트만 삭제할수 있습니다.' })

        try { 
            // 1. 코멘트 피드백 삭제
            await db.collection('game_comment_feedback').deleteMany({ parent : req.query.id })
            
            // 2. 코멘트 삭제
            const result = await db.collection('game_comment').deleteOne({ _id : new ObjectId(req.query.id) })
            
            return res.status(200).json({ result : result, message : '코멘트 삭제완료' })

        } catch(err) {
            console.log(err)
            return res.status(500).json({ message : '서버에러 발생' })
        }
    }
}