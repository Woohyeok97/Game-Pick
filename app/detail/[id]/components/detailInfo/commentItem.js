import styles from '../../styles/detailInfo/commentItem.module.scss'

export default function CommentItem() {
    return (
        <div className={ styles.comment_item }>
            <div className={ styles.user_name }>
                <p>고나우</p>
            </div>
            <div className={ styles.comment }>

            </div>
        </div>
    )
}