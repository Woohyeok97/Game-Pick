import { connectDB } from "@/util/database";

export default async function handler(req, res) {
    if(req.method == 'POST') {

        if(!verifyContent(req.body)) {
            return res.status(400).json({ message : '컨텐츠의 내용을 확인해주세요.' })
        }

        try {
            const content = { ...req.body, like : 0, unlike : 0}
            const db = (await connectDB).db('project')
            const result = await db.collection('game_content').insertOne(content)

            res.status(200).json(result)
        }
        catch(err) {
            console.error(err)
            return res.status(500).json({ message : '서버 에러발생' })
        }

    }
}

function verifyContent(data) {
    for(let i in data) {
        if(!data[i]) return false
    }
    return true
}