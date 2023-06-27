'use client'
import styles from '../../styles/commentMain.module.scss'
// MUI

// 컴포넌트
import CommentItem from './commentItem';


export default function CommentMain() {
    return (
        <div>
            <CommentItem/>
            <CommentItem/>
            <CommentItem/>
        </div>
    )
}