import axios from "axios"
import { format, parseISO } from "date-fns"
import { useEffect, useState } from "react"
// 커스텀 훅
import usePresignedURL from "../S3/usePresignedURL"

export default function useEditContent(contentId) {
    const [ prevContent, setPrevContent ] = useState({})
    const { fetchPresignedURL, uploadS3 } = usePresignedURL()

    useEffect(()=>{
        fetchContent()
    }, [])

    // 수정할 컨텐츠 요청 함수
    async function fetchContent() {
        try {
            const uri = process.env.NEXT_PUBLIC_CONTENTS_API + `/${contentId}`

            const response = await axios.get(uri)
            // type="date" input이 인식할수 있도록 createDate를 yyyy-MM-dd 형식으로 변환
            const createDateToString = format(new Date(response.data.result.createDate), 'yyyy-MM-dd')

            setPrevContent({ ...response.data.result, createDate : createDateToString })
        } catch(err) {
            console.error(err)
            return
        }
    }

    // prevContent 수정 핸들러 함수
    const handleChangeContent = async (e) => {
        let name = e.target.name
        let value

        switch(e.target.type) {
            case 'text' : 
                value = e.target.value
                break;
            case 'file' : 
                value = await fetchPresignedURL(e.target.files[0])
                break;
            case 'date' : 
                value = parseISO(e.target.value) // 문자열 형식의 날짜를 date객체로 변환하여 value에 할당
                break;
            default : 
                value = e.target.value   
        }

        setPrevContent((prev) => {
            return { ...prev, [name] : value }
        })
    }

    // 컨텐츠 수정 요청 함수
    const editContent = async () => {
        try {
            const uri = process.env.NEXT_PUBLIC_CONTENTS_API + `/${contentId}`
            const submission = { prevContent }

            const response = await axios.put(uri, submission)
            console.log(response.data)
        } catch(err) {
            console.log(err)
            return
        }
    }

    return { prevContent, fetchContent, handleChangeContent, editContent, uploadS3 }
}