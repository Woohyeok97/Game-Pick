'use client'
import styles from '../../styles/commentWrite.module.scss'
// 커스텀훅
import useSetContent from '@/hook/useSetContent';
import useUploadContent from '@/hook/useUploadContent';
// MUI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useState } from 'react';


export default function CommentWrite({ _id, getComment }) {
    const { content, setContent, handleInputChange } = useSetContent()
    const { uploadComment } = useUploadContent()

    const handleSubmit = async () => {
        await uploadComment(content, _id)
        // 코멘트 업로드후, prop으로 받아온 getComment(_id) 함수를 실행하여, 새로고침없이 코멘트 추가 
        getComment(_id)
        // 코멘트 업로드후, TextFiled의 글자가 지워질수 있게 value를 ''로 바꿔줌
        setContent({...content, comment : ''})
    }
    
    return (
        <div className={ styles.comment_write }>
            <TextField onChange={(e)=>{ handleInputChange(e) }} name="comment" multiline fullWidth placeholder="코멘트를 남겨주세요!" margin="normal" minRows={4} value={content.comment}/>
            <div className={ styles.btn_box }>
                <Button className={ styles.btn } onClick={()=>{ handleSubmit() }} variant="contained" endIcon={<EmojiEmotionsIcon />} size="large">COMMENT!</Button>
            </div>
        </div>
    )
}