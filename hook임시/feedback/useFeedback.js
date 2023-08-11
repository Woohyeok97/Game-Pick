import axios from "axios"
import { useState } from "react"

export default function useFeedback(data, collection) {
    const [ feedbackCuont, setFeedbackCount ] = useState({ like : data.like, dislike : data.dislike })
    const [ userFeedback, setUserFeedback ] = useState('')

    const fetchUserFeedback = async () => {
        try {
            const uri = process.env.NEXT_PUBLIC_COMMENT_FEEDBACK_API
            const submitData = { parent : data._id }

            const response = await axios.get(uri, { params : submitData })
            setUserFeedback(response.data.result)

        } catch(err) {
            console.log(err)
        }
    }
    const createFeedback = async (type) => {
        try {
            const uri = process.env.NEXT_PUBLIC_COMMENT_FEEDBACK_API
            const submitData = { parent : data._id, type : type, collection }

            const response = await axios.post(uri, submitData)
            console.log(response.data)
        } catch(err) {
            console.log(err)
            throw err
        }
    }
    const deleteFeedback = async () => {
        try {
            const uri = process.env.NEXT_PUBLIC_COMMENT_FEEDBACK_API + `/${userFeedback._id}`
            const submitData = { userFeedback : JSON.stringify(userFeedback), collection }

            const response = await axios.delete(uri, { params : submitData })
            console.log(response.data)
        } catch(err) {
            console.log(err)
            throw err
        }
    }
    

    return { feedbackCuont, setFeedbackCount, userFeedback, setUserFeedback, fetchUserFeedback, createFeedback, deleteFeedback }
}