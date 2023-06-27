'use client'
import styles from '../styles/commentWrite.module.scss'
// MUI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function CommentWrite({ content }) {
  
    
    return (
        <div className={ styles.comment_write }>
            <TextField id="outlined-multiline-static" multiline fullWidth placeholder="코멘트를 남겨주세요!" margin="normal" minRows={4}/>
            <div className={ styles.btn_box }>
                <Button className={ styles.btn } variant="contained" endIcon={<EmojiEmotionsIcon />} size="large">COMMENT!</Button>
            </div>
        </div>
    )
}