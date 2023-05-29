import styles from '../../styles/commentItem.module.scss'

export default function CommentItem({ title, comment }) {
    return (
        <div className={ styles.comment_item }>
            <h1>{ title }</h1>
            <h3>날짜 : 2023년 5월 29일</h3>
            <h3>작성자 : 고나우</h3>
            <p>{ comment }</p>
        </div>
    )
}