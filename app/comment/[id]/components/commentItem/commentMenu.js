import styles from '../../styles/commentMain/commentMenu.module.scss'
// 커스텀훅
import useDeleteContent from '@/hook/useDeleteContent';
// MUI
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


export default function CommentMenu({ comment, getComment }) {
    
    const { deleteComment } = useDeleteContent()

    const handleSubmit = async () => {
        await deleteComment(comment._id)
        getComment(comment.parent)
    }

    return (
        <List className={ styles.comment_menu } sx={{ bgcolor : 'background.paper' }}>
            {/* 코멘트 수정 */}
            <ListItem button sx={{ padding : '6px' }}>
                <ListItemText 
                primary="수정" 
                sx={{ display : 'flex', justifyContent : 'center' }}/>
            </ListItem>
            <Divider />

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