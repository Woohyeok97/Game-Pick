'use client'
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



export default function ContentFeedback({ content }) {

    const { contentFeedback } = useUploadFeedback()

    return (
        <Box mt={4}>
            <Button 
                onClick={()=>{ contentFeedback('like', content._id) }}
                variant="outlined" 
                startIcon={ <ThumbUpIcon/> } 
                color="success" sx={{ mr : '16px' }} 
                size="large">

                <Typography fontWeight="600">0</Typography>
                <Typography fontWeight="600">좋아요!</Typography>
            </Button>

            <Button 
                value="dislike" 
                variant="outlined"
                startIcon={ <ThumbDownIcon/> } 
                size="large">
                    
                <Typography fontWeight="600">0</Typography>   
                <Typography fontWeight="600">별로에요..</Typography> 
            </Button>
        </Box>
    )
}