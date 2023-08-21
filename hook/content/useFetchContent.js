import axios from "axios"
import { useEffect, useState } from "react"


export default function useFetchContent(opt, num) { // opt : 가져올 컨텐츠 기준, num : 가져올 컨텐츠 개수
    const [ contentList, setContentList ] = useState([])

    useEffect(()=>{
        fetchContentList(opt, num)
    }, [])


    async function fetchContentList(opt, num){
        try {
            const uri = process.env.NEXT_PUBLIC_CONTENTS_API
            const submission = { sortOption : opt, limit : num }

            const response = await axios.get(uri, { params : submission })
            setContentList(response.data.result)
        } catch(err) {
            console.error(err)
            return
        }
    }

    return { contentList, fetchContentList }
}