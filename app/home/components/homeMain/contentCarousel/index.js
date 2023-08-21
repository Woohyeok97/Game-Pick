'use client'
import { useEffect, useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
// 커스텀 훅
import useFetchContent from '@/hook/content/useFetchContent'
// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
// 컴포넌트
import CarouselItem from './CarouselItem'


export default function ContentCarousel() {
    const { fetchContentList } = useFetchContent()
    const [ contentList, setContentList ] = useState([])
    // carosel로 보여줄 현재 contentList index값
    const [ currentIndex, setCurrentIndex ] = useState(0)
    // carousel 동작여부
    const [ pause, setPause ] = useState(false);

    // 월요일의 우혁이이게
    // 3. 그 다음에 useCarousel() 훅 만들어서 로직이랑 분리하자!
    // 4. 마지막으로 어떤식으로 구현했는지 userRef 중점으로 이해해보자!

    useEffect(()=> {
        const getContentList = async () => {
            const result = await fetchContentList('like', 3)
            setContentList(result)
        }

        getContentList()
    }, [])


    const intervalRef = useRef(null)

    useEffect(()=> {
        if(pause) return

        intervalRef.current = setInterval(()=>{
            setCurrentIndex((prev) => (prev + 1) % contentList.length)
        }, 2000)

        return () => clearInterval(intervalRef.current)
    }, [contentList, currentIndex, pause])

    const handleNext = () => {
        clearInterval(intervalRef.current);
        setCurrentIndex((prev) => (prev + 1) % contentList.length)
    }
    const handlePrev = () => {
        clearInterval(intervalRef.current);
        setCurrentIndex((prev) => (prev - 1 + contentList.length) % contentList.length)
    }
    

    
    return (
        <Box sx={{ flexBasis : '50%', display : 'flex', flexDirection : 'column' }}>

            <Box sx={{ flexBasis : '90%', position : 'relative', overflow : 'hidden' }}
            onMouseEnter={() => setPause(true)} onMouseLeave={() => setPause(false)}>

                { contentList.map((content, index) => (
                    <CSSTransition in={currentIndex === index} timeout={300} classNames="slide" key={index} unmountOnExit>
                        <Box sx={{ width: '100%', height: '450px' }}>
                            <CarouselItem content={content} />
                        </Box>
                    </CSSTransition>
                ))}

            </Box>

            <Box sx={{ flexBasis : '10%', display : 'flex', justifyContent : 'center', alignItems : 'center' }}>
                <Button onClick={ handlePrev }>Prev</Button>
                <Box>
                    { contentList.map((_, index) => (
                            <span key={index} className={index === currentIndex ? 'dot active' : 'dot'}></span>
                    ))}
                </Box>
                <Button onClick={ handleNext }>Next</Button>
            </Box>

        </Box>
    )
}