'use client'
// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function ListNav() {

    return (
        <Box sx={{ display : 'flex', justifyContent : 'space-between', alignItems : 'center',}} mt={5} mb={5}>
            <Typography variant="h1" fontSize="2rem" fontWeight="500">골라봐, 오늘 할 게임</Typography>
        </Box>
    )
}