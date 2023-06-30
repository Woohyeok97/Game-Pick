'use client'
import styles from '../../styles/commentMain/commentMain.module.scss'
import { useEffect } from 'react';
// 커스텀훅
import useGetData from '@/hook/comment/useGetData';

// MUI
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// 컴포넌트
import CommentItem from '../commentItem';
import CommentWrite from './commentWrite';


export default function CommentMain({ content }) {
    const { comment, getComment } = useGetData()

    // 최초 컴포넌트 마운트시, getComment()실행
    useEffect(()=>{
        getComment(content._id)
    }, [])

    
    if(comment) return (
        <div className={ styles.comment_main }>

            {/* 코멘트 nav */}
            <div className={ styles.nav }>
                <h1 className={ styles.title }>{ content.title }</h1>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">정렬</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="sortOption"
                            defaultValue="좋아요"
                        >
                            <MenuItem value={"좋아요"}>좋아요</MenuItem>
                            <MenuItem value={"최근 코멘트"}>최근 코멘트</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>

            {/* 코멘트 아이템 */}
            {/* comment가 있다는 전제하에, comment.length > 0일때 코멘트를 렌더링해줌 */}
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                { !comment.length 
                ? <div>아직 댓글이 없어요..</div>
                : comment.map((a, i)=> <CommentItem key={i} comment={a} getComment={ getComment }/> ) }
             </List>
             <CommentWrite contentId={ content._id } getComment={ getComment }/>
        </div>
    )
}