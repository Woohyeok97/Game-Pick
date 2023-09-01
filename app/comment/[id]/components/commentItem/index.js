import { useState } from 'react';
// 유틸 함수
import formatDate from '@/util/formatDate';
// MUI
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// 컴포넌트
import CommentMenu from './commentMenu';
import FeedbackButton from '@/component/feedback/feedbackButton';



export default function CommentItem({ comment, session }) {
    const [ menuSwitch, setMenuSwitch ] = useState(false)

    const handleMenuSwitchChange = () => {
        setMenuSwitch((prev) => !prev)
    }

    return (
        <ListItem sx={{ display : 'flex', justifyContent : 'space-between', mb : '16px' }} alignItems="flex-start">
            {/* 코멘트 아이템 */}
            <Box>
                <ListItemAvatar sx={{ display : 'flex', alignItems : 'center' }}>
                    <Avatar src={ comment.userImage }/>
                    <Typography ml="12px" fontSize="1.2rem">{ comment.userName }</Typography>
                </ListItemAvatar>
                <ListItemText primary={ comment.text } secondary={ formatDate(comment.createDate) } />
                <FeedbackButton data={ comment }/>
            </Box>

            {/* 메뉴버튼 */}
            {/* 본인이 작성한 코멘트, 혹은 세션데이터의 role이 'admin'일 경우, 메뉴 아이콘을 보여줌 */}
            { session.data && (session.data.user.email == comment.userEmail || session.data.user.role == 'admin')
            && <Box sx={{ position : 'relative' }}>
                { menuSwitch && <CommentMenu comment={ comment }/> } {/* 코멘트 메뉴 */}
                <IconButton aria-label="menu" onClick={ handleMenuSwitchChange }>
                    <MoreHorizIcon/> 
                </IconButton>
            </Box> }
        </ListItem>
        )
}