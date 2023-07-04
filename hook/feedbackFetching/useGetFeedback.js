import axios from "axios"
import { useState } from "react"


export default function useGetFeedback() {
    const [ like, setLike ] = useState(0)
    const [ dislike, setDislike ] = useState(0)
    
    const getFeedback = async (uri, data) => {
        try {
            const response = await axios.get(uri, { params : { data } })
            console.log(response.data)
            setLike(response.data.likeCount)
            setDislike(response.data.dislikeCount)
        }   
        catch (err) {
            console.log(err)
        }
    }

    const getContentFeedback = (contentId) => {
        const uri = process.env.NEXT_PUBLIC_CONTENT_FEEDBACK_API
        getFeedback(uri, contentId)
    }

    return { like, dislike, getContentFeedback }
}