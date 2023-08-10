import axios from "axios";
import {  useState } from "react";

export default function useFetchComment() {
    const [ comment, setComment ] = useState([])
    const [ tempCommentId, setTempCommentId ] = useState([])
    const [ nextComment, setNextComment ] = useState(true)
    
    // 코멘트 가져오기
    const fetchComment = async (contentId) => {
        const uri = process.env.NEXT_PUBLIC_COMMENT_API
        const submitData = { contentId, skipComment : JSON.stringify(tempCommentId), skipCount : comment.length - tempCommentId.length }

        try {
            const response = await axios.get(uri, { params : submitData })
            setComment((prev) => [ ...prev, ...response.data.result ])
            if(!response.data.next.length) setNextComment(false)
        } catch(err) {
            console.log(err)
        }
    }

    return { comment, setComment, fetchComment, tempCommentId, setTempCommentId, nextComment  }
}