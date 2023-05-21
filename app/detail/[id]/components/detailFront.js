import styles from '../styles/detailFront.module.scss'

export default function DetailFront() {
    const game = {
        title : '디아블로4',
        like : 172,
        unlike : 16,
        releaseDate : '발매 2023/6/2',
        img : '너굴맨배경.jpeg'
    }

    return (
        <section className={ styles.detail_front }>
            <img src={`/${ game.img }`}/>
            <div className={ styles.item_info_box}>
                <div className={ styles.item_info }>
                    <h1>{ game.title }</h1>
                    <div className={ styles.like_box }>
                        <p>좋아요 { game.like }</p>
                        <p>싫어요 { game.unlike }</p>
                    </div>
                    <div className={ styles.release_date_box }>
                        <p>{ game.releaseDate }</p>
                    </div>
                </div>
            </div>

            <div></div>
            
        </section>
    )
}

