'use client'
import styles from '../../styles/detailComment/commentNav.module.scss'
// MUI
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CommentNav({ sortOption, setSortOption }) {

    const handleChange = (e)=>{
        setSortOption(e.target.value)
    }

    return (
        <div className={ styles.comment_nav }>
            <h1 onClick={()=>{ setName('comment_box_mobile') }}>User Comment</h1>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">정렬</InputLabel>
                    <Select 
                        labelId="demo-simple-select-label" 
                        id="demo-simple-select" 
                        label="sortOption"
                        value={ sortOption }
                        onChange={ handleChange }  
                        defaultValue={'좋아요순'}>
                        <MenuItem value={'좋아요순'}>좋아요순</MenuItem>
                        <MenuItem value={'최신순'}>최신순</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </div>
    )
}