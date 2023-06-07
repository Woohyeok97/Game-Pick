import styles from '../styles/contentUpload.module.scss'

export default function ContentUpload() {
    return (
        <section className={ styles.content_upload }>
            <div className={ styles.upload_box }>
                <div className={ styles.upload_item }>
                    <h3>게임타이틀</h3>
                    <input type="text"/>
                </div>
                <div className={ styles.upload_item }>
                    <h3>정식 출시일</h3>
                    <input type="date"/>
                </div>
                <div className={ styles.upload_item }>
                    <h3>이미지</h3>
                    <input type="file"/>
                </div>
                <div className={ styles.upload_item }>
                    <h3>트레일러 URL</h3>
                    <input type="text"/>
                </div>
            </div>
        </section>
    )
}