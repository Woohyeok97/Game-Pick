'use client'
import styles from './feedbackButton.module.scss'
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
// 커스텀 훅
import useFeedback from "@/hook/feedback/useFeedback";
// reducer
import { openSnackbar } from "@/redux/features/snackbarStateSlice";
// MUI icons
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


export default function FeedbackButton({ data }) {
    const dispatch = useDispatch()
    const session = useSession()
    const { feedbackCount, userFeedback, updateFeedback } = useFeedback({
        data : data,
        collection : 'comments',
        session : session,
    })

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
        <div className={ styles.feedback_button }>

            <button name="like" className={ userFeedback?.type == 'like' ? styles.isFeedback : '' }
            onClick={ handleUpdateFeedback }>
                <ThumbUpIcon fontSize='inherit'/>
                { feedbackCount.like }
            </button>

            <button name="dislike" className={ userFeedback?.type == 'dislike' ? styles.isFeedback : '' }
            onClick={ handleUpdateFeedback }>
                <ThumbDownIcon fontSize='inherit'/>
                { feedbackCount.dislike }
            </button>

        </div>
    )
}

