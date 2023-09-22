import { useState, useEffect } from "react"
// axios 인스턴스
import { feedbackInstance } from "@/util/api/instance/feedbackInstance"

export default function useFeedback({ data, collection, session }) {
    const [ feedbackCount, setFeedbackCount ] = useState({ like : data.like, dislike : data.dislike })
    const [ userFeedback, setUserFeedback ] = useState('')
    
    // 개선하고싶은거
    // 5. 옵티미스틱 업데이트 가능한지

    // 유저 피드백 여부 요청
    const fetchUserFeedback = async () => {
        const submission = { parent : data._id } 
        const response = await feedbackInstance.get('/', { params : submission })
        
        setUserFeedback(response)
    }

    // 피드백 생성
    const createFeedback = async (type) => {
        const submission = { parent : data._id, type, collection } 
        await feedbackInstance.post('/', submission )

        setFeedbackCount((prev) => ({ ...prev, [type] : prev[type] + 1 }))
    }

    // 피드백 삭제
    const deleteFeedback = async () => {
        const submission = { userFeedback : JSON.stringify(userFeedback), collection }
        await feedbackInstance.delete(`/${userFeedback._id}`, { params : submission })
        
        setFeedbackCount((prev) => ({ ...prev, [userFeedback.type] : prev[userFeedback.type] - 1 }))
    }

    // 피드백 바꾸기
    const switchFeedback = async (type) => {
        const submission = { userFeedback : JSON.stringify(userFeedback), type, collection }
        await feedbackInstance.put(`/${userFeedback._id}`, submission)

        setFeedbackCount((prev) => ({ ...prev, [type] : prev[type] + 1, [userFeedback.type] : prev[userFeedback.type] - 1 }))
    }
    
    // 경우에 따른 피드백 업데이트
    const updateFeedback = async (type) => {
        try {
            if(!userFeedback) {
                await createFeedback(type)
            } else if(userFeedback.type != type) {
                await switchFeedback(type)
            } else if(userFeedback.type == type) {
                await deleteFeedback()
                setUserFeedback('')
                return { severity : 'success', message : '피드백 취소' }
            }  
            await fetchUserFeedback()

            return { severity : 'success', message : '피드백 완료!' }
        } catch(err) {
            console.log(err)
            return { severity : 'error', message : '피드백 실패, 다시 한번 시도 해주세요.' }
        }
    }


    useEffect(()=>{
        if(session.data) fetchUserFeedback()
    }, [])

 
    return { feedbackCount, userFeedback, updateFeedback }
}
