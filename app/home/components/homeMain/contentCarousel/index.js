'use client'
import { useEffect, useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
// 커스텀 훅
import useFetchContent from '@/hook/content/useFetchContent'
// MUI
import Box from '@mui/material/Box'
import CarouselItem from './CarouselItem'


export default function ContentCarousel() {
    const { fetchContentList } = useFetchContent()
    const [ contentList, setContentList ] = useState([])
    // carosel로 보여줄 현재 contentList index값
    const [ currentIndex, setCurrentIndex ] = useState(0)
    // carousel 동작여부
    const [ pause, setPause ] = useState(false);

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
    

    

    if(contentList.length > 0) return (
        <Box sx={{ display : 'flex', flexDirection : 'column', width : '100%', height : '50%' }}
        onMouseEnter={() => setPause(true)} onMouseLeave={() => setPause(false)}>
            <Box sx={{ flexBasis : '95%', position : 'relative', overflow : 'hidden' }}>  
            {contentList.map((content, index) => (
                <CSSTransition in={currentIndex === index} timeout={300} classNames="slide" key={index} unmountOnExit>
                    <CarouselItem content={content} />
                </CSSTransition>
            ))}
            </Box> 

            <Box sx={{ flexBasis : '5%', display : 'flex', justifyContent : 'space-between', alignItems : 'center' }}>
                <button onClick={handlePrev}>Prev</button>
                <Box>
                    {contentList.map((_, index) => (
                        <span key={index} className={index === currentIndex ? 'dot active' : 'dot'}></span>
                    ))}
                </Box>
                <button onClick={handleNext}>Next</button>
            </Box>         
        </Box>
    )
}