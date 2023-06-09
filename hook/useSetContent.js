import { useEffect, useState } from "react"
import { parseISO, format } from "date-fns"
import axios from "axios"

export default function useSetContent() {
    const [ content, setContent ] = useState({})
    
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
                value = parseISO(e.target.value) // 날짜를 date객체로 변환함
                break;
            default : 
                value = e.target.value   
        }

        setContent({ ...content, [name] : value })
    }

    const setPrevContent = async (id) => {
        const response = await axios.get(`/api/game_content/${id}`)
        const content = { ...response.data.result, releaseDate : format(new Date(response.data.result.releaseDate), 'yyyy-MM-dd') }
        setContent(content)
    }
    
    return { content, handleInputChange, setPrevContent }
}