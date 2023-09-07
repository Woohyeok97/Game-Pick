import axios from "axios"
import { useState } from "react";
import { useDispatch } from "react-redux";
// reducer
import { addComment } from "@/redux/features/commentListSlice";

export default function useCreateComment() {
    const [ textValue, setTextValue ] = useState('')
    const dispatch = useDispatch()
    
    // 코멘트 업로드 요청 함수
    const requestCreateComment = async (contentId) => {
        const uri = process.env.NEXT_PUBLIC_COMMENTS_API
        const submission = { contentId, textValue }
        
        try {
            const response = await axios.post(uri, submission)
            return response.data.result.insertedData
        } catch(err) {
            console.error(err)
        }
    }

    const addToCommentList = (insertedData) => {
        dispatch(addComment(insertedData))
        setTextValue('')
    } 

    return { textValue, setTextValue, requestCreateComment, addToCommentList }
}