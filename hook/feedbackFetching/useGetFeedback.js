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
            
            setLike(response.data.likeCount)
            setDislike(response.data.dislikeCount)
            setUserFeedback({ isFeedback : response.data.isFeedback, type : response.data.feedbackType })
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

    // 코멘트 피드백 가져오기
    const getCommentFeedback = async (commentId) => {
        const uri = process.env.NEXT_PUBLIC_COMMENT_FEEDBACK_API
        await getFeedback(uri, commentId)
    }

    return { like, dislike, userFeedback, getContentFeedback, getCommentFeedback }
}