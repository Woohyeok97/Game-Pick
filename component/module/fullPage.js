'use client'
import { TransitionGroup, CSSTransition } from "react-transition-group"
// 커스텀훅
import useFullPage from "@/hook/UI/useFullPage"

export default function FullPage({ children }) {
    const { componentIndex, direction } = useFullPage(children)

    return (
        <div className="page_fixed">
            <TransitionGroup>                
                <CSSTransition key={ componentIndex } timeout={ 1000 } classNames={ direction }>
                <>{ children[componentIndex] }</>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}
