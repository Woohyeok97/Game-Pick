import { useState } from "react"
import axios from "axios"

export default function useGetData() {
    const [ comment, setComment ] = useState(null)

    // get요청 함수
    // 응답받은 데이터로 setComment 함수실행
    const getData = async (uri, data) => {

        try {
            const response = await axios.get(uri, data)
            setComment(response.data.result)
        } 
        catch(err) {
            console.log(err)
        }
    }
    // 코멘트 가져오기
    const getComment = async (_id) => {
        const uri = process.env.NEXT_PUBLIC_COMMENT_API
        getData(uri, { params : { _id }})
    }

    return { comment, getComment }
}