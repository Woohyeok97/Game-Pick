import { useEffect, useRef, useState } from "react"

// 훅 역할 : carousel로 사용할수있는 carouselIndex와 조작 핸들러를 제공
export default function useCarousel(list, time) {
    const [ caroselIndex, setCarouselIndex ] = useState(0)

    // interval을 렌더링 사이클 사이에서 관리하기 위해 useRef사용
    const intervalRef = useRef(null)

    useEffect(()=>{
        intervalRef.current = setInterval(()=>{
            setCarouselIndex((prev) => (prev + 1) % list.length)
        }, time)

        return () => clearInterval(intervalRef.current)

    }, [caroselIndex, list])
    // 의존성 배열에 list를 넣어서 초기에 준비가 안되있어도 업데이트 되면서 기능이 실행되게 함 

    return { caroselIndex }
}