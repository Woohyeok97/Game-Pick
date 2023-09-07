import styles from '../../styles/menuPopup.module.scss'
// 커스텀훅
import useDeleteComment from '@/hook/comment/useDeleteComment';


export default function MenuPopup({ comment }) {
    const { requestDeleteComment, deleteToCommentList } = useDeleteComment()

    const handleDeleteComment= async () => {
        if(!confirm('코멘트를 삭제할까요?')) return
        
        const deletedCommentId = await requestDeleteComment(comment)
        
        if(deletedCommentId) {
            deleteToCommentList(deletedCommentId)
        }
    }

    return (
        <ul className={ styles.menu_popup }>
            <li onClick={ handleDeleteComment }>삭제</li>
        </ul>
    )
}