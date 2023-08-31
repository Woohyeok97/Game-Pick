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
    const { caroselIndex } = useCarousel(contentList, 3000)

    return (
        <section className={ styles.home_carousel }>
            <div className={ styles.carousel }>
            { contentList.map((content, i) => (
                    <CSSTransition in={ caroselIndex == i } timeout={3000} classNames="slide" key={content._id} unmountOnExit>
                            <CarouselItem content={ content } />
                    </CSSTransition>
            ))}
            </div>

            <div className={ styles.info }>
                <div className={ styles.info_text }>
                    <h1 className={ styles.text_main }>
                        <p>게임 집합소</p>
                        <p className={ styles.game_pick }>Game Pick</p>
                    </h1>
                    <p className={ styles.text_sub }>유저들이 직접 추천하고 의견을 남긴 게임들을 지금 직접 확인하세요!</p>
                </div>
            </div>

            <div className={ styles.start_box }>
                <Fab variant="extended" color="primary">게임 둘러보기</Fab>
            </div>
        </section>
    )
}