import { useState } from "react"
import axios from "axios"

export default function useGetData() {
    const [ comment, setComment ] = useState(null)

    // 서버에 코멘트 array 요청후, comment를 변경함
    const getComment = async (_id) => {
        try {
            const response = await axios.get(`/api/game_comment`, { params : { _id }})
            setComment(response.data.result)
        } catch(err) {
            console.log(err)
        }

    }

    return { comment, getComment }
}