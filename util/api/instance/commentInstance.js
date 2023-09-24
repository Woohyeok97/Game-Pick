import axios from "axios"

// comment 요청 axios인스턴스
export const commentInstance = axios.create({
    baseURL : process.env.NEXT_PUBLIC_COMMENTS_API,
})

// 에러처리 인터셉터
commentInstance.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        throw error
    }
)