import { useState } from "react"
import axios from "axios"

// 역할 : 서버로부터 기존에 유저가 올린 피드백 타입을 가져옴(피드백유무 확인)
export default function useGetFeedbackType () {
    const [ feedbackType, setFeedbackType ] = useState(null)
    
    const getFeedbackType = async (uri, data) => {
        try {
            const response = await axios.get(uri, { params : { data } })
            // 서버로부터 전달받은 피드백 데이터로 state를 변경
            setFeedbackType(response.data.feedbackType)

        } catch (err) {
            console.log(err)
        }
    }

    // 컨텐츠 피드백 가져오기
    const getContentFeedbackType = async (contentId) => {
        const uri = process.env.NEXT_PUBLIC_CONTENT_FEEDBACK_API
        await getFeedbackType(uri, contentId)
    }

    // 코멘트 피드백 가져오기
    const getCommentFeedbackType = async (commentId) => {
        const uri = process.env.NEXT_PUBLIC_COMMENT_FEEDBACK_API
        await getFeedbackType(uri, commentId)
    }

    return { feedbackType, getContentFeedbackType, getCommentFeedbackType }
}