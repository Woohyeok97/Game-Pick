import { useEffect, useRef, useState } from "react"

// 훅 역할 : carousel로 사용할수있는 carouselIndex와 조작 핸들러를 제공
export default function useCarousel(contentList, time) {
    // carosel기능에 사용할 index
    const [ caroselIndex, setCarouselIndex ] = useState(0)
    // 일시정지
    const [ pause, setPause ] = useState(false)

    // interval을 렌더링 사이클 사이에서 관리하기 위해 useRef사용
    const intervalRef = useRef(null)

    
    // time 초마다 caroselIndex를 증가시킴 
    useEffect(()=>{
        if(pause) return

        intervalRef.current = setInterval(()=>{
            setCarouselIndex((prev) => (prev + 1) % contentList.length)
        }, time)

        return () => clearInterval(intervalRef.current)

    }, [caroselIndex, pause, contentList])
    // 의존성 배열에 contentList를 넣어서 초기에 준비가 안되있어도 업데이트 되면서 기능이 실행되게 함 


    // 넘기기 핸들러
    // (prev + 1) % contentList.length로 업데이트하여, prev + 1이 contentList의 길이와 같아지면 0으로 초기화 
    const handleNextIndex = () => {
        clearInterval(intervalRef.current)
        setCarouselIndex((prev) => (prev + 1) % contentList.length)
    }

    // 뒤로가기 핸들러
    // (prev - 1 + contentList.length) % contentList.length로 업데이트하여서 0보다 작아지면 마지막 인덱스로 바꿈
    const handlePrevIndex = () => {
        clearInterval(intervalRef.current)
        setCarouselIndex((prev) => (prev - 1 + contentList.length) % contentList.length )
    }

    // 일시정지 핸들러
    const handleChangePause = () => {
        setPause((prev) => !prev)
    }

    return { caroselIndex, handleNextIndex, handlePrevIndex, handleChangePause }
}