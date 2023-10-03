import styles from '../../styles/comment.module.scss'
import { useDispatch } from 'react-redux';
// reducer
import { clearCommentList } from '@/redux/features/commentListSlice';
// MUI
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export default function Selector({ setSortOption }) {
    const dispatch = useDispatch()

    const handleSortOptionChange = (e) => {
        dispatch(clearCommentList())
        setSortOption(e.target.value)
    }

    return (
        <FormControl className={ styles.sort_box }>
            <Select defaultValue="like" inputProps={{ 'aria-label': 'Without label' }} className={ styles.select }
            onChange={ handleSortOptionChange }>
                <MenuItem value="like">좋아요</MenuItem> 
                <MenuItem value="createDate">최근 코멘트</MenuItem> 
            </Select>
        </FormControl>
    )
}