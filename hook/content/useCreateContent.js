import { useState } from "react"
import { parseISO } from "date-fns"
// axios 인스턴스
import { contentInstance } from "@/util/api/instance/contentInstance"
// 유틸함수
import uploadS3 from "@/util/api/uploadS3"
import verifyContent from "@/util/verifyData"


export default function useCreateContent() {
    const [ content, setContent ] = useState({
        title : '',
        createDate : '',
        image : '',
        trailerURL : '',
    })
    
    const handleContentChange = async (e) => {
        const name = e.target.name
        let value

        switch(e.target.type) {
            case 'text' : 
                value = e.target.value
                break;
            case 'file' : 
                value = await uploadS3(e.target.files[0])
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
        if(!verifyContent(content)) return { severity : 'warning', message : '컨텐츠 내용을 확인해 해주세요.' }
        
        try {
            const submission = { content }
            const response = await contentInstance.post('/', submission)
            
            return { severity : 'success', message : response.message }
        } catch(err) {
            console.error(err)
            return { severity : 'error', message : '컨텐츠 업로드 실패, 다시 한번 시도 해주세요.' }
        }
    }


    return { content, setContent, handleContentChange, createContent }
}