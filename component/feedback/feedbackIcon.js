'use client'
<<<<<<< HEAD
// 커스텀 훅
=======
import { useEffect } from "react";
// 커스텀 훅
import useGetFeedbackType from "@/hook/feedbackFetching/useGetFeedbackType";
>>>>>>> c6ae09a2ab397e1034f3cb830ed0b938a1449c53
import useUploadFeedback from "@/hook/feedbackFetching/useUploadFeedback";
// MUI
import Box from "@mui/material/Box"
import IconButton from '@mui/material/IconButton';
// MUI icons
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Typography from "@mui/material/Typography";


export default function FeedbackIcon({ comment, session, setRefreshFeedback }) {
<<<<<<< HEAD
    const { uploadCommentFeedback } = useUploadFeedback()
    
=======
    const { feedbackType, getCommentFeedbackType } = useGetFeedbackType()
    const { uploadCommentFeedback } = useUploadFeedback()
    
    useEffect(()=>{
        getCommentFeedbackType(comment._id)
    }, [comment])

>>>>>>> c6ae09a2ab397e1034f3cb830ed0b938a1449c53
    const handleFeedbackSubmit = async (action)=> {
        if(!session) return console.log('로그인후 이용해주세요.')

        await uploadCommentFeedback(action, comment._id)
        setRefreshFeedback(true)
    }

    return (
        <Box>
            <IconButton size="small" onClick={()=>{ handleFeedbackSubmit('like') }}
<<<<<<< HEAD
                color={ comment.feedbackType == "like" ? "primary" : "default" }>
=======
                color={ feedbackType == "like" ? "primary" : "default" }>
>>>>>>> c6ae09a2ab397e1034f3cb830ed0b938a1449c53
                <ThumbUpIcon fontSize="inherit"/>
                <Typography>{ comment.like }</Typography>
            </IconButton>
            
            <IconButton size="small" onClick={()=>{ handleFeedbackSubmit('dislike') }}
<<<<<<< HEAD
            color={ comment.feedbackType == "dislike" ? "primary" : "default" }>
=======
            color={ feedbackType == "dislike" ? "primary" : "default" }>
>>>>>>> c6ae09a2ab397e1034f3cb830ed0b938a1449c53
                <ThumbDownIcon fontSize="inherit"/>
                <Typography>{ comment.dislike }</Typography>
            </IconButton>
        </Box>
    )
}