'use client'
// 유틸함수
import formatDate from '@/util/formatDate';
//MUI
import Box from '@mui/material/Box'
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
// 컴포넌트
import FeedbackButton from '@/component/feedback/feedbackButton';


export default function CommentCard({ comment }) {

    return (
        <Box>
            <ListItemAvatar sx={{ display : 'flex', alignItems : 'center' }}>
                <Avatar src={ comment.userImage }/>
                <Typography ml="12px" fontSize="1.2rem">{ comment.userName }</Typography>
            </ListItemAvatar>
            <ListItemText primary={ comment.text } secondary={ formatDate(comment.createDate) } />
            <FeedbackButton data={ comment }/>
        </Box>
    )
}