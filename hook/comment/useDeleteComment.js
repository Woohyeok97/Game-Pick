import { useDispatch } from "react-redux"
// axios 인스턴스
import { commentInstance } from "@/util/api/instance/commentInstance"
// reducer
import { deleteComment } from "@/redux/features/commentListSlice"


export default function useDeleteComment({ comment }) {
    const dispatch = useDispatch()

    // 코멘트 삭제
    const removeComment = async () => {
        try {
            const submission = { userEmail : comment.userEmail }
            const response = await commentInstance.delete(`/${comment._id}`, { params : submission })

            dispatch(deleteComment(response.result))
            return { severity : 'success', message : response.message }
        } catch(err) {
            console.error(err)
            return { severity : 'error', message : err.message }
        }
    }

    return { removeComment }
}