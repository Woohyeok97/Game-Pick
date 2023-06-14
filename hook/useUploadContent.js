import axios from "axios"
//유효성검사 유틸함수
import verifyContent from "@/util/verifyData"

export default function useUploadContent() {

    const uploadContent = async (content) => {
        // 컨텐츠 유효성 검사
        if(!verifyContent(content)) {
            console.log('컨텐츠의 내용을 확인해주세요.')
            return
        }
        try {
            const response = await axios.post('/api/game_content', content)
            alert(response.data.message)
            console.log(response)
        }catch(err) {
            console.error(err)
        }
    }

    return { uploadContent }
}