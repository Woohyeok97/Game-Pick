'use client'
import Link from 'next/link';
// 커스텀 훅
import useFetchComment from '@/hook/comment/useFetchComment';
// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List';
import Button from '@mui/material/Button'
// 컴포넌트
import CommentCard from './commentCard';
import { useEffect } from 'react';


export default function ContentComments({ content }) {
    const { comment, fetchComment } = useFetchComment()

    useEffect(()=>{
        fetchComment(content._id, 4)
    }, [])

    return (
        <Box sx={{ flexBasis : '40%' }}>
            <Box sx={{ display : 'flex', justifyContent : 'space-between', alignItems : 'flex-end' }}>
                <Typography fontSize="2rem">유저들 코멘트</Typography>
                <Link href={`/comment/${content._id}/?title=${content.title}`}>
                    <Button>View more!</Button>
                </Link>
            </Box>
            
            <List sx={{ display: 'flex', justifyContent : 'space-between', width : `${comment.length * 25}%`}}>
                { comment.map((item, i) => <CommentCard key={item._id} comment={ item }/> ) }
            </List>
        </Box>
    )
}