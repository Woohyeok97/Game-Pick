'use client'
import { useEffect } from "react";
// 커스텀 훅
import useGetFeedbackType from "@/hook/feedbackFetching/useGetFeedbackType";
import useUploadFeedback from "@/hook/feedbackFetching/useUploadFeedback";
// MUI
import Box from "@mui/material/Box"
import IconButton from '@mui/material/IconButton';
// MUI icons
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Typography from "@mui/material/Typography";


export default function FeedbackIcon({ comment, session, setRefreshFeedback }) {
    const { feedbackType, getCommentFeedbackType } = useGetFeedbackType()
    const { uploadCommentFeedback } = useUploadFeedback()
    
    useEffect(()=>{
        getCommentFeedbackType(comment._id)
    }, [comment])

    const handleFeedbackSubmit = async (action)=> {
        if(!session) return console.log('로그인후 이용해주세요.')

        await uploadCommentFeedback(action, comment._id)
        setRefreshFeedback(true)
    }

    return (
        <Box>
            <IconButton size="small" onClick={()=>{ handleFeedbackSubmit('like') }}
                color={ feedbackType == "like" ? "primary" : "default" }>
                <ThumbUpIcon fontSize="inherit"/>
                <Typography>{ comment.like }</Typography>
            </IconButton>
            
            <IconButton size="small" onClick={()=>{ handleFeedbackSubmit('dislike') }}
            color={ feedbackType == "dislike" ? "primary" : "default" }>
                <ThumbDownIcon fontSize="inherit"/>
                <Typography>{ comment.dislike }</Typography>
            </IconButton>
        </Box>
    )
}