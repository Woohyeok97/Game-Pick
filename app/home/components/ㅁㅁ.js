'use client'
import { useEffect, useRef, useState } from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"

const home = [ Page1, Page2, Page3, Page4 ]

export default function Home() {
    
    const [ componentIndex, setComponentIndex ] = useState(0);
    const [ direction, setDirection ] = useState('down');
    
    const transitioning = useRef(false);
    const timer = useRef(null);

    const handleWheel = (e) => {
        if(transitioning.current) {
            return
        }

        transitioning.current = true
        
        if(e.deltaY < 0) {
            setDirection('up');
            if (componentIndex > 0) {
                timer.current = setTimeout(() => setComponentIndex(componentIndex - 1), 1000);
            }
        } else {
            setDirection('down');
            if (componentIndex < home.length - 1) {
                timer.current = setTimeout(() => setComponentIndex(componentIndex + 1), 1000);
            }
        }

        transitioning.current = false;
    }

    useEffect(() => {
        window.addEventListener('wheel', handleWheel)
        return () => { 
            window.removeEventListener('wheel', handleWheel) 
            clearTimeout(timer.current)
        }
    }, [componentIndex])

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
function Page4() {
    return <div className="사번"><h1>4번</h1></div>
}
