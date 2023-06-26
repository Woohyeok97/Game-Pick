import axios from "axios"
import format from "date-fns/format"
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

    const uploadComment =  async (comment, _id) => {
        // 코멘트 유효성 검사
        if(!verifyContent(comment)) {
            console.log('코멘트를 입력해 주세요.')
            return
        }
        try {
            const response = await axios.post('/api/game_comment', { ...comment, parent : _id })
            alert(response.data.message)
            console.log(response)
        } catch(err) {
            console.log(err)
        }
    }

    return { uploadContent, uploadComment }
}