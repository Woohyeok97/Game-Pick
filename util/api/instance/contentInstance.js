import axios from "axios"

// content 요청 axios인스턴스
export const contentInstance = axios.create({
    baseURL : process.env.NEXT_PUBLIC_CONTENTS_API,
})

// 에러처리 인터셉터
contentInstance.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        throw error
    }
)