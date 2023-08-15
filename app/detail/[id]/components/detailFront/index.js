import styles from '../../styles/detailFront/detailFront.module.scss'
// 컴포넌트
import DetailTrailer from './detailtrailer'
import ContentFeedback from './contentFeedback'


export default async function DetailFront({ content }) {
    
    return (
        <div className={ styles.detail_front }>
            <img src={`/너굴맨배경.jpeg`}/>
            <div className={ styles.item_info }>
                <h1>{ content.title }</h1>
                <div className={ styles.release_date_box }>
                    <p>{ content.createDate }</p>
                </div>
                <DetailTrailer trailerUrl={ content.trailerURL }/>
                <ContentFeedback content={ content }/>
            </div>    
        </div>
    )
}

