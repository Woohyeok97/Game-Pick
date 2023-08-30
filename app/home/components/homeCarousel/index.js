'use client'
import styles from '../../styles/homeCarousel.module.scss'
import { CSSTransition } from 'react-transition-group';
// 커스텀 훅
import useFetchContent from '@/hook/content/useFetchContent'
import useCarousel from '@/hook/UI/useCarousel';
// MUI
import Fab from '@mui/material/Fab';
import CarouselItem from './CarouselItem';


export default function HomeCarosel() {
    const { contentList } = useFetchContent('like', 3)
    const { caroselIndex, handleNextIndex, handlePrevIndex, handleChangePause } = useCarousel(contentList, 3000)

    // 내일 우혁이에게
    // ui에 맞게 useCarousel 수정해줘~ 
        // 부모사이즈 안에서 carousel 애니메이션 효과가 나게해줘~

    return (
        <section className={ styles.home_carousel }>
            <div className={ styles.carousel }>
            { contentList.map((content, i) => (
                    // <CSSTransition in={ caroselIndex == i } timeout={3000} classNames="slide" key={content._id} unmountOnExit>
                        <CarouselItem content={ content } />
                    // </CSSTransition>
                ))}
            </div>
            <div className={ styles.start_box }>
                <Fab variant="extended" color="primary">게임 둘러보기</Fab>
            </div>
        </section>
    )
}