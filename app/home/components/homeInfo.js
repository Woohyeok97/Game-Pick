import styles from '../styles/homeInfo.module.scss'

export default function HomeInfo() {
    return (
        <section className={ styles.home_info}>
            <h1>This Place</h1>
            <div className={ styles.info_box }>
                <div className={ styles.info_item }>
                    <img src="/칼굴맨.jpeg"/>
                    <h2>칼든 너굴맨</h2>
                    <p>2016년 후반부터 대한민국 인터넷상에서 쓰이고 있는 '~는 너굴맨이 처리했으니 안심하라구' 식의 짤방과 낚시글의 한 종류이다. </p>
                </div>
                <div className={ styles.info_item }>
                    <img src="/칼굴맨.jpeg"/>
                    <h2>칼든 너굴맨</h2>
                    <p>2016년 후반부터 대한민국 인터넷상에서 쓰이고 있는 '~는 너굴맨이 처리했으니 안심하라구' 식의 짤방과 낚시글의 한 종류이다. </p>
                </div>
                <div className={ styles.info_item }>
                    <img src="/칼굴맨.jpeg"/>
                    <h2>칼든 너굴맨</h2>
                    <p>2016년 후반부터 대한민국 인터넷상에서 쓰이고 있는 '~는 너굴맨이 처리했으니 안심하라구' 식의 짤방과 낚시글의 한 종류이다. </p>
                </div>
            </div>
        </section>
    )
}