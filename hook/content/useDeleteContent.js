import axios from "axios"


export default function useDeleteContent() {

    // 컨텐츠 삭제 요청 함수
    const deleteContent = async (contentId) => {
        try {
            const uri = process.env.NEXT_PUBLIC_CONTENTS_API + `/${contentId}`

            const response = await axios.delete(uri)
            console.log(response.data)
        } catch(err) {
            console.error(err)
            return
        }
    }

    return { deleteContent }
}