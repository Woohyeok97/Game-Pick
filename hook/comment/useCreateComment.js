import axios from "axios"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// reducer
import { setComment } from "@/redux/features/commentSlice";

export default function useCreateComment(contentId) {
    const [ textValue, setTextValue ] = useState('')
    const comment = useSelector((state) => state.comment)
    const dispatch = useDispatch()

    // 코멘트 업로드 요청 함수
    async function createComment() {
        const uri = process.env.NEXT_PUBLIC_COMMENTS_API
        const submission = { contentId, textValue }
        
        try {
            const response = await axios.post(uri, submission)
            return response.data.result.insertedId
        } catch(err) {
            console.error(err)
        }
    }

    async function addComment(session) {
        const addCommentId = await createComment()

        const addComment = {
            _id : addCommentId,
            userName : session.data.user.name,
            userImage : session.data.user.image,
            userEmail : session.data.user.email,
            text : textValue,
            like : 0,
            dislike : 0,
            createDate : new Date(),
        }

        dispatch(setComment([ addComment, ...comment ]))
        setTextValue('')
    } 

    return { textValue, setTextValue, addComment }
}