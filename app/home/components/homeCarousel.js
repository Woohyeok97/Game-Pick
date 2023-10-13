import styles from '../styles/homeCarousel.module.scss'
import Link from 'next/link';
import { connectDB } from '@/util/database';
// 컴포넌트
import Carousel from '../../../component/carousel/carousel';


export default async function HomeCarousel() {
    const db = (await connectDB).db('project')
    const contentList = await db.collection('contents').find().sort({ 'like' : -1 }).limit(3).toArray() 

    return (
        <section className={ styles.home_carousel }>
            <div className={ styles.carousel }>
            { contentList.map((content, i) => (
                <Carousel itemList={ contentList } currentIndex={i} key={content._id}>
                    <div className={ styles.carousel_item }>
                        <img src={ content.image }/>
                        <div className={ styles.blur }></div>
                    </div>
                </Carousel>
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
