'use client'
import styles from '../styles/contentUpload.module.scss'
// 커스텀훅
import useSetContent from '@/hook/useSetContent'
import useUploadContent from '@/hook/useUploadContent'

export default function ContentUpload() {
    const { content, handleInputChange } = useSetContent()
    const { uploadContent } = useUploadContent()



    return (
        <section className={ styles.content_upload }>
            <div className={ styles.upload_box }>
                <div className={ styles.upload_item }>
                    <h3>게임타이틀</h3>
                    <input type="text" name="title" onChange={(e)=>{ handleInputChange(e) }}/>
                </div>
                <div className={ styles.upload_item }>
                    <h3>정식 출시일</h3>
                    <input type="date" name="releaseDate" onChange={(e)=>{ handleInputChange(e) }}/>
                </div>
                <div className={ styles.upload_item }>
                    <h3>이미지</h3>
                    <input type="file" name="image" onChange={(e)=>{ handleInputChange(e) }}/>
                </div>
                <div className={ styles.upload_item }>
                    <h3>트레일러 URL</h3>
                    <input type="text" name="trailerUrl" onChange={(e)=>{ handleInputChange(e) }}/>
                </div>
            </div>
            <div>
                <button onClick={()=>{ uploadContent(content) }}>컨텐츠 업로드</button>
            </div>
        </section>
    )
}