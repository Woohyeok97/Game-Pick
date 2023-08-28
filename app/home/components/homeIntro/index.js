import styles from '../../styles/homeIntro.module.scss'

export default function HomeIntro() {

    return (
        <section className={ styles.home_intro }>
            <div className={ styles.intro_box }>
                <p className={ styles.text }>요즘따라 할게임이 없다면?</p>
                <h1 className={ styles.title }>
                    <p>Game</p>
                    <p className={ styles.title_orangered }>Pick</p>
                </h1>
            </div>
        </section>
    )
}