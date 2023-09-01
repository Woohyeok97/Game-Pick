import styles from '../styles/commentWrite.module.scss'
import { useSession } from 'next-auth/react';
// 커스텀훅
import useCreateComment from '@/hook/comment/useCreateComment';
// MUI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
// 컴포넌트


export default function CommentWrite({ contentId }) {
    const { textValue, setTextValue, addComment } = useCreateComment(contentId)
    const session = useSession()
    
    const handleTextValueChange = (e) => {
        setTextValue(e.target.value)
    }

    const handleCreateComment = async () => {
        if(!textValue) {
            console.log('코멘트 내용을 확인해 주세요!')
            return
        }
        if(!session.data) {
            console.log('로그인후, 이용해주세요!')
            return
        }

        await addComment(session)
    }


    if(!session.data) return (
        <div className={ styles.comment_write }>
            <TextField multiline fullWidth placeholder="로그인후, 이용해주세요!" margin="normal" minRows={4} disabled/>
        </div>
    )

    return (
       <div className={ styles.comment_write }>
            <TextField value={ textValue } multiline fullWidth placeholder="코멘트를 남겨주세요!" margin="normal" minRows={4}
            onChange={ handleTextValueChange }/>

            <Button variant="contained" endIcon={<EmojiEmotionsIcon/>} size="large"
            onClick={ handleCreateComment }>COMMENT!</Button>
       </div>
    )
}



