import axios from "axios"
import { useDispatch } from "react-redux"
// reducer
import { deleteComment } from "@/redux/features/commentListSlice"


export default function useDeleteComment({ comment }) {
    const dispatch = useDispatch()

    const requestDeleteComment = async () => {
        try {
            const uri = process.env.NEXT_PUBLIC_COMMENTS_API + `/${comment._id}`
            const submission = { userEmail : comment.userEmail }

            const response = await axios.delete(uri, { params : submission })
            return response.data.result
        } catch(err) {
            console.log(err)
            throw err
        }
    }

    const deleteToCommentList = async () => {
        const deletedCommentId = await requestDeleteComment(comment)
        dispatch(deleteComment(deletedCommentId))
    }

    return { deleteToCommentList }
}