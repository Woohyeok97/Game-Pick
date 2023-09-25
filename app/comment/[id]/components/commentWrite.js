import styles from '../styles/commentWrite.module.scss'
import { useDispatch } from 'react-redux';
import { useSession } from 'next-auth/react';
// 커스텀훅
import useCreateComment from '@/hook/comment/useCreateComment';
// reducer
import { openSnackbar } from '@/redux/features/snackbarStateSlice';
// MUI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';


export default function CommentWrite({ contentId }) {
    const { textValue, setTextValue, createComment } = useCreateComment({ contentId : contentId })
    const dispatch = useDispatch()
    const session = useSession()

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
 

    // 미로그인 상태 일때 보여줄 UI 
    if(!session.data) return (
        <div className={ styles.comment_write }>
            <TextField multiline fullWidth placeholder="로그인후, 이용해주세요!" margin="normal" minRows={4} disabled/>
        </div>
    )
    
    // 로그인 상태 일때 보여줄 UI
    return (
       <div className={ styles.comment_write }>
            <TextField value={ textValue } multiline fullWidth placeholder="코멘트를 남겨주세요!" margin="normal" minRows={4}
            onChange={ handleTextValueChange }/>

            <Button variant="contained" endIcon={<EmojiEmotionsIcon/>} size="large"
            onClick={ handleCreateComment }>COMMENT!</Button>
       </div>
    )
}



