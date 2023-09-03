import { useDispatch } from 'react-redux';
// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// reducer
import { clearCommentList } from '@/redux/features/commentListSlice';


export default function CommentNav({ contentTitle, setSortOption }) {
    const dispatch = useDispatch()

    const handleSortOptionChange = (e) => {
        dispatch(clearCommentList())
        setSortOption(e.target.value)
    }

    return (
        <Box sx={{ display : 'flex', justifyContent : 'space-between', alignItems : 'center', borderBottom : '1px solid #000000', pb : '16px'}}>
            <Typography>{ contentTitle }</Typography>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel>정렬</InputLabel>
                    <Select label="sortOption" defaultValue="like" onChange={ handleSortOptionChange }>
                        <MenuItem value="like">좋아요</MenuItem> 
                        <MenuItem value="createDate">최근 코멘트</MenuItem> 
                    </Select>
                </FormControl>
            </Box>
        </Box>
    )
}