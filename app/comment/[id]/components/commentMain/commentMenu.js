import styles from '../../styles/commentMain/commentMenu.module.scss'
// MUI
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


export default function CommentMenu() {
    return (
        <List className={ styles.comment_menu } sx={{ bgcolor : 'background.paper' }}>
            <ListItem button sx={{ padding : '6px' }}>
                <ListItemText primary="수정" sx={{ display : 'flex', justifyContent : 'center' }}/>
            </ListItem>
            <Divider />
            <ListItem button sx={{ padding : '6px' }}>
                <ListItemText primary="삭제" sx={{ display : 'flex', justifyContent : 'center' }}/>
            </ListItem>
        </List>
    )
}