import axios from "axios"
import { useState } from "react"

export default function useFeedback(data) {
    const [ feedback, setFeedback ] = useState({ like : data.like, dislike : data.dislike })
    const [ prevFeedback, setPrevFeedback ] = useState('')
    
    const fetchPrevFeedback = async () => {
        try {
            const uri = process.env.NEXT_PUBLIC_COMMENT_FEEDBACK_API
            const submitData = { parent : data._id }

            const response = await axios.get(uri, { params : submitData })
            setPrevFeedback(response.data.result)

        } catch(err) {
            console.log(err)
        }
    }

    const createFeedback = async (type) => {
        try {
            const uri = process.env.NEXT_PUBLIC_COMMENT_FEEDBACK_API
            const submitData = { parent : data._id, type : type }

            const response = await axios.post(uri, submitData)
            console.log(response.data)
            
        } catch(err) {
            console.log(err)
        }
    }
    const deleteFeedback = async () => {
        try {
            const uri = process.env.NEXT_PUBLIC_COMMENT_FEEDBACK_API + `/${prevFeedback._id}`
            const response = await axios.delete(uri)
            console.log(response.data)
        } catch(err) {
            console.log(err)
        }
    }


    return { feedback, setFeedback, fetchPrevFeedback, createFeedback, deleteFeedback }
}