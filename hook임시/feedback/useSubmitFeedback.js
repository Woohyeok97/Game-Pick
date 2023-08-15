import axios from "axios"

export default function useSubmitFeedback(data, collection) {

    // 피드백 가져오기 요청
    const fetchUserFeedback = async () => {
        try {
            const uri = process.env.NEXT_PUBLIC_FEEDBACK_API
            const submitData = { parent : data._id }

            const response = await axios.get(uri, { params : submitData })
            return response.data.result

        } catch(err) {
            console.log(err)
        }
    }

    // 피드백 생성 요청
    const createFeedback = async (type) => {
        try {
            const uri = process.env.NEXT_PUBLIC_FEEDBACK_API
            const submitData = { parent : data._id, type : type, collection }

            const response = await axios.post(uri, submitData)
            console.log(response.data)
        } catch(err) {
            console.log(err)
            throw err
        }
    }

    // 피드백 삭제 요청
    const deleteFeedback = async (prevFeedback) => {
        try {
            const uri = process.env.NEXT_PUBLIC_FEEDBACK_API + `/${prevFeedback._id}`
            const submitData = { userFeedback : JSON.stringify(prevFeedback), collection }

            const response = await axios.delete(uri, { params : submitData })
            console.log(response.data)
        } catch(err) {
            console.log(err)
            throw err
        }
    }
    

    return { fetchUserFeedback, createFeedback, deleteFeedback }
}
