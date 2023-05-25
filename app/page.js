'use client'
import { useEffect, useRef, useState } from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
// 컴포넌트
import HomeInfo from "./home/components/homeInfo"
import HomeMain from "./home/components/homeMain"


// 컴포넌트 인스턴스 ex) <HomeMain/> 을 직접적으로 배열에 담으면 렌더링 최적화에 불리하므로
// 컴포넌트 타입을 배열로 할당
const home = [ HomeMain, HomeInfo ]

export default function Home() {

    // 컴포넌트 인덱스
    const [ componentIndex, setComponentIndex ] = useState(0)
    // 컴포넌트 이동방향
    const [ direction, setDirection ] = useState('')
    
    // 그래서 '렌더링과 상관없이' handleWheel()함수를 관리하기 위해 useRef로 상태를관리함(사용자의 무분별한 휠조작 방지)
    const transitioning = useRef(false)
    // 메모리 누수를 방지하기 위해 타이머도 useRef로 관리
    const timer = useRef(null)



    const handleWheel = (e) => {
        if(transitioning.current) {
            return
        }

        transitioning.current = true
        if(e.deltaY < 0) {
            // 휠 올리기
            setDirection('up')
        } else {
            // 휠 내리기   
            setDirection('down')
        }
        // 1000밀리초 동안 hadleWheel() 동작방지
        timer.current = setTimeout(()=>{ transitioning.current = false }, 1000)
    }
    

    // 컴포넌트 마운트, 언마운트시 이벤트리스너(handleWheel()) 등록 & 해제 (타이머도!)
    useEffect(()=>{
        window.addEventListener('wheel', handleWheel)
        return () => { 
            window.removeEventListener('wheel', handleWheel) 
            clearTimeout(timer.current) // 메모리누수 방지를 위해 타이머제
        }
    }, [])

    // direction의 상태에 따라 componentIndex를 변경(컴포넌트 이동)
    // CSSTransition에 동적으로 ClassNames를 주기위해 컴포넌트 언마운트시, direction 상태 초기화
    useEffect(()=>{
        if(direction == 'up') {
            // 휠 올릴때
            setComponentIndex((index) => ( index > 0 ? index - 1 : 0 )) 
        } else if(direction == 'down') {
            // 휠 내릴때
            setComponentIndex((index) => ( index < home.length - 1 ? index + 1 : home.length - 1))
        }
        return () => setDirection('')
    }, [direction])


    // 배열로 저장했던 컴포넌트 타입으로 렌더링때 컴포넌트 인스턴트 생성
    // 조금이라도 렌더링 최적화 Good~~
    const CurrentComponent = home[componentIndex]

    return (
        <div className="page_fixed">
            <TransitionGroup>                
            <CSSTransition key={ componentIndex } timeout={ 1000 } classNames={ direction }>
                <CurrentComponent/>
            </CSSTransition>
        </TransitionGroup>
        </div>
    )
}
