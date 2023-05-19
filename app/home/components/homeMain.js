import styles from '../styles/homeMain.module.scss'

export default function HomeMain() {
    return (
        <section className={ styles.home_main }>
            <div className={ styles.title_box }>
                <h1 className={ styles.title }>
                    <p>Whath</p>
                    <p>The</p>
                    <p className={ styles.color }>Game</p>
                </h1>
            </div>

            <div className={ styles.graph_box }>
                <p>그래프 자리에용</p>
            </div>
        </section>
    )
}