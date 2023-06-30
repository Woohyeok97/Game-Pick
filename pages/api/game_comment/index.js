import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";
// 유효성검사 유틸함수
import verifyContent from "@/util/verifyData"


export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)
    // POST 요청
    if(req.method == 'POST') {
        // 코멘트 유효성검사
        if(!verifyContent(req.body)) return res.status(400).json({ message : '코멘트의 데이터를 확인해주세요.' })
        if(!session) return res.status(400).json({ message : '로그인 이후 이용해 주세요.' })
        

        try {
            const comment = { 
                ...req.body,
                userName : session.user.name,
                userEmail : session.user.email,
                userImage : session.user.image,
                commentDate : new Date(),
                like : 0,
                unlike : 0,
            }
            const db = (await connectDB).db('project')
            const result = await db.collection('game_comment').insertOne(comment)

            res.status(200).json({ result : result, message : '코멘트 작성완료' })
        }
        catch(err) {
            console.error(err)
            return res.status(500).json({ message : '서버 에러발생' })
        }
    }

    // GET 요청
    if(req.method == 'GET') {

        try {
            const db = (await connectDB).db('project')
            const result = await db.collection('game_comment').find({ parent : req.query._id }).toArray()

            res.status(200).json({ result : result, message : '코멘트 요청성공' })
            
        } catch(err) {
            console.error(err)
            return res.status(500).json({ message : '서버 에러발생' })
        }
    }
}
