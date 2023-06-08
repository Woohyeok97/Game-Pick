import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res) {
    if(req.method == 'GET') {
        try {
            const db = (await connectDB).db('project')
            const content = await db.collection('game_content').findOne({ _id : new ObjectId(req.query) })
            return res.status(200).json({ content : content, message : '데이터 요청성공' })

        } catch(err) {
            console.log(err)
            return res.status(500).json({ message : '서버 에러발생' })
        }
    }
}