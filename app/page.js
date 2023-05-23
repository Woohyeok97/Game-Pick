'use client'
import { useEffect, useRef, useState } from "react"
// 컴포넌트
import HomeInfo from "./home/components/homeInfo"
import HomeMain from "./home/components/homeMain"
import { TransitionGroup, CSSTransition } from "react-transition-group"


// 컴포넌트 인스턴스 ex) <HomeMain/> 을 직접적으로 배열에 담으면 렌더링 최적화에 불리하므로
// 컴포넌트 타입을 배열로 할당
const home = [ HomeMain, HomeInfo ]

export default function Home() {
    
    // 컴포넌트의 Index를 state로 저장
    const [ componentIndex, setComponentIndex ] = useState(0)
    const [ direction, setDirection ] = useState('down')
    // 사용자의 반복적인 휠조작으로 handleWheel()함수를 계속 호출하면 사용자의 이용경험을 저해할수있음
    // 그래서 '렌더링과 상관없이' handleWheel()함수를 관리하기 위해 useRef로 상태를관리함
    const transitioning = useRef(false)
    // 메모리 누수를 방지하기 위해 타이머도 useRef로 관리
    const timer = useRef(null)


    // useEffect()로 재렌더링이 발생할때마다 실행할 handleWheel 함수
    const handleWheel = (e) => {
        // transitioning이 false라면 사용자가 휠을 조작해도 아무런 동작이 없게 handleWheel함수를 종료시킴
        if(transitioning.current) {
            return
        }
        // 사용자의 휠 조작으로 handleWheel 함수가 실행됐다면 일단 transitioning을 true로 변경후,
        // 휠 조작에 따라 componentIndex, direction의 state값을 변경시킴
        transitioning.current = true
        if(e.deltaY < 0) {
            // 휠 올리기
            setDirection('up')
            setComponentIndex((index) => ( index > 0 ? index - 1 : 0 ))
        } else {
            // 휠 내리기   
            setDirection('down')
            setComponentIndex((index) => ( index < home.length - 1 ? index + 1 : home.length - 1))
        }
        // 그리고 componentIndex, direction의 state값 변경이 끝났으면,
        // setTimeout()으로 1초 후에 transitioning을 다시 false로 바꿔 사용자의 무분별한 조작을 방지함
        timer.current = setTimeout(()=>{ transitioning.current = false }, 1000)
    }
    

    // 컴포넌트가 렌더링되었을때 이벤트리스너에 handleWheel함수를 등록시킴
    // 컴포넌트가 언마운트되었을때는 이벤트리스너에서 handleWheel함수를 제거하고, 메모리 누수를 위해 타이머도 제거함
    useEffect(()=>{
        window.addEventListener('wheel', handleWheel)
        return () => { 
            window.removeEventListener('wheel', handleWheel) 
            clearTimeout(timer.current)
        }
    }, [])
    useEffect(()=>{
        if(componentIndex == 0) {
            setDirection('down')
        } else if(componentIndex == home.length - 1) {
            setDirection('up')
        } 
        console.log(direction)
    }, [componentIndex])
    

    // 배열로 저장했던 컴포넌트 타입으로 렌더링때 컴포넌트 인스턴트 생성
    // 조금이라도 렌더링 최적화 Good~~
    const CurrentComponent = home[componentIndex]

    return (
        <div className="aa">
            <TransitionGroup>                
            <CSSTransition key={ componentIndex } timeout={ 1000 } classNames={ direction }>
                <CurrentComponent/>
            </CSSTransition>
        </TransitionGroup>
        </div>
    )
}

function Page1() {
    return <div className="일번"><h1>1번</h1></div>
}
function Page2() {
    return <div className="이번"><h1>2번</h1></div>
}
function Page3() {
    return <div className="삼번"><h1>3번</h1></div>
}