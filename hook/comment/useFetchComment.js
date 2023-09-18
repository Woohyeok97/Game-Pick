import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// reducer
import { setCommentList } from "@/redux/features/commentListSlice";

export default function useFetchComment({ contentId, limit }) {
    const commentList = useSelector(state => state.commentList)
    const dispatch = useDispatch()

    const [ sortOption, setSortOption ] = useState('like')
    const [ hasNext, setHasNext ] = useState(false)

    
    const requestfetchComment = async () => {
        const uri = process.env.NEXT_PUBLIC_COMMENTS_API
        const submission = { contentId, limit, sortOption, skipComment : JSON.stringify(commentList) }

        try {
            const response = await axios.get(uri, { params : submission })
            return response.data
        } catch(err) {
            throw err
        }
    }   

    const setToCommentList = async () => {
        const fetched = await requestfetchComment()
   
        if(fetched.commentList.length) {
            dispatch(setCommentList(fetched.commentList))
            setHasNext(fetched.hasNext)
        }
    }

    useEffect(()=>{
        setToCommentList()
    }, [sortOption])


    return { setToCommentList, hasNext, setSortOption }
}

// import axios from "axios";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// // reducer
// import { setCommentList } from "@/redux/features/commentListSlice";

// export default function useFetchComment() {
//     const commentList = useSelector(state => state.commentList)
//     const dispatch = useDispatch()
//     const [ sortOption, setSortOption ] = useState('like')


//     const requestfetchComment = async (contentId, limit) => {
//         const uri = process.env.NEXT_PUBLIC_COMMENTS_API
//         const submission = { contentId, limit, skipComment : JSON.stringify(commentList), sortOption }

//         try {
//             const response = await axios.get(uri, { params : submission })
//             return response.data
//         } catch(err) {
//             console.error(err)
//         }
//     }   

//     const setToCommentList = (fetchedCommentList) => {
//         dispatch(setCommentList(fetchedCommentList))
//     }


//     return { requestfetchComment, setToCommentList, sortOption, setSortOption }
// }
