import styles from '../../styles/homeMain.module.scss'
// 컴포넌트
import ContentCarousel from './contentCarousel'


export default function HomeMain() {
    return (
        <section className={ styles.home_main }>

            <div className={ styles.title_container }>
                <div className={ styles.title_box }>
                    <h1 className={ styles.title }>
                        <p>Whach</p>
                        <p>The</p>
                        <p className={ styles.color }>Game</p>
                    </h1>
                </div>
            </div>

            <div className={ styles.graph_container }>
                <ContentCarousel/>
            </div>
            

        </section>
    )
}