'use client'
import { useSession } from "next-auth/react";
// 커스텀 훅
import useFeedback from "@/hook/feedback/useFeedback";
// MUI
import Box from "@mui/material/Box"
import IconButton from '@mui/material/IconButton';
// MUI icons
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Typography from "@mui/material/Typography";


export default function FeedbackButton({ data }) {
    const { feedbackCount, userFeedback, updateFeedback } = useFeedback(data, 'comments')
    const session = useSession()

    // 피드백 핸들러
    const handleChangeFeedback = async (e) => {
        const type = e.currentTarget.name  
    
        if(!session.data) {
            alert('로그인 이후 이용해주세요!')
            return
        }    
        await updateFeedback(type)
    }
    
    return (
        <Box sx={{ display : 'flex' }}>
            {/* 좋아요 버튼 */}
            <IconButton size="small" name="like" onClick={ handleChangeFeedback }
             color={ userFeedback && userFeedback.type == "like" ? "primary" : "default" }>
                <ThumbUpIcon fontSize="inherit" sx={{ mr : '4px' }}/>
                <Typography>{ feedbackCount.like }</Typography>
            </IconButton>

            {/* 싫어요 버튼 */}
            <IconButton size="small" name="dislike" onClick={ handleChangeFeedback } 
            color={ userFeedback && userFeedback.type == "dislike" ? "primary" : "default" }>
                <ThumbDownIcon fontSize="inherit" sx={{ mr : '4px' }}/>
                <Typography>{ feedbackCount.dislike }</Typography>
            </IconButton>
        </Box>
    )
}


// 'use client'
// import { useSession } from "next-auth/react";
// // 커스텀 훅
// import useFeedback from "@/hook/feedback/useFeedback";
// // MUI
// import Box from "@mui/material/Box"
// import IconButton from '@mui/material/IconButton';
// // MUI icons
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import ThumbDownIcon from '@mui/icons-material/ThumbDown';
// import Typography from "@mui/material/Typography";


// export default function FeedbackButton({ data }) {
//     const { feedbackCuont, userFeedback, updateFeedback, rollbackedFeedback } = useFeedback(data, 'comments')
//     const session = useSession()

//     // 피드백 핸들러
//     const handleChangeFeedback = async (e) => {
//         const name = e.currentTarget.name  
    
//         if(!session.data) {
//             alert('로그인 이후 이용해주세요!')
//             return
//         }    
        
//         try {
//             updateFeedback(name) // 피드백 옵티미스틱 업데이트
//         } 
//         catch(err) { // 실패시, 피드백 롤백
//             rollbackedFeedback()
//             alert('서버요청실패..!', err)
//         }     
//     }
    
//     return (
//         <Box sx={{ display : 'flex' }}>
//             {/* 좋아요 버튼 */}
//             <IconButton size="small" name="like" onClick={ handleChangeFeedback }
//              color={ userFeedback && userFeedback.type == "like" ? "primary" : "default" }>
//                 <ThumbUpIcon fontSize="inherit" sx={{ mr : '4px' }}/>
//                 <Typography>{ feedbackCuont.like }</Typography>
//             </IconButton>

//             {/* 싫어요 버튼 */}
//             <IconButton size="small" name="dislike" onClick={ handleChangeFeedback } 
//             color={ userFeedback && userFeedback.type == "dislike" ? "primary" : "default" }>
//                 <ThumbDownIcon fontSize="inherit" sx={{ mr : '4px' }}/>
//                 <Typography>{ feedbackCuont.dislike }</Typography>
//             </IconButton>
//         </Box>
//     )
// }
