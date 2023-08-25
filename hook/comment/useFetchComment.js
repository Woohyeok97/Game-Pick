import axios from "axios";
import {  useState } from "react";

export default function useFetchComment() {
    const [ comment, setComment ] = useState([])
    const [ tempCommentId, setTempCommentId ] = useState([])
    const [ nextComment, setNextComment ] = useState(true)
    const [ fetchOption, setFetchOption ] = useState('like')

    // 코멘트 가져오기
    const fetchComment = async (contentId, limit) => {
        const uri = process.env.NEXT_PUBLIC_COMMENTS_API
        const submitData = { contentId, skipComment : JSON.stringify(tempCommentId), skipCount : comment.length - tempCommentId.length, fetchOption, limit : limit }

        try {
            const response = await axios.get(uri, { params : submitData })
            setComment((prev) => [ ...prev, ...response.data.result ])
            
            if(!response.data.next.length) {
                setNextComment(false)
            } else {
                setNextComment(true)
            }
        } catch(err) {
            console.log(err)
        }
    }



    return { comment, setComment, fetchComment, tempCommentId, setTempCommentId, nextComment, fetchOption, setFetchOption  }
}