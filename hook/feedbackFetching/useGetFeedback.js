import { useState } from "react"


export default function useGetFeedback() {

    const [ feedback, setFeedback ] = useState({
        like : 0,
        dislike : 0,
    })

    const getFeedback = async () => {
        
    }


    return { feedback }
}