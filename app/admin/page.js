'use client'
import styles from './admin.module.scss'
import { useDispatch } from 'react-redux';
// 커스텀 훅
import useCreateContent from '@/hook/content/useCreateContent';
// reducer
import { openSnackbar } from '@/redux/features/snackbarStateSlice';


export default function Admin() {
    const { handleContentChange, createContent } = useCreateContent()
    const dispatch = useDispatch()

    // 컨텐츠 업로드 핸들러
    const handleCreateSubmit = async () => {        
        if(!confirm('컨텐츠를 업로드 할까요?')) return
        const result = await createContent()

        if(result.severity != 'success') {
            dispatch(openSnackbar(result))
            return
        }
        alert(result.message)
    }


    return (
        <section className={ styles.admin }>
            <div className={ styles.grid_container }>
                <h1 className={ styles.admin_header }>컨텐츠 업로드</h1>

                <div className={ styles.admin_body }>
                    <div className={ styles.input_box }>
                        <p>게임 타이틀</p>
                        <input name='title' type='text' spellCheck="false" onChange={ handleContentChange }/>
                    </div>
                    <div className={ styles.input_box }>
                        <p>발매일</p>
                        <input name='createDate' type='date' onChange={ handleContentChange }/>
                    </div>
                    <div className={ styles.input_box }>
                        <p>이미지</p>
                        <input name='image' type='file' onChange={ handleContentChange }/>
                    </div>
                    <div className={ styles.input_box }>
                        <p>트레일러 url</p>
                        <input name='trailerURL' type='text' spellCheck="false" onChange={ handleContentChange }/>
                    </div>
                    <div className={ styles.input_box }>
                        <p>게임 소개</p>
                        <textarea name='description' rows={4} cols={40} spellCheck="false" onChange={ handleContentChange }/>
                    </div>

                    <div className={ styles.btn_box }>
                        <button onClick={ handleCreateSubmit }>컨텐츠 업로드</button>
                    </div>
                </div>
            </div>
        </section>
    )
}