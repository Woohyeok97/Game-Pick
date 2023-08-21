'use client'
import { CSSTransition } from 'react-transition-group';
// 커스텀 훅
import useFetchContent from '@/hook/content/useFetchContent'
import useCarousel from '@/hook/UI/useCarousel';
// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
// 컴포넌트
import CarouselItem from './CarouselItem'


export default function ContentCarousel() {
    const { contentList } = useFetchContent('like', 3)
    const { caroselIndex, handleNextIndex, handlePrevIndex, handleChangePause } = useCarousel(contentList, 3000)
    
    return (
        <Box sx={{ flexBasis : '50%', display : 'flex', flexDirection : 'column' }}>

            {/* Carousel 아이템 */}
            <Box onMouseOver={ handleChangePause } onMouseOut={ handleChangePause } sx={{ flexBasis : '90%', position : 'relative', overflow : 'hidden' }}>
                { contentList.map((content, i) => (
                    <CSSTransition in={ caroselIndex == i } timeout={3000} classNames="slide" key={content._id} unmountOnExit>
                        <Box sx={{ width: '100%', height: '450px' }}>
                            <CarouselItem content={ content } />
                        </Box>
                    </CSSTransition>
                ))}
            </Box>
            
            {/* Carousel 컨트롤 */}
            <Box sx={{ flexBasis : '10%', display : 'flex', justifyContent : 'center', alignItems : 'center' }}>
                <Button onClick={ handlePrevIndex }>Prev</Button>
                <Box>
                    { contentList.map((_, i) => <span key={i} className={i == caroselIndex ? 'dot active' : 'dot'}></span> )}
                </Box>
                <Button onClick={ handleNextIndex }>Next</Button>
            </Box>

        </Box>
    )
}