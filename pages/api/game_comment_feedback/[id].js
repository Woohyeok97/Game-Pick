import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)
    const db = (await connectDB).db('project')

    if(req.method == 'DELETE') {
        if(!session) return res.status(400).json({ message : '로그인 이후 이용해 주세요.' })
        try {
            console.log(req.query)
            const result = await db.collection('game_comment_feedback').deleteOne({ _id : new ObjectId(req.query) })
            return res.status(200).json({ result : result })
        } catch(err) {
            console.log(err)
            return res.status(500).json({ message : '서버에러 발생' })
        }
    }

}