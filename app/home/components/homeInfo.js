import styles from '../styles/homeInfo.module.scss'

export default function HomeInfo() {

    return (
        <section className={ styles.home_info }>
            <div className={ styles.title }>
                <h1>This Place</h1>
            </div>
            <div className={ styles.item_box }>
                <div className={ styles.info_item }>
                    <div className={ styles.img_box }>
                        <img src="/칼굴맨.jpeg"/>
                    </div>
                    <div className={ styles.text_box }>
                        <h2>칼든 너굴맨</h2>
                        <p>2016년 후반부터 대한민국 인터넷상에서 쓰이고 있는 '~는 너굴맨이 처리했으니 안심하라구' 식의 짤방과 낚시글의 한 종류이다. </p>
                    </div>
              </div>
              <div className={ styles.info_item }>
                    <div className={ styles.img_box }>
                        <img src="/칼굴맨.jpeg"/>
                    </div>
                    <div className={ styles.text_box }>
                        <h2>칼든 너굴맨</h2>
                        <p>2016년 후반부터 대한민국 인터넷상에서 쓰이고 있는 '~는 너굴맨이 처리했으니 안심하라구' 식의 짤방과 낚시글의 한 종류이다. </p>
                    </div>
              </div>
              <div className={ styles.info_item }>
                    <div className={ styles.img_box }>
                        <img src="/칼굴맨.jpeg"/>
                    </div>
                    <div className={ styles.text_box }>
                        <h2>칼든 너굴맨</h2>
                        <p>2016년 후반부터 대한민국 인터넷상에서 쓰이고 있는 '~는 너굴맨이 처리했으니 안심하라구' 식의 짤방과 낚시글의 한 종류이다. </p>
                    </div>
              </div>
            </div>
        </section>
    )
}