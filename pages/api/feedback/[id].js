import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)
    const db = (await connectDB).db('project')

    // 피드백 삭제하기
    if(req.method == 'DELETE') {
        if(!session) return res.status(400).json({ message : '로그인 이후 이용해 주세요.' })
        try {
            const submitData = JSON.parse(req.query.userFeedback)
            // 피드백 삭제후, 부모 도큐먼트 피드백 개수 업데이트
            await db.collection('feedback').deleteOne({ _id : new ObjectId(req.query) })
            const parentUpdate = await db.collection(req.query.collection).updateOne({ _id : new ObjectId(submitData.parent) },
                { $inc : { [submitData.type] : -1 } })
            
            // 부모 도큐먼트 업데이트 실패시 롤백
            if(parentUpdate.modifiedCount == 0) {
                await db.collection('feedback').insertOne({ _id : new ObjectId(req.query), ...submitData })
                throw new Error('피드백 개수 업데이트 실패')
            }
            return res.status(200).json({ message : '피드백 취소!' })
        } catch(err) {
            console.log(err)
            return res.status(500).json({ message : '서버에러 발생' })
        }
    }

    // 피드백 수정하기
    if(req.method == "PUT") {
        if(!session) return res.status(400).json({ message : '로그인 이후 이용해 주세요.' })

        try {
            const prevUserFeedback = JSON.parse(req.body.userFeedback)

            // 피드백 수정후, 부모 도큐먼트 피드백 개수 업데이트
            await db.collection('feedback').updateOne({ _id : new ObjectId(req.query.id) }, { $set : { type : req.body.type } } )
            const parentUpdate = await db.collection(req.body.collection).updateOne({ _id : new ObjectId(prevUserFeedback.parent) }, 
                { $inc : { [prevUserFeedback.type] : -1, [req.body.type] : 1 } })

            // 부모 도큐먼트 업데이트 실패시 롤백
            if(parentUpdate.modifiedCount == 0) {
                await db.collection('feedback').updateOne({ _id : new ObjectId(req.query.id) }, { $set: { type : prevUserFeedback.type } } )
                throw new Error('피드백 개수 업데이트 실패')
            }
            return res.status(200).json({ message : '피드백 수정!' })
        } catch(err) {
            console.log(err)
            return res.status(500).json({ message : '서버에러 발생' })
        }
    }

}