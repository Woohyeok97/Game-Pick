import axios from "axios"

// AWS S3 이미지 업로드 유틸함수
const uploadS3 = async (file) => {
    try {
        // PresignedURL 요청
        const fileName = encodeURIComponent(file.name)
        const response = await axios.get(process.env.NEXT_PUBLIC_IMAGE_API + `/${fileName}`)

        const formData = new FormData()
        Object.entries({ ...response.data.fields, file }).forEach(([key, value]) => {
            formData.append(key, value)
        })

        // S3 이미지 업로드 요청
        const result = await axios.post(response.data.url, formData)
        return `${result.config.url}/${fileName}`
    } catch(err) {
        console.error(err)
        throw err
    }
} 

export default uploadS3