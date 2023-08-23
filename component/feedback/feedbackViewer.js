'use client'
// MUI
import Box from "@mui/material/Box"
// MUI icons
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Typography from "@mui/material/Typography";


export default function FeedbackViewer({ data = { like : 0, dislike : 0 } }) {

    return (
        <Box sx={{ display : 'flex' }}>
            <Box sx={{ display : 'flex', alignItems : 'center', ml : '6px', color : 'text.secondary' }}>
                <ThumbUpIcon fontSize="inherit" sx={{ mr : '4px' }}/>
                <Typography>{ data.like }</Typography>
            </Box>

            <Box sx={{ display : 'flex', alignItems : 'center', ml : '6px', color : 'text.secondary' }}>
                <ThumbDownIcon fontSize="inherit" sx={{ mr : '4px' }}/>
                <Typography>{ data.dislike }</Typography>
            </Box>
        </Box>
    )
}
