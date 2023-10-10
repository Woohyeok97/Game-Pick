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
            {/* 좋아요 버튼 */}
            <button name="like" className={ userFeedback?.type == 'like' ? styles.isFeedback : '' }
            onClick={ handleUpdateFeedback }>
                <ThumbUpIcon fontSize='inherit'/>
                { feedbackCount.like }
            </button>
            {/* 싫어요 버튼 */}
            <button name="dislike" className={ userFeedback?.type == 'dislike' ? styles.isFeedback : '' }
            onClick={ handleUpdateFeedback }>
                <ThumbDownIcon fontSize='inherit'/>
                { feedbackCount.dislike }
            </button>
        </div>
    )
}

// 뭘 신경씀?
// 1. 비지니스 로직과 ui로직의 분리 왜? -> 디버깅 용이, 유연하게 변화 가능, 유지보수성 업 -> 단순히 커스텀 훅으로 분리한다고 되는게 아니라, 그에 맞는 코드를 작성하자
// 2. 비지니스 로직은 ui에 관심을 끈다. 그냥 결과만 반환한다.
// 3. ui 로직은 비지니스 로직한테 재료만 제공한다. 비지니스 로직이 반환한 결과물을 쓸지말지는 ui로직이 결정한다. 또 에러처리에도 관심을끄고 단순히 결과만 가져다 쓴다.