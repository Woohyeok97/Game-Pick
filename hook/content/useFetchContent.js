import axios from "axios"

export default function useFetchContent() {

    const fetchContentList = async (opt, num) => {
        try {
            const uri = process.env.NEXT_PUBLIC_CONTENTS_API
            const submission = { sortOption : opt, limit : num }

            const response = await axios.get(uri, { params : submission })
            return response.data.result
        } catch(err) {
            console.error(err)
            return
        }
    }

    return { fetchContentList }
}