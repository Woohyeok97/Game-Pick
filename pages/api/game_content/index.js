import { connectDB } from "@/util/database";
// 유효성검사 유틸함수
import verifyContent from "@/util/verifyData";

export default async function handler(req, res) {
    // POST 요청
    if(req.method == 'POST') {
        // 컨텐츠 유효성검사
        if(!verifyContent(req.body)) return res.status(400).json({ message : '컨텐츠의 내용을 확인해주세요.' })

        try {
            const db = (await connectDB).db('project')
            const result = await db.collection('game_content').insertOne(...req.body )

            res.status(200).json({ result : result, message : '컨텐츠 업로드완료' })
        }
        catch(err) {
            console.error(err)
            return res.status(500).json({ message : '서버 에러발생' })
        }
    }

    // // GET 요청
    // if(req.method == 'GET') {

    //     try {
    //         const db = (await connectDB).db('project')
    //         let result = []
    //         const most = await db.collection('game_content_feedback').aggregate([
    //             {
    //               $match: { feedback: 'like' } // 'like' 값을 가진 도큐먼트만 선택
    //             },
    //             {
    //               $group: {
    //                 _id: '$parent', // parent 값에 따라 그룹화
    //                 count: { $sum: 1 } // 같은 parent 값을 가진 도큐먼트의 수 카운트
    //               }
    //             },
    //             {
    //               $sort: { count: -1 } // 카운트 값에 따라 내림차순 정렬
    //             },
    //             {
    //               $limit: 3 // 가장 많이 중복되는 parent 값 하나만 선택
    //             }
    //             ]).toArray();
            
            
    //         return res.status(200).json({ result : most })

    //     } catch(err) {
    //         console.error(err)
    //         return res.status(500).json({ message : '서버 에러발생' })
    //     }
    // }
}
