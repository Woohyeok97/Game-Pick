
import styles from '../../styles/menuPopup.module.scss'
import { useDispatch } from 'react-redux';
// 커스텀훅
import useDeleteComment from '@/hook/comment/useDeleteComment';
// reducer
import { openSnackbar } from '@/redux/features/snackbarStateSlice';


export default function MenuPopup({ comment }) {
    const { removeComment } = useDeleteComment({ comment : comment })
    const dispatch = useDispatch()

    // 코멘트 삭제 핸들러
    const handleDeleteComment= async () => {
        if(!confirm('코멘트를 삭제할까요?')) return
        const result = await removeComment()
        dispatch(openSnackbar(result))
    }

    
    return (
        <ul className={ styles.menu_popup }>
            <li onClick={ handleDeleteComment }>삭제</li>
        </ul>
    )
}