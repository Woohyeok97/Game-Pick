import { useState } from "react"
import { parseISO, format } from "date-fns"
import axios from "axios"

export default function useSetData() {
    const [ content, setContent ] = useState({})
    // 사용자가 input에 입력한 데이터로 setContent()함수 실행
    const handleInputChange = (e) => {
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

        setContent({ ...content, [name] : value })
    }
    // 컨텐츠 수정시 실행할 함수
    // 기존 컨텐츠 데이터를 서버한테서 전달받고, setContent()함수 실행
    const setPrevContent = async (id) => {
        try {
            const response = await axios.get(`/api/game_content/${id}`)
            // input type='date'는 date객체를 인식못하고 문자열을 인식함
            // 그래서 date객체 상태인 releaseDate를 format()함수를 통해, 다시 문자열로 반환후 setContent()함수 실행
            const content = { ...response.data.result, releaseDate : format(new Date(response.data.result.releaseDate), 'yyyy-MM-dd') }
            setContent(content)

        } catch(err) {
            console.error(err)
        }
    }
    
    return { content, setContent, handleInputChange, setPrevContent }
}