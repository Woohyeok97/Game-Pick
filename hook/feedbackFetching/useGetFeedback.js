import axios from "axios"
import { useState } from "react"


export default function useGetFeedback() {
    const [ like, setLike ] = useState(0)
    const [ dislike, setDislike ] = useState(0)
    
    const getFeedback = async (uri, data) => {
        try {
            const response = await axios.get(uri, { params : { data } })
            return response.data
        }   
        catch (err) {
            console.log(err)
        }
    }

    const getContentFeedback = async (contentId) => {
        const uri = process.env.NEXT_PUBLIC_CONTENT_FEEDBACK_API
        const data = await getFeedback(uri, contentId)

        setLike(data.likeCount)
        setDislike(data.dislikeCount)
    }

    return { like, dislike, getContentFeedback }
}