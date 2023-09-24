import { useState } from "react";
import { useDispatch } from "react-redux";
// axios 인스턴스
import { commentInstance } from "@/util/api/instance/commentInstance";
// reducer
import { addComment } from "@/redux/features/commentListSlice";


export default function useCreateComment({ contentId }) {
    const [ textValue, setTextValue ] = useState('')
    const dispatch = useDispatch()
    
    // 코멘트 업로드
    const createComment = async () => {
        if(!textValue) return { severity : 'warning', message : '코멘트 내용을 확인해 주세요.' }

        try {
            const submission = { contentId, textValue }
            const response = await commentInstance.post('/', submission)
            
            dispatch(addComment(response.result.insertedData))
            return { severity : 'success', message : response.message }
        } catch(err) {
            console.error(err)
            return { severity : 'error', message : err.message }
        }
    } 

    return { textValue, setTextValue, createComment }
}
// import axios from "axios"
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// // reducer
// import { addComment } from "@/redux/features/commentListSlice";
// import { commentInstance } from "@/util/api/instance/commentInstance";

// export default function useCreateComment({ contentId }) {
//     const [ textValue, setTextValue ] = useState('')
//     const dispatch = useDispatch()
    
//     // 코멘트 업로드 요청 함수
//     const requestCreateComment = async () => {
//         const uri = process.env.NEXT_PUBLIC_COMMENTS_API
//         const submission = { contentId, textValue }
        
//         try {
//             const response = await axios.post(uri, submission)
//             return response.data.result.insertedData
//         } catch(err) {
//             throw err
//         }
//     }

//     const addToCommentList = async () => {
//         // const submission = { contentId, textValue }
//         // const response = await commentInstance.post('/', submission)
//         const insertedData = await requestCreateComment(contentId)
        
//         dispatch(addComment(insertedData))
//         setTextValue('')
//     } 

//     return { textValue, setTextValue, addToCommentList }
// }