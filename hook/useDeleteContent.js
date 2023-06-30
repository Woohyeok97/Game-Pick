import axios from "axios"
// 리컨펌 유틸함수
import reconfirmAction from "@/util/reconfirmAction"

export default function useDeleteContent() {

    const deleteContent = async (id) => {
        // 컨텐츠 삭제전, 다시한번 물어봄
        if(!reconfirmAction('컨텐츠를 삭제 하시겠습니까?')) return

        try {
            const response = await axios.delete(`/api/game_content/${id}`)
            alert(response.data.message)
            console.log(response)
        } catch(err) {
            console.error(err)
        }
    }

    const deleteComment = async (id, userEmail) => {
        if(!reconfirmAction('코멘트를 삭제할까요?')) return

        try {
            const response = await axios.delete(`/api/game_comment/${id}`, { params : { userEmail : userEmail } })
            alert(response.data.message)
            console.log(response)
        } catch(err) {
            console.error(err)
        }
    }

    return { deleteContent, deleteComment }
}