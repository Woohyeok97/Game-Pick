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
                <h1>Game<span className='pick'>Pick</span> 시작하기</h1>
                <p className={ styles.info }>할 게임 찾느라 돌아다니는건 이제 끝! 이곳에서 찾아보세요.</p>
                <Link href="/list">
                    <button>게임 둘러보기</button>
                </Link>
            </div>
        </section>
    )
}