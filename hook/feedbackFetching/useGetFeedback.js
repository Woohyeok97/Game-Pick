import axios from "axios"
import { useState } from "react"

export default function useGetFeedback() {
    // 피드백 가져오기 트리거 state
    const [ refreshFeedback, setRefreshFeedback ] = useState(false)
    const [ like, setLike ] = useState(0)
    const [ dislike, setDislike ] = useState(0)
    // 유저의 기존 피드백정보를 저장
    const [ userFeedback, setUserFeedback ] = useState('')
    
    const getFeedback = async (uri, data) => {
        try {
            const response = await axios.get(uri, { params : { data } })

            setLike(response.data.likeFeedbackCount)
            setDislike(response.data.dislikeFeedbackCount)
            setUserFeedback(response.data.feedbackType)
        }   
        catch (err) {
            console.log(err)
        }
    }

    // 컨텐츠 피드백 가져오기
    const getContentFeedback = async (contentId) => {
        const uri = process.env.NEXT_PUBLIC_CONTENT_FEEDBACK_API
        await getFeedback(uri, contentId)
    }

    return { like, dislike, userFeedback, getContentFeedback, refreshFeedback, setRefreshFeedback }
}