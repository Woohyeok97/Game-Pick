import { useContext } from 'react';
// context
import { CommentContext } from '../layout';
// MUI
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';



export default function CommentNav({ contentTitle }) {
    const { setFetchOption, setComment, setTempCommentId } = useContext(CommentContext)

    const handleChangeSort = (e) => {
        setTempCommentId([])
        setComment([])
        setFetchOption(e.target.value)
    }

    return (
        <Box sx={{ display : 'flex', justifyContent : 'space-between', alignItems : 'center', borderBottom : '1px solid #000000', mt : '32px', pb : "16px" }}>
            <Typography variant="h1" fontSize="2rem" fontWeight="500">{ contentTitle }</Typography>

            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel>코멘트 정렬</InputLabel>
                    <Select label="sortOption" defaultValue="like" onChange={ handleChangeSort }>
                        <MenuItem value='like'>좋아요</MenuItem>
                        <MenuItem value='createDate'>최근 코멘트</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Box>
    )
}