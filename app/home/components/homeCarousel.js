'use client'
import styles from '../styles/homeCarousel.module.scss'
import Link from 'next/link';
import { CSSTransition } from 'react-transition-group';
// 커스텀 훅
import useFetchContent from '@/hook/content/useFetchContent'
import useCarousel from '@/hook/UI/useCarousel';


export default function HomeCarousel() {
    const { contentList } = useFetchContent('like', 3)
    const { caroselIndex } = useCarousel(contentList, 4000)
    
    return (
        <section className={ styles.home_carousel }>
            <div className={ styles.carousel }>
            { contentList.map((content, i) => (
                <CSSTransition in={ caroselIndex == i } timeout={4000} classNames="slide" key={content._id} unmountOnExit>
                    <div className={ styles.carousel_item }>
                        <img src={ content.image }/>
                        <div className={ styles.blur }></div>
                    </div>
                </CSSTransition>
            ))}
            </div>

            <div className={ styles.home_carousel_content }>
                <h1>Game <p>Pick</p>에서 찾아보기</h1>
                <p className={ styles.info }>유저들이 직접 추천하고 의견을 남긴 게임들을 지금 직접 확인하세요!</p>
                <Link href="/list">
                    <button>게임 둘러보기</button>
                </Link>
            </div>
        </section>
    )
}