'use client'
import { useContext, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { CommentContext } from './layout'
// 컴포넌트
import CommentNav from './components/commentNav'
import CommentWrite from './components/commentWrite'
import CommentItem from './components/commentItem'
// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'


export default function Comment({ params, searchParams }) {
    const { comment, fetchComment, nextComment, fetchOption } = useContext(CommentContext)
    const session = useSession()

    const contentId = params.id
    const contentTitle = searchParams.title

    useEffect(()=>{
        fetchComment(contentId, 2)
    }, [fetchOption])

    return (
        <Box sx={{ display : 'flex', flexDirection : 'column', padding : '5% 20%' }}>
            <CommentNav contentTitle={ contentTitle } /> 
            <CommentWrite contentId={ contentId } />
            { comment.map((item, i)=> <CommentItem key={item._id} comment={ item } session={ session } />) }
            { nextComment && <Button onClick={()=>{ fetchComment(contentId, 2) }}>더보기</Button> }
        </Box>
    )
}