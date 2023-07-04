'use client'
import styles from '../styles/listNav.module.scss'
// MUI
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

export default function ListNav() {
    return (
        <Box sx={{ display : 'flex', justifyContent : 'space-between', alignItems : 'center',}} mt={5} mb={5}>
            <Typography variant="h1" fontSize="2rem" fontWeight="500">골라봐, 오늘 할 게임</Typography>
            <FormControl sx={{ minWidth : '120px' }}>
                <InputLabel id="demo-simple-select-label">정렬</InputLabel>
                <Select label="sortOption" defaultValue="좋아요순">
                    <MenuItem value={"좋아요순"}>좋아요순</MenuItem>
                    <MenuItem value={"발매순"}>발매순</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}