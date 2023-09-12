import { useState } from "react"
import axios from "axios"

export default function usePresignedURL() {
    const [ imageData, setImageData ] = useState({ presignedURL : '', file : '' })

    async function fetchPresignedURL(file) {
        try {
            const fileName = encodeURIComponent(file.name)
            const uri = process.env.NEXT_PUBLIC_IMAGE_API + `/${fileName}`
            const response = await axios.get(uri)

            setImageData((prev) => {
                return { ...prev, presignedURL : response.data, file : file }
            })

            return `${response.data.url}/${fileName}`

        } catch(err) {
            console.error(err)
            return
        }
    }

    async function uploadS3() {
        try {
            const formData = new FormData()
            const file = imageData.file

            Object.entries({ ...imageData.presignedURL.fields, file }).forEach(([key, value]) => {
                formData.append(key, value)
            })

            const response = await axios.post(imageData.presignedURL.url, formData)
            return response

        } catch(err) {
            console.error(err)
            return err
        }
        
    }

    return { fetchPresignedURL, uploadS3 }
}