import { connectDB } from "@/util/database";
// 유효성검사 유틸함수
import verifyContent from "@/util/verifyData";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)
    const db = (await connectDB).db('project')

    // 컨텐츠 업로드
    if(req.method == 'POST') {
        if(!session || session.user.role != 'admin') return res.status(400).json({ message : '관리자 권한이 없습니다.' }) 
        // 컨텐츠 유효성검사
        if(!verifyContent(req.body)) return res.status(400).json({ message : '컨텐츠의 내용을 확인해주세요.' })

        try {
            const insertData = { ...req.body.content, like : 0, dislike : 0 }
            const result = await db.collection('contents').insertOne(insertData)
            
            return res.status(200).json({ result : result, message : '컨텐츠 업로드 완료' })
        }
        catch(err) {
            console.error(err)
            return res.status(500).json({ message : '서버에러 발생' })
        }
    }
}
