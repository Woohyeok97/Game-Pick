import { useEffect, useRef, useState } from "react"


export default function useCarousel(list, time) {
    const [ caroselIndex, setCarouselIndex ] = useState(0)

    // interval을 렌더링 사이클 사이에서 관리하기 위해 useRef사용
    const intervalRef = useRef(null)

    useEffect(()=>{
        if(!list.length) return
        
        intervalRef.current = setInterval(()=>{
            setCarouselIndex((prev) => (prev + 1) % list.length)
        }, time)
        
        return () => clearInterval(intervalRef.current)

    }, [list])
    // 의존성 배열에 list를 넣어서 초기에 준비가 안되있어도 업데이트 되면서 기능이 실행되게 함 

    return { caroselIndex }
}