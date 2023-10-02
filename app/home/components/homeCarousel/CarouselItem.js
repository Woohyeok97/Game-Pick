import styles from '../../styles/carouselItem.module.scss'

export default function CarouselItem({ content }) {

    return (
        <div className={ styles.carousel_item }>
            <img src={ content.image }/>
            <div className={ styles.blur }></div>
            <div className={ styles.carousel_info }>
                <h1 className={ styles.item_title }>유저 추천</h1>
                <p >{ content.like }</p>
            </div>      
        </div>
    )
}