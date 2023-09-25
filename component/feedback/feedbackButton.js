'use client'
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
// 커스텀 훅
import useFeedback from "@/hook/feedback/useFeedback";
// reducer
import { openSnackbar } from "@/redux/features/snackbarStateSlice";
// MUI
import Box from "@mui/material/Box"
import IconButton from '@mui/material/IconButton';
// MUI icons
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Typography from "@mui/material/Typography";


export default function FeedbackButton({ data }) {
    const dispatch = useDispatch()
    const session = useSession()
    const { feedbackCount, userFeedback, updateFeedback } = useFeedback({
        data : data,
        collection : 'comments',
        session : session,
    })

    // 의문점(로그인 여부확인)
    // 1. 로그인 여부에 따라서 '로그인 상태 피드백버튼', '미로그인 상태 피드백버튼' 컴포넌트를 따로 보여줘야하는건가?(하나의 역할수행 차원)
    // 2. 그냥 피드백버튼 컴포넌트에서 로그인 여부를 판단한다면, '미로그인시 피드백비활성화', 'view만 제공하는 피드백버튼' 이걸 어떻게 설정해야할까
    
    // 걍 개선하고 싶은거
    // 1. 어드민 컴포넌트 중복 넘 심한데, 재사용성 높일순 없나
    // 2. 코멘트 딜리트에서 꼭 유저 이메일을 보내야할까
    // 3. 커스텀 훅의 역할범위를 다시 설정해야하나? 그럼 기준은?(확장성 차원으로 생각했을때)
    // 4. useEffect는 커스텀 훅? 아님 컴포넌트? 어디가 좋으려나(역시 확장성, 커스텀 훅의 역할)
    // 5. 그리고 컨텐츠 피드백이든, 코멘트 피드백 이든 컴포넌트 통일하고 옵션에 따라서 다른 ui를 보여주게 할까?ㅎㅎ?

    // 피드백 핸들러
    const handleUpdateFeedback = async (e) => {
        if(!session.data) {
            dispatch(openSnackbar({ severity : 'warning', message : '로그인 이후 이용해 주세요.' }))
            return
        }
        
        const type = e.currentTarget.name          
        const result = await updateFeedback(type)
        dispatch(openSnackbar(result))
    }

    return (
        <Box sx={{ display : 'flex' }}>
            <button onClick={()=>{ console.log(userFeedback) }}>sad</button>
            {/* 좋아요 버튼 */}
            <IconButton size="small" name="like" onClick={ handleUpdateFeedback}
             color={ userFeedback && userFeedback.type == "like" ? "primary" : "default" }>
                <ThumbUpIcon fontSize="inherit" sx={{ mr : '4px' }}/>
                <Typography>{ feedbackCount.like }</Typography>
            </IconButton>

            {/* 싫어요 버튼 */}
            <IconButton size="small" name="dislike" onClick={ handleUpdateFeedback } 
            color={ userFeedback && userFeedback.type == "dislike" ? "primary" : "default" }>
                <ThumbDownIcon fontSize="inherit" sx={{ mr : '4px' }}/>
                <Typography>{ feedbackCount.dislike }</Typography>
            </IconButton>
        </Box>
    )
}

