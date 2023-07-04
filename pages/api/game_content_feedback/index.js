import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"


export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)

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