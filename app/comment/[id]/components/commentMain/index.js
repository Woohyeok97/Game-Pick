'use client'
import styles from '../../styles/commentMain/commentMain.module.scss'
import { useEffect } from 'react';
// 커스텀훅
import useGetData from '@/hook/comment/useGetData';
// MUI
import List from '@mui/material/List';
// 컴포넌트
import CommentItem from '../commentItem';
import CommentWrite from './commentWrite';


export default function CommentMain({ contentId }) {
    const { comment, getComment } = useGetData()

    // 최초 컴포넌트 마운트시, getComment()실행
    useEffect(()=>{
        getComment(contentId)
    }, [])

    // comment가 있는 전제하에, comment.length > 0일때 코멘트를 렌더링해줌
    if(comment) return (
        <div>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                { !comment.length 
                ? <div>아직 댓글이 없어요..</div>
                : comment.map((a, i)=> <CommentItem key={i} comment={a} getComment={ getComment }/> ) }
             </List>
             <CommentWrite contentId={ contentId } getComment={ getComment }/>
        </div>
    )
}