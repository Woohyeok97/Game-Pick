'use client'
import { TransitionGroup, CSSTransition } from "react-transition-group"
// 컴포넌트
import DetailFront from "./components/detailFront";
import DetailComment from "./components/detailComment";
// 커스텀훅
import useFullPage from "@/hook/usefullPage";


export default function Detail() {
    // 컴포넌트 타입을 배열로 저장
    const compoent = [ DetailFront, DetailComment ]
    const { componentIndex, direction } = useFullPage(compoent)
    // 배열로 저장한 컴포넌트 타입으로 렌더링할때 컴포넌트 인스턴스 생성
    const CurrentComponent = compoent[componentIndex]


    return (
        <section className="page_fixed">
            <TransitionGroup>
                <CSSTransition key={ componentIndex } timeout={ 1000 } classNames={ direction }>
                    <CurrentComponent/>
                </CSSTransition>
            </TransitionGroup>
        </section>
    )
}