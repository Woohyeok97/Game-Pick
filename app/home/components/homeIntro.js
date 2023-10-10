import styles from '../styles/homeIntro.module.scss'


export default function HomeIntro() {

    return (
        <section className={ styles.home_intro }>
            <div className={ styles.intro_box }>
                <p>요즘 따라 할 게임이 없다면?</p>
                <h1>Game<span className='pick'>Pick</span></h1>
            </div>
        </section>
    )
}