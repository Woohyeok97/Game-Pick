import styles from '../../styles/menuPopup.module.scss'
// 커스텀훅
import useDeleteComment from '@/hook/comment/useDeleteComment';


export default function MenuPopup({ comment }) {
    const { deleteToCommentList } = useDeleteComment({ comment : comment })

    const handleDeleteComment= async () => {
        if(!confirm('코멘트를 삭제할까요?')) return
        await deleteToCommentList()
    }

    return (
        <ul className={ styles.menu_popup }>
            <li onClick={ handleDeleteComment }>삭제</li>
        </ul>
    )
}