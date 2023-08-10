import axios from "axios"

export default function useDeleteComment() {

    const deleteComment = async (comment)=> {
        const uri = process.env.NEXT_PUBLIC_COMMENT_API + `/${comment._id}`
        const submitData = { userEmail : comment.userEmail }

        try {
            const response = await axios.delete(uri, { params : submitData })
            console.log(response.data)
            
        } catch(err) {
            console.log(err)
        }
    }

    return { deleteComment }
}