'use client'
import { useEffect, useState } from 'react';
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


export default function UserComments({ content }) {
    // const { comment, fetchComment } = useFetchComment()
    const [ isLoading, setIsLoading ] = useState(true)
    
    // const setComments = async () => {
    //     await fetchComment(content._id, 4)
    //     setIsLoading(false)
    // }

    // useEffect(()=>{
    //     setComments()
    // }, [])


    return (
        <Box sx={{ flexBasis : '40%' }}>
            <Box sx={{ display : 'flex', justifyContent : 'space-between', alignItems : 'flex-end', mb : '6px' }}>
                <Typography fontSize="2rem">유저들 코멘트</Typography>
                <Link href={`/comment/${content._id}/?title=${content.title}`}>
                    <Button>View more!</Button>
                </Link>
            </Box>


        </Box>
    )
}