import styles from '../styles/detailFront.module.scss'
// 컴포넌트
import DetailTrailer from './detailtrailer'

export default function DetailFront({ content }) {
    
    return (
        <div className={ styles.detail_front }>
            <img src={`/너굴맨배경.jpeg`}/>
            <div className={ styles.item_info }>
                <h1>{ content.title }</h1>
                <div className={ styles.like_box }>
                    <p>좋아요 { content.like }</p>
                    <p>싫어요 { content.unlike }</p>
                </div>
                <div className={ styles.release_date_box }>
                    <p>{ content.releaseDate }</p>
                </div>
                <DetailTrailer trailerUrl={ content.trailerUrl }/>
            </div>    
        </div>
    )
}

