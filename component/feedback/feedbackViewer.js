'use client'
// MUI
import Box from "@mui/material/Box"
// MUI icons
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Typography from "@mui/material/Typography";


export default function FeedbackViewer({ like, dislike }) {

    return (
        <Box sx={{ display : 'flex' }}>
            <Box sx={{ display : 'flex', alignItems : 'center', ml : '6px' }}>
                <ThumbUpIcon fontSize="inherit" sx={{ mr : '4px' }}/>
                <Typography>{ like }</Typography>
            </Box>

            <Box sx={{ display : 'flex', alignItems : 'center', ml : '6px' }}>
                <ThumbDownIcon fontSize="inherit" sx={{ mr : '4px' }}/>
                <Typography>{ dislike }</Typography>
            </Box>
        </Box>
    )
}
