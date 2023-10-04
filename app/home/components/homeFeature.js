import styles from '../styles/homeFeature.module.scss'


export default function HomeFeature() {

    return (
        <section className={ styles.home_feature }>
            <div className={ styles.grid_container }>
                <h1 className={ styles.home_feature_header }>
                        This Place
                </h1>
                <div className={ styles.home_feature_content }>
                    <img src="/칼굴맨.jpeg"/>
                    <h2>칼든 너굴맨</h2>
                    <p>2016년 후반부터 대한민국 인터넷상에서 쓰이고 있는 '~는 너굴맨이 처리했으니 안심하라구' 식의 짤방과 낚시글의 한 종류이다. </p>
                </div>
                <div className={ styles.home_feature_content }>
                    <img src="/칼굴맨.jpeg"/>
                    <h2>칼든 너굴맨</h2>
                    <p>2016년 후반부터 대한민국 인터넷상에서 쓰이고 있는 '~는 너굴맨이 처리했으니 안심하라구' 식의 짤방과 낚시글의 한 종류이다. </p>
                </div>
                <div className={ styles.home_feature_content }>
                    <img src="/칼굴맨.jpeg"/>
                    <h2>칼든 너굴맨</h2>
                    <p>2016년 후반부터 대한민국 인터넷상에서 쓰이고 있는 '~는 너굴맨이 처리했으니 안심하라구' 식의 짤방과 낚시글의 한 종류이다. </p>
                </div>
            </div>
        </section>
    )
}