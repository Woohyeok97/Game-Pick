'use client'
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
// 커스텀 훅
import useFeedback from "@/hook/feedback/useFeedback";
// reducer
import { openSnackbar } from "@/redux/features/snackbarStateSlice";
// MUI
import Box from "@mui/material/Box"
import IconButton from '@mui/material/IconButton';
// MUI icons
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Typography from "@mui/material/Typography";


export default function FeedbackButton({ data }) {
    const dispatch = useDispatch()
    const session = useSession()
    const { feedbackCount, userFeedback, updateFeedback } = useFeedback({
        data : data,
        collection : 'comments',
        session : session,
    })

    // 피드백 핸들러
    const handleUpdateFeedback = async (e) => {
        if(!session.data) {
            dispatch(openSnackbar({ severity : 'warning', message : '로그인 이후 이용해 주세요.' }))
            return
        }
        
        const type = e.currentTarget.name          
        const result = await updateFeedback(type)
        dispatch(openSnackbar(result))
    }

    return (
        <Box sx={{ display : 'flex' }}>
            {/* 좋아요 버튼 */}
            <IconButton size="small" name="like" onClick={ handleUpdateFeedback}
             color={ userFeedback && userFeedback.type == "like" ? "primary" : "default" }>
                <ThumbUpIcon fontSize="inherit" sx={{ mr : '4px' }}/>
                <Typography>{ feedbackCount.like }</Typography>
            </IconButton>

            {/* 싫어요 버튼 */}
            <IconButton size="small" name="dislike" onClick={ handleUpdateFeedback }
            color={ userFeedback && userFeedback.type == "dislike" ? "primary" : "default" }> 
                <ThumbDownIcon fontSize="inherit" sx={{ mr : '4px' }}/>
                <Typography>{ feedbackCount.dislike }</Typography>
            </IconButton>
        </Box>
    )
}

