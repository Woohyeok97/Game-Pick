'use client'
// 커스텀 훅
import useUploadFeedback from "@/hook/feedbackFetching/useUploadFeedback";
// MUI
import Box from "@mui/material/Box"
import IconButton from '@mui/material/IconButton';
// MUI icons
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Typography from "@mui/material/Typography";


export default function FeedbackIcon({ data, session, setRefreshFeedback, interaction }) {
    const { uploadCommentFeedback } = useUploadFeedback()
    
    const handleFeedbackSubmit = async (action)=> {
        if(!interaction) return
        if(!session) return console.log('로그인후 이용해주세요.')

        await uploadCommentFeedback(action, data._id)
        setRefreshFeedback(true)
    }


    return (
        <Box sx={{ display : 'flex' }}>
            <IconButton size="small" onClick={() => { interaction ? handleFeedbackSubmit('like') : null }}
                color={ data.feedbackType == "like" ? "primary" : "default" } disabled={ interaction ? false : true }>
                <ThumbUpIcon fontSize="inherit" sx={{ mr : '4px' }}/>
                <Typography>{ data.like }</Typography>
            </IconButton>
            
            <IconButton size="small" onClick={() => { interaction ? handleFeedbackSubmit('dislike') : null }} 
            color={ data.feedbackType == "dislike" ? "primary" : "default" } disabled={ interaction ? false : true }>
                <ThumbDownIcon fontSize="inherit" sx={{ mr : '4px' }}/>
                <Typography>{ data.dislike }</Typography>
            </IconButton>
        </Box>
    )
}