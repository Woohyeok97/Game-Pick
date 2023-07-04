'use client'
// MUI
import Box from "@mui/material/Box"
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
// MUI icons
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

export default function CommentFeedback() {

    return (
        <Box mt={4}>
            <Button variant="outlined" startIcon={ <ThumbUpIcon/> }  color="success" sx={{ mr : '16px' }} size="large">
                <Typography fontWeight="600">0 좋아요!</Typography>
            </Button>
            <Button variant="outlined" startIcon={ <ThumbDownIcon/> } size="large">
                <Typography fontWeight="600">0 별로에요..</Typography>   
            </Button>
        </Box>
    )
}