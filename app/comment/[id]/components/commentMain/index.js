'use client'
import { useEffect } from 'react';
// 커스텀훅
import useGetData from '@/hook/dataFetching/useGetData';
// MUI
import List from '@mui/material/List';
// 컴포넌트
import CommentItem from '../commentItem';
import CommentWrite from './commentWrite';
import CommentNav from './commentNav';


export default function CommentMain({ content }) {
    const { comment, getComment, refreshFeedback, setRefreshFeedback } = useGetData()
    
    useEffect(()=>{
        getComment(content._id)
        setRefreshFeedback(false)
    }, [refreshFeedback])

    
    if(comment) return (
        <div>

            {/* 코멘트 nav */}
            <CommentNav content={ content } />

            {/* 코멘트 아이템 */}
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {/* comment가 있다면, comment.length > 0일때 코멘트를 렌더링해줌 */}
                { !comment.length 
                ? <div>아직 댓글이 없어요..</div>
                : comment.map((item, i)=> <CommentItem key={i} comment={ item } setRefreshFeedback={ setRefreshFeedback }/> ) }
             </List>
             <CommentWrite contentId={ content._id } setRefreshFeedback={ setRefreshFeedback }/>
        </div>
    )
}