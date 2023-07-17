import axios from "axios"
import { useState } from "react"

export default function useGetFeedback() {
    const [ like, setLike ] = useState(0)
    const [ dislike, setDislike ] = useState(0)
    // 유저의 기존 피드백정보를 저장
    const [ userFeedback, setUserFeedback ] = useState({ isFeedback : false, type : '' })
    
    const getFeedback = async (uri, data) => {
        try {
            const response = await axios.get(uri, { params : { data } })
            return response.data
        }   
        catch (err) {
            console.log(err)
        }
    }

    // 컨텐츠 피드백 가져오기
    const getContentFeedback = async (contentId) => {
        const uri = process.env.NEXT_PUBLIC_CONTENT_FEEDBACK_API
        const data = await getFeedback(uri, contentId)
        
        setLike(data.likeCount)
        setDislike(data.dislikeCount)
        setUserFeedback({ isFeedback : data.isFeedback, type : data.feedbackType })
    }

    return { like, dislike, userFeedback, getContentFeedback }
}