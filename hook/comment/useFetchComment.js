import { setComment } from "@/redux/features/commentSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function useFetchComment(contentId, limit) {
    const comment = useSelector(state => state.comment)
    const dispatch = useDispatch()
    const [ hasNext, setHasNext ] = useState(false)
    const [ sortOption, setSortOption ] = useState('like')
    
    console.log(sortOption, ': hook!~')
    useEffect(() => {
        // handleSetComment()
    }, [sortOption])


    async function fetchComment() {
        const uri = process.env.NEXT_PUBLIC_COMMENTS_API
        const submission = { contentId, limit, skipComment : JSON.stringify(comment), sortOption }
       
        try {
            const response = await axios.get(uri, { params : submission })
            response.data.hasNext ? setHasNext(true) : setHasNext(false)

            return response.data.result
        } catch(err) {
            console.error(err)
        }
    }   

    async function handleSetComment() {
        const result = await fetchComment()
        dispatch(setComment([...comment, ...result]))
    }

    return { handleSetComment, hasNext, setSortOption }
}

// import axios from "axios";
// import { useState } from "react";

// export default function useFetchComment() {
//     const [ comment, setComment ] = useState([])
//     const [ tempCommentId, setTempCommentId ] = useState([])
//     const [ nextComment, setNextComment ] = useState(true)
//     const [ fetchOption, setFetchOption ] = useState('like')

//     // 코멘트 가져오기
//     const fetchComment = async (contentId, limit) => {
//         const uri = process.env.NEXT_PUBLIC_COMMENTS_API
//         const submitData = { contentId, skipComment : JSON.stringify(tempCommentId), skipCount : comment.length - tempCommentId.length, fetchOption, limit : limit }

//         try {
//             const response = await axios.get(uri, { params : submitData })
//             setComment((prev) => [ ...prev, ...response.data.result ])
            
//             if(!response.data.next.length) {
//                 setNextComment(false)
//             } else {
//                 setNextComment(true)
//             }
//         } catch(err) {
//             console.log(err)
//         }
//     }



//     return { comment, setComment, fetchComment, tempCommentId, setTempCommentId, nextComment, fetchOption, setFetchOption  }
// }