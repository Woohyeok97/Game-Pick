import styles from '../../styles/commentMain/commentMenu.module.scss'
// 커스텀훅
import useDeleteData from '@/hook/dataFetching/useDeleteData';
// MUI
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


export default function CommentMenu({ comment, getComment }) {
    
    const { deleteComment } = useDeleteData()

    const handleSubmit = async () => {
        await deleteComment(comment._id, comment.userEmail)
        // 코멘트 삭제후, 변경된 코멘트를 다시요청
        getComment(comment.parent)
    }

    return (
        <List className={ styles.comment_menu } sx={{ bgcolor : 'background.paper' }}>
            {/* 코멘트 삭제 */}
            <ListItem button sx={{ padding : '6px' }}>
                <ListItemText 
                    onClick={()=>{ handleSubmit() }}
                    primary="삭제" 
                    sx={{ display : 'flex', justifyContent : 'center' }}/>
            </ListItem>
        </List>
    )
}