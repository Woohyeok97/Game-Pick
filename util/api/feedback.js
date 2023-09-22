import axios from "axios"

export const fetchRequest = async (uri, submission) => {
    try {
        const response = await axios.get(uri, { params : submission })
        return response.data
    } catch(error) {
        throw error
    }
}
export const postRequest = async (uri, submission) => {
    try {
        const response = await axios.post(uri, submission)
        return response
    } catch(error) {
        throw error
    }
}
export const putRequest = async (uri, submission) => {
    try {
        const response = await axios.put(uri, submission)
        return response.data
    } catch(error) {
        throw error
    }
}
export const deleteRequest = async (uri, submission) => {
    try {
        const response = await axios.delete(uri, { params : submission })
        return response.data
    } catch(error) {
        throw error
    }
}