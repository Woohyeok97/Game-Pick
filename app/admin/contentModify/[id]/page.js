'use client'
import styles from '../../admin.module.scss'
import { useDispatch } from 'react-redux';
// 커스텀훅
import useEditContent from '@/hook/content/useEditContent';
import useDeleteContent from '@/hook/content/useDeleteContent';
// reducer
import { openSnackbar } from '@/redux/features/snackbarStateSlice';


export default function ContentModify({ params }) {
    const dispatch = useDispatch()
    const { prevContent, editContent, updateContent } = useEditContent({ contentId : params.id })
    const { deleteContent } = useDeleteContent({ contentId : params.id })

    // 컨텐츠 수정 핸들러
    const handleEditSubmit = async () => {
        if(!confirm('컨텐츠를 수정하겠습니까?')) return
        const result = await updateContent()

        if(result.severity != 'success') {
            dispatch(openSnackbar(result)) 
            return
        }
        alert(result.message)
    }
 
    // 컨텐츠 삭제 핸들러
    const handleDeleteSubmit = async () => {
        if(!confirm('컨텐츠를 삭제하겠습니까?')) return
        const result = await deleteContent()
            
        if(result.severity != 'success') {
            dispatch(openSnackbar(result))
            return
        }
        alert(result.message)  
    }

    return (
        <section className={ styles.admin }>
            <div className={ styles.grid_container }>
                <h1 className={ styles.admin_header }>컨텐츠 수정</h1>

                <div className={ styles.admin_body }>
                    <div className={ styles.input_box }>
                        <p>게임 타이틀</p>
                        <input name='title' type='text' spellCheck="false" value={ prevContent.title || ''}  
                        onChange={ editContent }/>
                    </div>
                    <div className={ styles.input_box }>
                        <p>발매일</p>
                        <input name='createDate' type='date' defaultValue={ prevContent.createDate || '' }
                        onChange={ editContent }/>
                    </div>
                    <div className={ styles.input_box }>
                        <p>이미지</p>
                        <input name='image' type='file' defaultValue={ prevContent.image || '' }
                        onChange={ editContent }/>
                    </div>
                    <div className={ styles.input_box }>
                        <p>트레일러 url</p>
                        <input name='trailerURL' type='text' spellCheck="false" defaultValue={ prevContent.trailerURL || '' }
                        onChange={ editContent }/>
                    </div>
                    <div className={ styles.input_box }>
                        <p>게임 소개</p>
                        <textarea name='description' rows={4} cols={40} spellCheck="false" defaultValue={ prevContent.description || '' }
                        onChange={ editContent }/>
                    </div>

                    <div className={ styles.btn_box }>
                        <button onClick={ handleEditSubmit }>컨텐츠 수정</button>
                        <button className={ styles.delete_btn } onClick={ handleDeleteSubmit }>컨텐츠 삭제</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
