import axios from "axios"
//유효성검사 유틸함수
import verifyContent from "@/util/verifyData"

// 커스텀훅 역할 : 서버에 데이터수정 요청
export default function useUpDateData() {

    // put요청 함수
    const updataData = async (uri, data, errorMessage) => {
        // 유효성 검사
        if(!verifyContent(data)) {
            console.log(errorMessage)
            return
        }
        try {
            const response = await axios.put(uri, data)
            alert(response.data.message)
            console.log(response)
        }
        catch(err) {
            console.error(err)
        }
    }

    // 컨텐츠 수정
    const updateContent = async (content, id) => {
        const uri = process.env.NEXT_PUBLIC_CONTENT_API + `/${id}`
        const errorMessage = "컨텐츠의 내용을 확인해주세요."

        updataData(uri, content, errorMessage)
    }

    return { updateContent }
}