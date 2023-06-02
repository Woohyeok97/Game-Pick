'use client'
import { TransitionGroup, CSSTransition } from "react-transition-group"
// 컴포넌트
import HomeInfo from "./home/components/homeInfo"
import HomeMain from "./home/components/homeMain"
// 커스텀훅
import useFullPage from "@/hook/usefullPage"

export default function Home() {
 


    // 컴포넌트 인스턴스 ex) <HomeMain/> 을 직접적으로 배열에 담으면 렌더링 최적화에 불리하므로
    // 컴포넌트 타입을 배열로 할당
    const compoent = [ HomeMain, HomeInfo ]
    const { componentIndex, direction } = useFullPage(compoent)

    // 배열로 저장했던 컴포넌트 타입으로 렌더링때 컴포넌트 인스턴트 생성
    // 조금이라도 렌더링 최적화 Good~~
    const CurrentComponent = compoent[componentIndex]

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
