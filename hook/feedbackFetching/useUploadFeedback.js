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

    const uploadContentFeedback = async (feedback, parent) => {
        const uri = process.env.NEXT_PUBLIC_CONTENT_FEEDBACK_API
        const data = { feedback, parent }
        uploadFeedback(uri, data)
    }


    return { uploadContentFeedback }
}