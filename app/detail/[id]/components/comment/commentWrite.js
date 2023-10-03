import styles from '../../styles/comment.module.scss'
import { useSession } from 'next-auth/react';
import { useDispatch } from 'react-redux';
// 커스텀 훅
import useCreateComment from '@/hook/comment/useCreateComment';
// reducer
import { openSnackbar } from '@/redux/features/snackbarStateSlice';


export default function CommentWrite({ contentId }) {
    const { textValue, setTextValue, createComment } = useCreateComment({ contentId : contentId })
    const session = useSession()
    const dispatch = useDispatch()

    // 코멘트 입력 핸들러
    const handleTextValueChange = (e) => {
        setTextValue(e.target.value)
    }

    // 코멘트 업로드 핸들러
    const handleCreateComment = async () => {
        const result = await createComment()
        dispatch(openSnackbar(result))
        setTextValue('')
    }

    if(!session.data) return (
        <div className={ styles.comment_write }>
            <textarea placeholder='로그인 이후 이용해 주세요!' rows={4} cols={40} disabled/>
        </div>
    )
    return (
        <div className={ styles.comment_write }>
            <textarea value={ textValue } placeholder='코멘트를 남겨보세요!' rows={4} cols={40} spellCheck="false"
            onChange={ handleTextValueChange }/>
            <button onClick={ handleCreateComment }>코멘트 남기기</button>
        </div>
    )
}