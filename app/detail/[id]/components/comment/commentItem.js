import styles from '../../styles/comment.module.scss'
import { useSession } from 'next-auth/react';
import { useDispatch } from 'react-redux';
// 유틸함수
import formatDate from '@/util/formatDate';
// 커스텀 훅
import useDeleteComment from '@/hook/comment/useDeleteComment';
// reducer
import { openSnackbar } from '@/redux/features/snackbarStateSlice';
// MUI
import Avatar from '@mui/material/Avatar';
import ClearIcon from '@mui/icons-material/Clear';
// 컴포넌트
import FeedbackButton from '@/component/feedback/feedbackButton';



export default function CommentItem({ comment }) {
    const { removeComment } = useDeleteComment({ comment : comment })
    const dispatch = useDispatch()
    const session = useSession()
    
    const handleDeleteComment = async () => {
        if(!confirm('코멘트를 삭제 할까요?')) return
        const result = await removeComment()
        dispatch(openSnackbar(result))
    }

    return (
        <li className={ styles.comment_item }>
            <div className={ styles.header }>
                <div className={ styles.user_profile }>
                    <Avatar src={ comment.userImage }/>
                    <div>
                        <p className={ styles.name }>{ comment.userName }</p>
                        <p className={ styles.date }>{ formatDate(comment.createDate) } 작성</p>
                    </div>
                </div>
                { session.data?.user.role == 'amdin' || session.data?.user.email == comment.userEmail 
                && <ClearIcon onClick={ handleDeleteComment } className={ styles.delete }/> }
            </div>

            <p className={ styles.text }>{ comment.text }</p>

            <FeedbackButton data={ comment }/>
        </li>
    )
}