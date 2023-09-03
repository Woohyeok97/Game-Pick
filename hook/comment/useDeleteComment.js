import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
// reducer
import { setCommentList } from "@/redux/features/commentListSlice"


export default function useDeleteComment(comment) {
    const commentList = useSelector(state => state.commentList)
    const dispatch = useDispatch()

    async function requestDeleteComment() {
        try {
            const uri = process.env.NEXT_PUBLIC_COMMENTS_API + `/${comment._id}`
            const submission = { userEmail : comment.userEmail }

            const response = await axios.delete(uri, { params : submission })
        } catch(err) {
            console.log(err)
        }
    }

    async function deleteComment() {
        await requestDeleteComment()
        const filtered = commentList.filter((item) => item._id != comment._id)
        
        dispatch(setCommentList(filtered))
    }

    return { deleteComment }
}