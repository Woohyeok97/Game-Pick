import styles from '../styles/listMain.module.scss'

export default function ListMain() {
    return (
        <section className={ styles.list_main }>
            <h1>골라봐, 오늘 할 게임</h1>
            <div>정렬선택</div>
        </section>
    )
}