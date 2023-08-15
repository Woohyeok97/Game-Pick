import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)
    const db = (await connectDB).db('project')

    // 피드백 여부 가져오기
    if(req.method == "GET") {
        if(!session) return res.status(400).json({ message : '유저정보를 찾을수 없습니다.' })
        try {
            const result = await db.collection('feedback').findOne({ parent : req.query.parent, userEmail : session.user.email })
            return res.status(200).json({ result : result })
        } catch(err) {
            console.log(err)
            return res.status(500).json({ message : '서버에러 발생' })
        }
    }

    // 피드백 업로드
    if(req.method == "POST") {
        if(!session) return res.status(400).json({ message : '로그인 이후 이용해 주세요.' })

        try {
            const insertData = {
                parent : req.body.parent,
                userEmail : session.user.email,
                type : req.body.type
            }

            // 피드백 생성후, 부모 도큐먼트 피드백 개수 업데이트
            const feedbackResult = await db.collection('feedback').insertOne(insertData)
            const parentResult = await db.collection(req.body.collection).updateOne({ _id : new ObjectId(req.body.parent) }, { $inc : { [req.body.type]: 1 }  })

            // 부모 도큐먼트 업데이트 실패시 롤백
            if(parentResult.modifiedCount == 0) {
                await db.collection('feedback').deleteOne({ _id: feedbackResult.insertedId });
                throw new Error('피드백 개수 업데이트 실패');
            }
            return res.status(200).json({ message : '피드백 생성완료' })
        } catch(err) {
            console.log(err)
            return res.status(500).json({ message : '서버에러 발생' })
        }
    }
}