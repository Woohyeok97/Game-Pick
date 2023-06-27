'use client'
import styles from '../../styles/commentMain/commentMain.module.scss'
// MUI
import List from '@mui/material/List';
// 컴포넌트
import CommentItem from './commentItem';


export default function CommentMain() {
    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <CommentItem/>
            <CommentItem/>
            <CommentItem/>
        </List>
    )
}