'use client'
// 커스텀 훅
import useFeedback from "@/hook임시/feedback/useFeedback";
// MUI
import Box from "@mui/material/Box"
import IconButton from '@mui/material/IconButton';
// MUI icons
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Typography from "@mui/material/Typography";
import { useEffect } from "react";


export default function FeedbackIcon({ data }) {
    const { feedback, setFeedback, fetchPrevFeedback, createFeedback, deleteFeedback } = useFeedback(data)

    useEffect(()=>{
        fetchPrevFeedback()
    }, [])

    const handleChangeFeedback = async (e) => {
        
    }
    
    
    return (
        <Box sx={{ display : 'flex' }}>
            <IconButton size="small" name="like" onClick={ handleChangeFeedback }>
                <ThumbUpIcon fontSize="inherit" sx={{ mr : '4px' }}/>
                <Typography>{ feedback.like }</Typography>
            </IconButton>
            
            <IconButton size="small" name="dislike" onClick={ handleChangeFeedback }>
                <ThumbDownIcon fontSize="inherit" sx={{ mr : '4px' }}/>
                <Typography>{ feedback.dislike }</Typography>
            </IconButton>
        </Box>
    )
}