'use client'
import Link from 'next/link';
// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List';
import Button from '@mui/material/Button'
// 컴포넌트
import CommentCard from './commentCard';


export default function ContentComments({ content }) {

    return (
        <Box sx={{ flexBasis : '40%' }}>
            <Box sx={{ display : 'flex', justifyContent : 'space-between', alignItems : 'flex-end' }}>
                <Typography fontSize="2rem">유저들 코멘트</Typography>
                <Link href={`/comment/${content._id}/?title=${content.title}`}>
                    <Button>View more!</Button>
                </Link>
            </Box>
            
            <List sx={{ display : 'flex', justifyContent : 'space-between' }}>
                <CommentCard/>
                <CommentCard/>
                <CommentCard/>
                <CommentCard/>
            </List>
        </Box>
    )
}