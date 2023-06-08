import { useState } from "react"
import { parseISO } from "date-fns"

export default function useSetContent() {
    const [ content, setContent ] = useState({
        title : '',
        releaseDate : '',
        image : '',
        trailerUrl : ''
    })
    
    const handleInput = (e) => {
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
                value = parseISO(e.target.value)
                break;
            default : 
                value = e.target.value   
        }

        setContent({ ...content, [name] : value })
    }
    
    
    return { content, setContent, handleInput }
}