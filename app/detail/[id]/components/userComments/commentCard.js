// 유틸함수
import formatDate from '@/util/formatDate';
// MUI
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
// 컴포넌트
import FeedbackViewer from '@/component/feedback/feedbackViewer';


export default function CommentCard({ comment }) {
    
    return (
        <ListItem sx={{ padding : '0' }}>
            <Paper elevation={5} sx={{ width : '100%', height : '100%' }}>
            <Card sx={{ display : 'flex', flexDirection : 'column', width : '100%', height : '100%', padding : '16px', boxSizing : 'border-box' }}>
                <CardHeader avatar={ <Avatar src={ comment.userImage }/> } title={ comment.userName } subheader={ formatDate(comment.createDate) } sx={{ flexBasis : '20%', padding : '0' }}/>
                <CardContent sx={{ flexBasis : '60%', padding : '24px 0' }}>
                    <Typography variant="body2" color="text.secondary" fontSize="large">
                        { comment.text }
                    </Typography>
                </CardContent>
                <FeedbackViewer data={ comment }/>
            </Card>
            </Paper>
        </ListItem>
    )
}