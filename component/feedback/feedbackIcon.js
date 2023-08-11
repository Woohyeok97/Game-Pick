'use client'
import { useEffect } from "react";
// 커스텀 훅
import useFeedback from "@/hook임시/feedback/useFeedback";
// MUI
import Box from "@mui/material/Box"
import IconButton from '@mui/material/IconButton';
// MUI icons
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Typography from "@mui/material/Typography";


export default function FeedbackIcon({ data }) {
    const { feedbackCuont, setFeedbackCount, userFeedback, setUserFeedback, fetchUserFeedback, createFeedback, deleteFeedback } = useFeedback(data)

    useEffect(()=>{
        fetchUserFeedback()
    }, [])
    
    
    const handleChangeFeedback = async (e) => {
        const name = e.currentTarget.name

        if(!userFeedback) {
            // 1. 기존 피드백 없을때(피드백 생성)
            setFeedbackCount((prev) => {
                return {...prev, [name] : prev[name] + 1}
            })
            setUserFeedback({ type : name })

            await createFeedback(name)
            fetchUserFeedback() 
            return
        } else if(userFeedback.type == name){
            // 2. 기존 피드백과 같은 피드백일때(삭제)
            setFeedbackCount((prev) => {
                return {...prev, [name] : prev[name] - 1}
            })
            setUserFeedback((prev) => {
                return {...prev, type : null }
            })
            await deleteFeedback()
            fetchUserFeedback() 
        } else {
            // 3. 기존 피드백과 다른 피드백일때(기존피드백 삭제후, 피드백 생성)
            setFeedbackCount((prev) => {
                return {...prev, [name] : prev[name] + 1, [userFeedback.type] : prev[userFeedback.type] - 1}
            })
            setUserFeedback((prev) => {
                return {...prev, type : name }
            })
            await deleteFeedback()
            await createFeedback(name)
            fetchUserFeedback() 
        }
    }
    
    return (
        <Box sx={{ display : 'flex' }}>
            <IconButton size="small" name="like" onClick={ handleChangeFeedback }
             color={ userFeedback && userFeedback.type == "like" ? "primary" : "default" }>
                <ThumbUpIcon fontSize="inherit" sx={{ mr : '4px' }}/>
                <Typography>{ feedbackCuont.like }</Typography>
            </IconButton>
            
            <IconButton size="small" name="dislike" onClick={ handleChangeFeedback } 
            color={ userFeedback && userFeedback.type == "dislike" ? "primary" : "default" }>
                <ThumbDownIcon fontSize="inherit" sx={{ mr : '4px' }}/>
                <Typography>{ feedbackCuont.dislike }</Typography>
            </IconButton>
        </Box>
    )
}