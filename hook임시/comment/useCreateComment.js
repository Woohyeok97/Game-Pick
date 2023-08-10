import axios from "axios"
import { useState } from "react";


export default function useCreateComment() {
    const [ commentText, setCommentText ] = useState('')

    // comment입력 핸들러 함수
    const handleCommentChange = (e) => {
        setCommentText(e.target.value)
    }
    // 코멘트 업로드 요청 함수
    const createComment = async (contentId) => {
        const uri = process.env.NEXT_PUBLIC_COMMENT_API
        const submitData = { commentText, contentId }
        
        try {
            const response = await axios.post(uri, submitData)
            return response.data.result.insertedId
        } catch(err) {
            console.error(err)
        }
    }

    return { commentText, setCommentText, handleCommentChange, createComment }
}