import { contentInstance } from "@/util/api/instance/contentInstance"
import axios from "axios"


export default function useDeleteContent({ contentId }) {

    // 컨텐츠 삭제 요청
    const deleteContent = async () => {
        try {
            const response = await contentInstance.delete(`/${contentId}`)
            return response.message
        } catch(err) {
            console.error(err)
            return err.message
        }
    }

    return { deleteContent }
}