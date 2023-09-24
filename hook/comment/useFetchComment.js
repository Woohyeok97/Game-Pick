import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// axios 인스턴스
import { commentInstance } from "@/util/api/instance/commentInstance";
// reducer
import { setCommentList } from "@/redux/features/commentListSlice";


export default function useFetchComment({ contentId, limit }) {
    const [ sortOption, setSortOption ] = useState('like')
    const [ hasNext, setHasNext ] = useState(false)
    const commentList = useSelector(state => state.commentList)
    const dispatch = useDispatch()

    useEffect(()=>{
        setToCommentList()
    }, [sortOption])

    // 코멘트 요청
    async function setToCommentList() {
        try {
            const submission = { contentId, limit, sortOption, skipComment : JSON.stringify(commentList) }
            const response = await commentInstance.get('/', { params : submission })
            
            dispatch(setCommentList(response.commentList))
            setHasNext(response.hasNext)
        } catch(err) {
            console.error(err)
        }
    }

    return { setToCommentList, hasNext, setSortOption }
}
