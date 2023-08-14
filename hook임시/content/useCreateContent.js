import { useState } from "react"
import { parseISO } from "date-fns"
import axios from "axios"

export default function useCreateContent() {
    const [ content, setContent ] = useState({})

    const handleChangeContent = (e) => {
        let name = e.target.name
        let value

        switch(e.target.type) {
            case 'text' : 
                value = e.target.value
                break;
            case 'file' : 
                value = e.target.files[0].name
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
            const uri = process.env.NEXT_PUBLIC_CONTENT_API
            const submission = { content }

            const response = await axios.post(uri, submission)
            console.log(response.data)

        } catch(err) {
            console.error(err)
        }
    }

    return { content, setContent, handleChangeContent, createContent }
}