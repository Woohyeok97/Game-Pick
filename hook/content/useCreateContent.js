import { useState } from "react"
import { parseISO } from "date-fns"
import axios from "axios"
// 커스텀 훅
import usePresignedURL from "../S3/usePresignedURL"

export default function useCreateContent() {
    const [ content, setContent ] = useState({
        title : '',
        createDate : '',
        image : '',
        trailerURL : '',
    })
    
    const { fetchPresignedURL, uploadS3 } = usePresignedURL()

    const handleContentChange = async (e) => {
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

        setContent((prev) => {
            return { ...prev, [name] : value }
        })
    }

    const createContent = async () => {
        try {
            const uri = process.env.NEXT_PUBLIC_CONTENTS_API
            const submission = { content }

            const response = await axios.post(uri, submission)
            console.log(response)
            return response.data

        } catch(err) {
            console.error(err)
        }
    }


    return { content, setContent, handleContentChange, createContent, uploadS3 }
}