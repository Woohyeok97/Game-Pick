import { contentInstance } from "@/util/api/instance/contentInstance"
import axios from "axios"


export default function useDeleteContent({ contentId }) {

    // 컨텐츠 삭제 요청
    const deleteContent = async () => {
        try {
            const response = await contentInstance.delete(`/${contentId}`)
            return { severity : 'success', message : response.message }
        } catch(err) {
            console.error(err)
            return { severity : 'error', message : '컨텐츠 삭제 실패, 다시 한번 시도 해주세요.' }
        }
    }

    return { deleteContent }
}