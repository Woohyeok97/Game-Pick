'use client'
import styles from '../../styles/comment.module.scss'
import { useSelector } from 'react-redux'
// 커스텀 훅
import useFetchComment from '@/hook/comment/useFetchComment'
// 컴포넌트
import CommentItem from './commentItem'
import CommentWrite from './commentWrite'
import Selector from './selector'


export default function Comment({ content }) {
    const commentList = useSelector((state) => state.commentList)

    const { setToCommentList, hasNext, setSortOption } = useFetchComment({
        contentId : content._id,
        limit : 2,
    })

    return (
        <div className={ styles.comment }>
            <div className={ styles.comment_header }>
                <p>유저들 코멘트</p>
                <Selector setSortOption={ setSortOption }/>
            </div>

            <CommentWrite contentId={ content._id }/>

            <ul className={ styles.comment_list }>
                { commentList.length 
                ? commentList.map((item) => <CommentItem key={item._id} comment={ item }/>)
                : <div className={ styles.is_comment }>아직 코멘트가 없습니다.</div> }  
            </ul>
            
            { hasNext && <button onClick={ setToCommentList } className={ styles.comment_more }>코멘트 더보기</button> }
        </div>
    )
}
