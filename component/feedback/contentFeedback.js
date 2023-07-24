'use client'
import { useEffect, useState } from "react";
// 커스텀훅
import useGetFeedback from "@/hook/feedbackFetching/useGetFeedback";
import useUploadFeedback from "@/hook/feedbackFetching/useUploadFeedback";
// MUI
import Box from "@mui/material/Box"
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
// MUI icons
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';




export default function ContentFeedback({ content, session }) {

    const { like, dislike, userFeedback, getContentFeedback, refreshFeedback, setRefreshFeedback } = useGetFeedback()
    const { uploadContentFeedback } = useUploadFeedback()

    useEffect(()=>{
        getContentFeedback(content._id)
        setRefreshFeedback (false)
    }, [refreshFeedback])

    // 피드백 버튼 핸들러
    const handleFeedbackSubmit = async (action) => {
        if(session) {
            await uploadContentFeedback(action, content._id);
            setRefreshFeedback (true)
        } else {
            console.log('로그인후, 이용해주세요!')
        }
    }

    return (
        <Box mt={4}>
            <Button 
                onClick={()=>{ handleFeedbackSubmit('like') }}
                variant={ userFeedback == "like" ? "contained" : "outlined" }
                startIcon={ <ThumbUpIcon/> } 
                color="success" sx={{ mr : '16px' }} 
                size="large">

                <Typography fontWeight="600">{ like }</Typography>
                <Typography fontWeight="600">좋아요!</Typography>
            </Button>

            <Button 
                onClick={()=>{ handleFeedbackSubmit('dislike') }}
                variant={ userFeedback == "dislike" ? "contained" : "outlined" }
                startIcon={ <ThumbDownIcon/> } 
                size="large">

                <Typography fontWeight="600">{ dislike }</Typography>   
                <Typography fontWeight="600">별로에요..</Typography> 
            </Button>
        </Box>
    )
}