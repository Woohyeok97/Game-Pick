'use client'
import styles from '../../styles/detailComment/commentMake.module.scss'
// MUI
import Button from '@mui/material/Button';

export default function CommentMake() {
    return (
        <div className={ styles.comment_make }>
            <div className={ styles.comment_write }>
                <textarea className={ styles.write_textarea } spellCheck={false}/>
            </div>
            <div className={ styles.comment_submit }>
                <div className={ styles.btn_box }>
                    <Button variant="contained" color="success" size="medium">의견남기기</Button>
                </div>
            </div>
        </div>
    )
}