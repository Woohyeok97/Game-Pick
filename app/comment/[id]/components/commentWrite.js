import styles from '../styles/commentWrite.module.scss'
import { useSession } from 'next-auth/react';
// 커스텀훅
import useCreateComment from '@/hook/comment/useCreateComment';
// MUI
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
// 컴포넌트


export default function CommentWrite({ contentId }) {
    const session = useSession()
    
    const handleCreateSubmit = async () => {

        // if(!commentText) {
        //     console.log('코멘트 내용을 확인해 주세요!')
        //     return
        // }
        // if(!session.data) {
        //     console.log('로그인후, 이용해주세요!')
        //     return
        // }

        // const tempCommentId = await createComment(contentId)
        
        // const tempComment = {
        //     _id : tempCommentId,
        //     userName : session.data.user.name,
        //     userImage : session.data.user.image,
        //     userEmail : session.data.user.email,
        //     text : commentText,
        //     like : 0,
        //     dislike : 0,
        //     createComment : new Date(),
        // }
        // setComment((prev) => [ tempComment, ...prev])
        // setTempCommentId ((prev) => [...prev, tempCommentId])
        // setCommentText('')
    }


    if(!session.data) return (
        <div className={ styles.comment_write }>
            <TextField name="comment" multiline fullWidth placeholder="로그인후, 이용해주세요!" margin="normal" minRows={4} disabled/>
        </div>
    )

    return (
       <div className={ styles.comment_write }>
            <TextField name="comment" multiline fullWidth placeholder="코멘트를 남겨주세요!" margin="normal" minRows={4}/>
            <Button variant="contained" endIcon={<EmojiEmotionsIcon/>} size="large">COMMENT!</Button>
       </div>
    )
}



