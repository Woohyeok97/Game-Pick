import axios from "axios"

// feedback 요청 axios인스턴스
export const feedbackInstance = axios.create({
    baseURL : process.env.NEXT_PUBLIC_FEEDBACK_API,
})

// 에러처리 인터셉터
feedbackInstance.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        throw error
    }
)