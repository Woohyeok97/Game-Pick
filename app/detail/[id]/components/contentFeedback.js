'use client'
import styles from '../styles/contentFeedback.module.scss'
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
// 커스텀 훅
import useFeedback from "@/hook/feedback/useFeedback";
// reducer
import { openSnackbar } from "@/redux/features/snackbarStateSlice";
// MUI icons
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


export default function ContentFeedback({ content }) {
    const dispatch = useDispatch()
    const session = useSession()
    const { feedbackCount, userFeedback, updateFeedback } = useFeedback({
        data : content,
        collection : 'contents',
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
        <div className={ styles.content_feedback }>
            <div className={ styles.feedback_count }>
                <p>
                    <ThumbUpIcon fontSize='inherit'/>
                    { feedbackCount.like }
                </p>
                <p>
                    <ThumbDownIcon fontSize='inherit'/>
                    { feedbackCount.dislike }
                </p>
            </div>
            <div className={ styles.feedback_btn_box }>
                <button name='like' className={ userFeedback?.type == 'like' ? styles.isFeedback : '' }
                onClick={ handleUpdateFeedback }>재밌어요</button>

                <button name='dislike' className={ userFeedback?.type == 'dislike' ? styles.isFeedback : '' }
                onClick={ handleUpdateFeedback }>재미없어요</button>
            </div>
        </div>
    )
}