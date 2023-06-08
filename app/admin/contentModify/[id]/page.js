'use client'
import axios from 'axios'
import { useEffect } from 'react'
import styles from '../../styles/contentModify.module.scss'
// 커스텀훅
import useSetContent from '@/hook/useSetContent'
import useUploadContent from '@/hook/useUploadContent'


export default function ContentModify(props) {
    const { content, setContent, handleInput } = useSetContent()
    const { uploadContent } = useUploadContent()

    const setPrevContent = async () => {
        const respones = await axios.get(`/api/game_content/${props.params.id}`)
        setContent({ ...respones.data.content })
    }

    useEffect(()=>{
        setPrevContent()
    }, [])



    return (
        <section className={ styles.content_modify }>
            <div className={ styles.modify_box }>
                <div className={ styles.modify_item }>
                    <h3>게임타이틀</h3>
                    <input type="text" name="title" defaultValue={ content.title }/>
                </div>
                <div className={ styles.modify_item }>
                    <h3>정식 출시일</h3>
                    <input type="date" name="releaseDate" defaultValue={ content.releaseDate }/>
                </div>
                <div className={ styles.modify_item }>
                    <h3>이미지</h3>
                    <p>이미지를 다시 선택해주세요.</p>
                    <input type="file" name="image" defaultValue={ content.image }/>
                </div>
                <div className={ styles.modify_item }>
                    <h3>트레일러 URL</h3>
                    <input type="text" name="trailerUrl" defaultValue={ content.trailerUrl }/>
                </div>
            </div>
            <div className={ styles.btn_box }>
                <button>컨텐츠 수정</button>
                <button>컨텐츠 삭제</button>
            </div>
        </section>
    )
}