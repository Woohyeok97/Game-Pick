import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res) {

  // 코멘트 DELETE 요청
    if(req.method == 'DELETE') {
        
        try {
            const db = (await connectDB).db('project')
            const result = await db.collection('game_comment').deleteOne({ _id : new ObjectId(req.query) })
            return res.status(200).json({  message : '코멘트 삭제완료' })
        }catch(err) {
            console.log(err)
            return res.status(500).json({ message : '서버에러 발생' })
        }
    }
}