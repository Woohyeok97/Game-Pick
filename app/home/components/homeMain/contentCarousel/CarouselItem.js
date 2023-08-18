// MUI
import Box from '@mui/material/Box'
import Typograph from '@mui/material/Typography'

export default function CarouselItem({ content }) {
    
    return (
        <Box sx={{ display : 'flex', flexDirection : 'column', height : '100%', bgcolor : 'orange' }}>
            <Typograph>{ content.title }</Typograph>
            <Typograph>유저추천 {content.like}</Typograph>
        </Box>
    )
}