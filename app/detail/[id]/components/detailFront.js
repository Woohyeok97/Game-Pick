import { connectDB } from '@/util/database'
import styles from '../styles/detailFront.module.scss'
// 컴포넌트
import DetailTrailer from './detailtrailer'

export default async function DetailFront() {
    const db = (await connectDB).db('project')
    const game = await db.collection('game_content').findOne({ title : '젤다의 전설' })
  
    return (
        <div className={ styles.detail_front }>
            <img src={`/너굴맨배경.jpeg`}/>
            <div className={ styles.item_info }>
                <h1>{ game.title }</h1>
                <div className={ styles.like_box }>
                    <p>좋아요 { game.like }</p>
                    <p>싫어요 { game.unlike }</p>
                </div>
                <div className={ styles.release_date_box }>
                    <p>{ game.releaseDate }</p>
                </div>
                <DetailTrailer/>
            </div>    
        </div>
    )
}

