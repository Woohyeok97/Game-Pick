import { connectDB } from "@/util/database";
// 유효성검사 유틸함수
import verifyContent from "@/util/verifyData";

export default async function handler(req, res) {
    // POST 요청
    if(req.method == 'POST') {
        // 컨텐츠 유효성검사
        if(!verifyContent(req.body)) return res.status(400).json({ message : '컨텐츠의 내용을 확인해주세요.' })

        try {
            const content = { ...req.body, like : 0, unlike : 0}
            const db = (await connectDB).db('project')
            const result = await db.collection('game_content').insertOne(content)

            res.status(200).json({ result : result, message : '컨텐츠 업로드완료' })
        }
        catch(err) {
            console.error(err)
            return res.status(500).json({ message : '서버 에러발생' })
        }
    }
}
