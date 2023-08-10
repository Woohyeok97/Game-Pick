import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
// 유효성검사 유틸함수
import verifyContent from "@/util/verifyData"
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)
    const db = (await connectDB).db('project')
    
    // 코멘트 가져오기
    if(req.method == 'GET') {
        try {
            // DB탐색 필터
            const filter = { parent : req.query.contentId }
            // 만약 클라이언트에 임시 코멘트가 존재한다면 필터에 해당 id를 추가함
            const skipComment = JSON.parse(req.query.skipComment)

            if(skipComment.length > 0) {
                filter._id = { $nin : skipComment.map((item) => new ObjectId(item)) }
            }
             
            const result = await db.collection('game_comment')
            .find(filter)
            .sort(req.query.fetchOption == 'like' ? { like : -1 } : { createDate : -1 })
            .skip(+req.query.skipCount)
            .limit(2)
            .toArray()

            const next = await db.collection('game_comment')
            .find(filter)
            .sort(req.query.fetchOption == 'like' ? { like : -1 } : { createDate : -1 })
            .skip(+req.query.skipCount + 2)
            .limit(2)
            .toArray()


            return res.status(200).json({ result : result, next : next})
        } catch(err) {
            console.error(err)
            return res.status(500).json({ message : '서버 에러발생' })
        }

    }

    // 코멘트 업로드
    if(req.method =='POST') {
        if(!session) return res.status(400).json({ message : '로그인 이후 이용해 주세요.' })
        if(!verifyContent(req.body)) return res.status(400).json({ message : '코멘트의 데이터를 확인해주세요.' })

        try {
            const insertData = {
                parent : req.body.contentId,
                text : req.body.commentText,
                userName : session.user.name,
                userEmail : session.user.email,
                userImage : session.user.image,
                like : 0,
                dislike : 0,
                createDate : new Date(),
            }

            const result = await db.collection('game_comment').insertOne(insertData)
            return res.status(200).json({ result : result, message : '코멘트 업로드 성공!' })

        } catch(err) {
            console.error(err)
            return res.status(500).json({ message : '서버 에러발생' })
        }
    }
}

// export default async function handler(req, res) {
//     const session = await getServerSession(req, res, authOptions)
//     // 코멘트 가져오기
//     if(req.method == 'GET') {

//         try {
//             const db = (await connectDB).db('project')
//             const comment = await db.collection('game_comment').find({ parent : req.query._id }).toArray()

//             // 피드백 갯수 & 피드백 여부 가져오기
//             // map함수는 콜백함수의 프로미스가 완료되기를 기다리지않고 바로 반환하기 때문에, Promise.all()을 사용해서 각 요소의 프로미스가 완료되기를 기다림
//             // Promise.all()앞에 await을 붙이는 이유는, Promise.all()의 반환값의 프로미스완료를 기다리기 위함
//             const result = await Promise.all(comment.map( async (item, i) => {
//                 const likeFeedbackCount = await db.collection('game_comment_feedback').countDocuments({ parent : item._id.toString(), feedback : 'like' })
//                 const dislikeFeedbackCount = await db.collection('game_comment_feedback').countDocuments({ parent : item._id.toString(), feedback : 'dislike' })
                
//                 let feedbackType = ''
//                 if(session) {
//                     const userFeedback = await db.collection('game_comment_feedback').findOne({ parent : item._id.toString(), userEmail : session.user.email })
//                     if(userFeedback) feedbackType = userFeedback.feedback
//                 }
//                 // 가져온 피드백 갯수를 comment 요소에 추가
//                 return { ...item, like : likeFeedbackCount, dislike : dislikeFeedbackCount, feedbackType : feedbackType }
//             }))

//             result.sort((a, b)=> b.like - a.like )

//             return res.status(200).json({ result : result, message : '코멘트 요청성공' })
            
//         } catch(err) {
//             console.error(err)
//             return res.status(500).json({ message : '서버 에러발생' })
//         }
//     }

//     // 코멘트 업로드
//     if(req.method == 'POST') {
//         // 코멘트 유효성검사
//         if(!verifyContent(req.body)) return res.status(400).json({ message : '코멘트의 데이터를 확인해주세요.' })
//         if(!session) return res.status(400).json({ message : '로그인 이후 이용해 주세요.' })
        
//         try {
//             const comment = { 
//                 ...req.body,
//                 userName : session.user.name,
//                 userEmail : session.user.email,
//                 userImage : session.user.image,
//                 commentDate : new Date(),
//             }
//             const db = (await connectDB).db('project')
//             const result = await db.collection('game_comment').insertOne(comment)

//             return res.status(200).json({ result : result, message : '코멘트 작성완료' })
//         }
//         catch(err) {
//             console.error(err)
//             return res.status(500).json({ message : '서버 에러발생' })
//         }
//     }

// }
