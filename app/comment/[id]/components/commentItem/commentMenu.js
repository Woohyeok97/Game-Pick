import styles from '../../styles/commentMain/commentMenu.module.scss'
// 리컨펌 유틸함수
// import reconfirmAction from '@/util/reconfirmAction';
// 커스텀훅
import useDeleteData from '@/hook/dataFetching/useDeleteData';
// import useSnackbar from '@/hook/UI/useSnackbar';
// MUI
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// 컴포넌트
// import AlertSnackbar from '@/component/alertSnackbar/alertSnackbar';



export default function CommentMenu({ comment, setRefreshFeedback }) {
    const { deleteComment } = useDeleteData()

    const handleDeleteSubmit = async () => {
        // if(!reconfirmAction('컨텐츠를 삭제 하시겠습니까?')) return
        await deleteComment(comment._id, comment.userEmail)
        // 코멘트 삭제후, 변경된 코멘트를 다시요청
        setRefreshFeedback(true)
    }

    return (
        <List className={ styles.comment_menu } sx={{ bgcolor : 'background.paper' }}>
            {/* 코멘트 삭제 */}
            <ListItem button sx={{ padding : '6px' }}>
                <ListItemText 
                    onClick={()=>{ handleDeleteSubmit() }}
                    primary="삭제" 
                    sx={{ display : 'flex', justifyContent : 'center' }}/>
            </ListItem>
        </List>
    )
}