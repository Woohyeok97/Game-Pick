import axios from "axios"
//유효성검사 유틸함수
import verifyContent from "@/util/verifyData"


// 커스텀훅 역할 : 서버에 데이터 업로드
export default function useUploadData() {

    // postd요청 함수
    const uploadData = async (uri, data, errorMessage) => {
        // 데이터 유효성 검사
        if(!verifyContent(data)) {
            console.log(errorMessage);
            return
        }

        try {
            const response = await axios.post(uri, data)
            console.log(response)
        } 
        catch(err) {
            console.error(err)
        }
    }

    // 컨텐츠 업로드
    const uploadContent = async (content) => {
        const uri = process.env.NEXT_PUBLIC_CONTENT_API
        const errorMessage = '컨텐츠의 내용을 확인해주세요'
        console.log('업로드완료')
        // await uploadData(uri, content, errorMessage)
    }
    // 코멘트 업로드
    const uploadComment =  async (comment, _id) => {
        const uri = process.env.NEXT_PUBLIC_COMMENT_API
        const errorMessage = '코멘트의 내용을 확인해주세요'
        
        await uploadData(uri, { ...comment, parent : _id }, errorMessage)
    }
    
    return { uploadContent, uploadComment }
}