import axios from "axios"
// 리컨펌 유틸함수
import reconfirmAction from "@/util/reconfirmAction"

// 커스텀훅 역할 : 서버에 데이터삭제 요청
export default function useDeleteData() {

    // delete요청 함수
    const deleteData = async (uri, data) => {
        // 컨텐츠 삭제전, 다시한번 물어봄
        if(!reconfirmAction('컨텐츠를 삭제 하시겠습니까?')) return

        try {
            const response = await axios.delete(uri, data)
            alert(response.data.message)
            console.log(response)
        }
        catch(err) {
            console.error(err)
        }
    }

    // 컨텐츠 삭제
    const deleteContent = async (id) => {
        const uri = process.env.NEXT_PUBLIC_CONTENT_API + `/${id}`
        deleteData(uri)
    }
    // 코멘트 삭제
    const deleteComment = async (id, userEmail) => {
        const uri = process.env.NEXT_PUBLIC_COMMENT_API + `/${id}`
        deleteData(uri, { params : { userEmail : userEmail } })
    }

    return { deleteContent, deleteComment }
}