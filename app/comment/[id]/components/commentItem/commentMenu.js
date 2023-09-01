// 커스텀훅
import useDeleteComment from '@/hook/comment/useDeleteComment';
// MUI
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


export default function CommentMenu({ comment }) {
    const { deleteComment } = useDeleteComment()

    const handleDeleteSubmit = async () => {
        // await deleteComment(comment)
        // setComment((prev) => prev.filter((item) => item._id != comment._id))
        // setTempCommentId((prev) => prev.filter((item) => item != comment._id))
    }

    return (
        <List sx={{ bgcolor : '#999999', position : 'absolute', right : '0', top : '0', minWidth : '80px', mr : '50px', mt : '12px', padding : '0' }}>
            <ListItem button sx={{ padding : '6px' }}>
                <ListItemText sx={{ display : 'flex', justifyContent : 'center' }} primary="삭제" 
                onClick={ handleDeleteSubmit }/>
            </ListItem>
        </List>
    )
}