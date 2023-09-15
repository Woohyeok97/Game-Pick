import { useState, useEffect } from "react"
import useSubmitFeedback from "./useSubmitFeedback"

export default function useFeedback(data, collection) {
    const [ isLoading, setIsLoading ] = useState(false)
    const [ feedbackCount, setFeedbackCount ] = useState({ like : data.like, dislike : data.dislike })
    const [ userFeedback, setUserFeedback ] = useState('')
    
    const { fetchUserFeedback, createFeedback, deleteFeedback } = useSubmitFeedback(data, collection)

    const getUserFeedback = async () => {
        const result = await fetchUserFeedback()
        setUserFeedback(result)
    }
    
    useEffect(()=>{
        getUserFeedback()
    }, [])

    const optimisticallyUpdateFeedback = (type, increment, feedbackType = type) => {
        setFeedbackCount((prev) => ({ ...prev, [type] : prev[type] + increment }))
        setUserFeedback((prev) => ({ ...prev, type : feedbackType }))
    }
    const newFeedback = async (type) => {
        optimisticallyUpdateFeedback(type, 1)
        await createFeedback(type)
        getUserFeedback()
    }
    const delFeedback = async (type) => {
        optimisticallyUpdateFeedback(type, -1, null)
        await deleteFeedback(userFeedback)
        getUserFeedback()
    }
    const switchFeedback = async (type) => {
        const prevUserFeedback = userFeedback
        optimisticallyUpdateFeedback(prevUserFeedback.type, -1)
        optimisticallyUpdateFeedback(type, 1)
        
        await deleteFeedback(prevUserFeedback)
        await createFeedback(type)
        getUserFeedback()
    }
       // 옵티미스틱 업데이트 실패시, 피드백 롤백 함수
    const rollbackedFeedback = (prevFeedbackCount, prevUserFeedback) => {
        setFeedbackCount(prevFeedbackCount)
        setUserFeedback(prevUserFeedback)
    }


    // 피드백 옵티미스틱 업데이트
    const updateFeedback = async (type) => {
        const prevFeedbackCount = { ...feedbackCount }
        const prevUserFeedback = { ...userFeedback }
        
        if(isLoading) return
        setIsLoading(true)

        try {
            if(!userFeedback) {
                await newFeedback(type)
            } else if(userFeedback.type == type) {
                await delFeedback(type)
            } else {
                await switchFeedback(type)
            }
        } catch(err) {
            rollbackedFeedback(prevFeedbackCount, prevUserFeedback)
        } finally {
            setIsLoading(false)
        }
    }

 
    return { feedbackCount, userFeedback, updateFeedback }
}
// import { useSession } from "next-auth/react"
// import { useState, useEffect } from "react"
// import useSubmitFeedback from "./useSubmitFeedback"

// export default function useFeedback(data, collection) {
//     const [ feedbackCuont, setFeedbackCount ] = useState({ like : data.like, dislike : data.dislike })
//     const [ userFeedback, setUserFeedback ] = useState('')
//     const [ isFeed, setIsFeed ] = useState(false)
//     const session = useSession()

//     const { fetchUserFeedback, createFeedback, deleteFeedback } = useSubmitFeedback(data, collection)
    
//     // 컴포넌트 마운트시, 기존 유저피드백 정보 가져오기
//     useEffect(()=>{
//         const getUserFeedback = async () => {
//             if(session.data) {
//                 const result = await fetchUserFeedback()
//                 setUserFeedback(result)
//             }
//         }

//         getUserFeedback()
//     }, [session])


//     // 피드백 옵티미스틱 업데이트
//     const updateFeedback = async (name) => {
//         if(isFeed) return
//         setIsFeed(true)
//         // 1. 기존 피드백 없을때(피드백 생성)
//         if(!userFeedback) {
//             setFeedbackCount((prev) => {
//                 return {...prev, [name] : prev[name] + 1}
//             })
//             setUserFeedback({ type : name })
//             await createFeedback(name)

//             const result = await fetchUserFeedback() 
//             setUserFeedback(result)
//             setIsFeed(false)
//             return
//             // 2. 기존 피드백과 같은 피드백일때(삭제)
//         } else if(userFeedback.type == name){
//             setFeedbackCount((prev) => {
//                 return {...prev, [name] : prev[name] - 1}
//             })
//             setUserFeedback((prev) => {
//                 return {...prev, type : null }
//             })
//             await deleteFeedback(userFeedback)

//             const result = await fetchUserFeedback() 
//             setUserFeedback(result)
//             // 3. 기존 피드백과 다른 피드백일때(기존피드백 삭제후, 피드백 생성)
//         } else {
//             setFeedbackCount((prev) => {
//                 return {...prev, [name] : prev[name] + 1, [userFeedback.type] : prev[userFeedback.type] - 1}
//             })
//             setUserFeedback((prev) => {
//                 return {...prev, type : name }
//             })
//             await deleteFeedback(userFeedback)
//             await createFeedback(name)
            
//             const result = await fetchUserFeedback() 
//             setUserFeedback(result)
//         }

//         setIsFeed(false)
//     }

//     // 옵티미스틱 업데이트 실패시, 피드백 롤백 함수
//     const rollbackedFeedback = () => {
//         // 업데이트전 피드백 데이터 저장
//         const prevFeedbackCount = { ...feedbackCuont }
//         const prevUserFeedback = { ...userFeedback }

//         setFeedbackCount(prevFeedbackCount)
//         setUserFeedback(prevUserFeedback)
//     }


//     return { feedbackCuont, userFeedback, updateFeedback, rollbackedFeedback }
// }