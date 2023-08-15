'use client'
import { useSession } from "next-auth/react";
// 커스텀 훅
import useFeedback from "@/hook임시/feedback/useFeedback";
// MUI
import Box from "@mui/material/Box"
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
// MUI icons
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


export default function ContentFeedback({ content }) {
    const { feedbackCuont, userFeedback, updateFeedback, rollbackedFeedback  } = useFeedback(content, 'contents')
    const session = useSession()

    const handleChangeFeedback = async (e) => {
        let name = e.currentTarget.name

        if(!session.data) {
            console.log('로그인 이후 이용해주세요.')
            return
        }

        try {
            updateFeedback(name) // 피드백 옵티미스틱 업데이트
        } 
        catch(err) { // 실패시, 피드백 롤백
            rollbackedFeedback()
            alert('서버요청실패..!', err)
        }
    }


    return(
        <Box sx={{ display : 'flex', mt : '16px' }}>
            <Button
                name="like" 
                startIcon={ <ThumbUpIcon/> }
                onClick={ handleChangeFeedback } 
                variant={ userFeedback && userFeedback.type == "like" ? "contained" : "outlined" }
                color="success" sx={{ mr : '16px' }} 
                size="large">
                
                <Typography fontWeight="600">좋아요!</Typography>
                <Typography fontWeight="600">{ feedbackCuont.like }</Typography>
            </Button>

            <Button 
                name="dislike"
                startIcon={ <ThumbDownIcon/> } 
                onClick={ handleChangeFeedback } 
                variant={ userFeedback && userFeedback.type == "dislike" ? "contained" : "outlined" }
                size="large">
                  
                <Typography fontWeight="600">별로에요..</Typography>
                <Typography fontWeight="600">{ feedbackCuont.dislike }</Typography>  
            </Button>
        </Box>
    )
}