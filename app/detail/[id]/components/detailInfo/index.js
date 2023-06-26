import styles from '../../styles/detailInfo/detailInfo.module.scss'
// 컴포넌트
import InfoComment from './infoComment'

export default function DetailInfo({ content }) {

    return (
        <section className={ styles.detail_info }>
            <div className={ styles.title }>
                <h1>{ content.title }</h1>
            </div>
            <div className={ styles.info_box }>
                <div className={ styles.info_item }>
                    <p className={ styles.like }>좋아요!😃</p>
                    <p className={ styles.like_value }>{ content.like }</p>
                </div>
                <div className={ styles.info_item }>
                    <p className={ styles.unlike }>별로에요..😅</p>
                    <p className={ styles.unlike_value }>{ content.unlike }</p>
                </div>
            </div>
            <InfoComment content={ content }/>
        </section>
    )
}