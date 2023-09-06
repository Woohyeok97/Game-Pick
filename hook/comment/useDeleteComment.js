import axios from "axios"
import { useDispatch } from "react-redux"
// reducer
import { deleteComment } from "@/redux/features/commentListSlice"


export default function useDeleteComment() {
    const dispatch = useDispatch()

    const requestDeleteComment = async (comment) => {
        try {
            const uri = process.env.NEXT_PUBLIC_COMMENTS_API + `/${comment._id}`
            const submission = { userEmail : comment.userEmail }

            const response = await axios.delete(uri, { params : submission })
            return response.data.result
        } catch(err) {
            console.log(err)
        }
    }

    const deleteToCommentList = (deletedCommentId) => {
        dispatch(deleteComment(deletedCommentId))
    }

    return { requestDeleteComment, deleteToCommentList }
}