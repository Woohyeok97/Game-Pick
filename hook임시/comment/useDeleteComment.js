import axios from "axios"

export default function useDeleteComment() {

    const deleteComment = async (comment)=> {
        try {
            const uri = process.env.NEXT_PUBLIC_COMMENT_API + `/${comment._id}`
            const submission = { userEmail : comment.userEmail }

            const response = await axios.delete(uri, { params : submission })
            console.log(response.data)
            
        } catch(err) {
            console.log(err)
        }
    }

    return { deleteComment }
}