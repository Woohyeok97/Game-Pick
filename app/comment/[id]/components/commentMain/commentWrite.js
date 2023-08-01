'use client'
import styles from '../../styles/commentWrite.module.scss'
import { useSession } from 'next-auth/react';
// 커스텀훅
import useSetData from '@/hook/setData/useSetData';
import useUploadData from '@/hook/dataFetching/useUploadData';
import useSnackbar from '@/hook/UI/useSnackbar';
// MUI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
// 컴포넌트
import AlertSnackbar from '@/component/alertSnackbar/alertSnackbar';



export default function CommentWrite({ contentId, setRefreshFeedback }) {
    const { content, setContent, handleInputChange } = useSetData()
    const { uploadComment } = useUploadData()
    const { open, snackbarKey, handleSnackbarOpne, handleSnackbarClose } = useSnackbar()
    // 클라이언트에서 세션데이터는 오직, 로그인 여부만 확인
    const session = useSession();

    const handleWriteSubmit = async () => {
        await uploadComment(content, contentId)      
        setRefreshFeedback(true)
        // 코멘트 업로드후, TextFiled의 글자가 지워질수 있게 value를 ''로 바꿔줌
        setContent({...content, comment : ''})
        handleSnackbarOpne()
    }
    
    // 로그인
    if(session.data) return (
        <div className={ styles.comment_write }>
            <TextField onChange={(e)=>{ handleInputChange(e) }} name="comment" multiline fullWidth placeholder="코멘트를 남겨주세요!" margin="normal" minRows={4} value={content.comment}/>
            <div className={ styles.btn_box }>
                <Button className={ styles.btn } onClick={()=>{ handleWriteSubmit() }} variant="contained" endIcon={<EmojiEmotionsIcon />} size="large">COMMENT!</Button>
            </div>
            <AlertSnackbar open={open} snackbarKey={snackbarKey} handleSnackbarClose={handleSnackbarClose}>
                코멘트 작성완료!
            </AlertSnackbar>
            
        </div>
    )
    // 비로그인
    if(!session.data) return (
        <div className={ styles.comment_write }>
            <TextField name="comment" multiline fullWidth placeholder="로그인후, 이용해주세요!" margin="normal" minRows={4} disabled/>
        </div>
    )
}