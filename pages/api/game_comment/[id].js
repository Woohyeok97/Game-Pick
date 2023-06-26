import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res) {

    // if(req.method == 'GET') {
    //     try {
    //         const db = (await connectDB).db('project')
    //         const result = await db.collection('game_comment').findOne({ _id : new ObjectId(req.query) })
    //         // 요청데이터 유효성 검사
    //         if(!result) {
    //             return res.status(400).json({ message : '요청하신 데이터가 존재하지 않습니다.' })
    //         }
    //         return res.status(200).json({ result : result, message : '데이터 요청성공' })
    //     } catch(err) {
    //         console.log(err)
    //         return res.status(500).json({ message : '서버에러 발생' })
    //     }
    // }
}