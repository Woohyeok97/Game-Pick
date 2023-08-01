'use client'
import { useEffect, useState } from "react";
// 커스텀훅
import useGetFeedback from "@/hook/feedbackFetching/useGetFeedback";
import useUploadFeedback from "@/hook/feedbackFetching/useUploadFeedback";
import useSnackbar from "@/hook/UI/useSnackbar";
// MUI
import Box from "@mui/material/Box"
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
// MUI icons
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
// 컴포넌트
import AlertSnackbar from "../alertSnackbar/alertSnackbar";


export default function ContentFeedback({ content, session }) {
    const { like, dislike, userFeedback, getContentFeedback, refreshFeedback, setRefreshFeedback } = useGetFeedback()
    const { uploadContentFeedback } = useUploadFeedback()
    const { open, snackbarKey, handleSnackbarOpne, handleSnackbarClose } = useSnackbar()

    useEffect(()=>{
        getContentFeedback(content._id)
        setRefreshFeedback (false)
    }, [refreshFeedback])

    // 피드백 버튼 핸들러
    const handleFeedbackSubmit = async (action) => {
        if(!session) console.log('로그인후, 이용해주세요!')

        await uploadContentFeedback(action, content._id);
        setRefreshFeedback (true)
        handleSnackbarOpne()
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

            <AlertSnackbar open={open} snackbarKey={snackbarKey} handleSnackbarClose={handleSnackbarClose}>
                피드백 반영 완료!
            </AlertSnackbar>
        </Box>
    )
}