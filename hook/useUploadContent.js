import { useState } from "react"
import axios from "axios"


export default function useUploadContent() {
    // content 유효성 검사
    const verifyContent = (data) => {
        for(let i in data) {
            if(!data[i]) {
                return false
            }     
        }
        return true
    }

    const uploadContent = async (content) => {
        if(!verifyContent(content)) {
            console.log('공백')
            return
        }
        const response = await axios.post('/api/game_content', content)
        console.log(response)

    }

    return { uploadContent }
}