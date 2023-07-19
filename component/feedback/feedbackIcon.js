'use client'
import { useEffect, useState } from "react";
// 커스텀 훅
import useGetFeedback from "@/hook/feedbackFetching/useGetFeedback";
import useUploadFeedback from "@/hook/feedbackFetching/useUploadFeedback";
// MUI
import Box from "@mui/material/Box"
import IconButton from '@mui/material/IconButton';
// MUI icons
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Typography from "@mui/material/Typography";




export default function FeedbackIcon({ comment, session }) {
    const [ refreshFeedback, setRefreshFeedback ] = useState(false)

    const { like, dislike, userFeedback, getCommentFeedback } = useGetFeedback()
    const { uploadCommentFeedback } = useUploadFeedback()

    useEffect(()=>{
        getCommentFeedback(comment._id)
        setRefreshFeedback(false)
    }, [refreshFeedback])

    const handleSubmit = async (action)=> {
        if(!session) return console.log('로그인후 이용해주세요.')

        await uploadCommentFeedback(action, comment._id)
        setRefreshFeedback(true)
    }

    return (
        <Box>
            <IconButton aria-label="like" size="small" onClick={()=>{ handleSubmit('like') }}
                color={ userFeedback.type == "like" ? "primary" : "default" }>
                <ThumbUpIcon fontSize="inherit"/>
                <Typography>{ like }</Typography>
            </IconButton>
            <IconButton aria-label="dislike" size="small" onClick={()=>{ handleSubmit('dislike') }}
            color={ userFeedback.type == "dislike" ? "primary" : "default" }>
                <ThumbDownIcon fontSize="inherit"/>
                <Typography>{ dislike }</Typography>
            </IconButton>
        </Box>
    )
}