import axios from "axios"

// 커스텀훅 역할 : 유저가 입력한 피드백을 서버에 전송
export default function useUploadFeedback() {

    const uploadFeedback = async (uri, data) => {
        try {
            const response = await axios.post(uri, data)
            console.log(response.data)
        }
        catch(err) {
            console.error(err)
        }
    }

    // 컨텐츠 피드백 업로드
    const uploadContentFeedback = async (feedback, parent) => {
        const uri = process.env.NEXT_PUBLIC_CONTENT_FEEDBACK_API
        const data = { feedback, parent }
        await uploadFeedback(uri, data)
    } 

    // 코멘트 피드백 업로드
    const uploadCommentFeedback = async (feedback, parent) => {
        const uri = process.env.NEXT_PUBLIC_COMMENT_FEEDBACK_API
        const data = { feedback, parent }
        await uploadFeedback(uri, data)
    } 


    return { uploadContentFeedback, uploadCommentFeedback }
}