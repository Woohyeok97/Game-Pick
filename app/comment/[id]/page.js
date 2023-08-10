'use client'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
// 커스텀 훅
import useFetchComment from '@/hook임시/comment/useFetchComment'
// 컴포넌트
import CommentNav from './components/commentMain/commentNav'
import CommentWrite from './components/commentMain/commentWrite'
import CommentItem from './components/commentItem'
// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'



export default function Comment({ params, searchParams }) {
    const { comment, setComment, fetchComment, setTempCommentId, nextComment } = useFetchComment()
    const session = useSession()

    const contentId = params.id
    const contentTitle = searchParams.title
    
    useEffect(()=>{
        fetchComment(contentId)
        console.log('useEffect 실행됨!')     
    }, [])

    return (
        <Box sx={{ display : 'flex', flexDirection : 'column', padding : '5% 20%' }}>
            <CommentNav contentTitle={ contentTitle } setComment={ setComment } /> 
            <CommentWrite contentId={ contentId } setComment={ setComment } setTempCommentId ={ setTempCommentId  }/>

            { comment.map((item, i)=> <CommentItem key={item._id} comment={ item } session={ session } setComment={ setComment } setTempCommentId={ setTempCommentId }/> ) }
            { nextComment && <Button onClick={()=>{ fetchComment(contentId) }}>더보기</Button> }
        </Box>
    )
}