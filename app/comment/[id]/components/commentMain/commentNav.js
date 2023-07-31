// 커스텀 훅
import useSortData from '@/hook/setData/useSortData';
// MUI
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';


export default function CommentNav({ content, setComment }) {

    const { sortByDate, sortByFeedback } = useSortData()

    const handleChange = (e)=> {
        if(e.target.value == '좋아요') sortByFeedback(setComment)
        if(e.target.value == '최근 코멘트') sortByDate(setComment)
    }

    return (
        <Box sx={{ display : 'flex', justifyContent : 'space-between', alignItems : 'center', borderBottom : '1px solid #000000', mt : '16px', pb : "16px" }}>
            <Typography variant="h1" fontSize="2rem" fontWeight="500">{ content.title }</Typography>

            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">정렬</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="sortOption"
                        defaultValue="좋아요"
                        onChange={ handleChange }
                    >
                        <MenuItem value={"좋아요"}>좋아요</MenuItem>
                        <MenuItem value={"최근 코멘트"}>최근 코멘트</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Box>
    )
}