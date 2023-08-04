import { useState } from "react"
import axios from "axios"

export default function useGetData() {
    const [ refreshFeedback, setRefreshFeedback ] = useState(false)
    const [ rankedContent, setRankedContent ] = useState('')
    const [ comment, setComment ] = useState(null)

    // 응답받은 데이터로 setComment 함수실행
    const getData = async (uri, data) => {
        try {
            const response = await axios.get(uri, data)
            return response.data.result
        } catch(err) {
            console.log(err)
        }
    }
    // 순위 컨텐츠 가져오기
    const getRankedContent = async () => {
        const uri = process.env.NEXT_PUBLIC_CONTENT_API
        const data = await getData(uri, 'ㅎㅇ')
        console.log(data)
    }
    
    // 코멘트 가져오기
    const getComment = async (_id) => {
        const uri = process.env.NEXT_PUBLIC_COMMENT_API
        const data = await getData(uri, { params : { _id }})
        setComment(data)
    }

    return { comment, setComment, rankedContent, getComment, getRankedContent, refreshFeedback, setRefreshFeedback }
}