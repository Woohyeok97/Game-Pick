import styles from '../../styles/detailInfo/commentItem.module.scss'

// MUI
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Box from '@mui/material/Box';

export default function CommentItem() {
    return (
        <ListItem sx={{ padding : '0', flexBasis : '25%', padding : '16px' }}>
            <Paper elevation={5} sx={{ width : '100%', height : '100%' }}>
                <Card sx={{ display : 'flex', flexDirection : 'column', width : '100%', height : '100%' }}>
                    <CardHeader avatar={ <Avatar/> } title="고나우" subheader="September 14, 2016" sx={{ flexBasis : '20%' }}/>
                    <CardContent sx={{ flexBasis : '60%' }}>
                        <Typography variant="body2" color="text.secondary" fontSize="large">
                            장작값으로는 비싼감이 있네요.
                        </Typography>
                    </CardContent>
                    <Box sx={{ display : 'flex', flexBasis : '10%', fontSize : 'medium', color : "text.secondary", pl : '16px', mb : '16px' }}>
                        <ThumbUpIcon fontSize="inherit"/> <Typography mr={2} ml={1}>0</Typography>
                        <ThumbDownIcon fontSize="inherit"/> <Typography mr={2} ml={1}>0</Typography>
                    </Box>
                </Card>
            </Paper>
        </ListItem>
    )
}