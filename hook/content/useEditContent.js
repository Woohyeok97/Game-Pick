import { useEffect, useState } from "react"
import { format, parseISO } from "date-fns"
// axios 인스턴스
import { contentInstance } from "@/util/api/instance/contentInstance"
// 유틸함수
import uploadS3 from "@/util/api/uploadS3"
import verifyContent from "@/util/verifyData"


export default function useEditContent({ contentId }) {
    const [ prevContent, setPrevContent ] = useState('')

    useEffect(()=>{
        fetchPrevContent()
    }, [])
 
    // prevContent 요청 
    async function fetchPrevContent() {
        const response = await contentInstance.get(`/${contentId}`)

        // type="date" input이 인식할수 있도록 createDate를 yyyy-MM-dd 형식으로 변환
        const createDateToString = format(new Date(response.result.createDate), 'yyyy-MM-dd')
        setPrevContent({ ...response.result, createDate : createDateToString })
    }

    // prevContent 값 변경
    const editContent = async (e) => {
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

        setPrevContent((prev) => {
            return { ...prev, [name] : value }
        })
    }

    // 컨텐츠 수정 요청
    const updateContent = async () => {
        if(!verifyContent(prevContent)) return { severity : 'warning', message : '컨텐츠 내용을 확인해 해주세요.' }

        try {
            const submission = { prevContent }
            await contentInstance.put(`/${contentId}`, submission)

            return { severity : 'success', message : '컨텐츠 수정 완료!' }
        } catch(err) {
            console.log(err)
            return { severity : 'error', message : '컨텐츠 수정 실패, 다시 한번 시도 해주세요.' }
        }
    }

    return { prevContent, editContent, updateContent, uploadS3 }
}