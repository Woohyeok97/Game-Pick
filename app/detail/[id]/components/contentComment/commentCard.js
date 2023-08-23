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

export default function CommentCard() {
    return (
        <ListItem sx={{ flexBasis : '23%', padding : '0' }}>
            <Paper elevation={5} sx={{ width : '100%', height : '100%' }}>
            <Card sx={{ display : 'flex', flexDirection : 'column', width : '100%', height : '100%', padding : '16px', boxSizing : 'border-box' }}>
                <CardHeader avatar={ <Avatar/> } title="고나우" subheader="September 14, 2016" sx={{ flexBasis : '20%', padding : '0' }}/>
                <CardContent sx={{ flexBasis : '60%', padding : '24px 0' }}>
                    <Typography variant="body2" color="text.secondary" fontSize="large">
                        장작값으로는 비싼감이 있네요.
                    </Typography>
                </CardContent>
                <FeedbackViewer />
            </Card>
            </Paper>
        </ListItem>
    )
}