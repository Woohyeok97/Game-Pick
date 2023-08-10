import styles from '../../styles/commentMain/commentMenu.module.scss'
// 커스텀훅
import useDeleteComment from '@/hook임시/comment/useDeleteComment';
// MUI
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


export default function CommentMenu({ comment, setComment, setTempCommentId }) {
    const { deleteComment } = useDeleteComment()

    const handleDeleteSubmit = async () => {
        await deleteComment(comment)
        setComment((prev) => prev.filter((item) => item._id != comment._id))
        setTempCommentId((prev) => prev.filter((item) => item != comment._id))
    }

    return (
        <List className={ styles.comment_menu } sx={{ bgcolor : 'background.paper' }}>
            {/* 코멘트 삭제 */}
            <ListItem button sx={{ padding : '6px' }}>
                <ListItemText sx={{ display : 'flex', justifyContent : 'center' }} primary="삭제" 
                onClick={ handleDeleteSubmit }/>
            </ListItem>
        </List>
    )
}