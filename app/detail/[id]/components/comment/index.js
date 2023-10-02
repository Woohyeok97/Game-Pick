'use client'
import styles from '../../styles/comment/comment.module.scss'
import { useSelector } from 'react-redux'
// 커스텀 훅
import useFetchComment from '@/hook/comment/useFetchComment'
// MUI
import Button from '@mui/material/Button'
import List from '@mui/material/List'
// 컴포넌트
import CommentItem from './commentItem'

// 내일의 거나우 에게
// 1. 코멘트카드 재사용 가능하게 해볼까? 피드백 버튼만 종류별로 갈아 끼울수있게
// 2. 그리고 코멘트 카드 레이아웃 잡아보장(mui ㄴㄴ)
// 3. 코멘트 작성, 코멘트네비도 추가하기~
// 4. 마지막으로 컨텐츠 추천수 표시 & 기능 활성화~
// * 배경색이랑 폰트색 '서핏' 참고하기~




export default function Comment({ content }) {
    const commentList = useSelector((state) => state.commentList)

    const { setToCommentList, hasNext, setSortOption } = useFetchComment({
        contentId : content._id,
        limit : 2,
    })
   
    return (
        <div className={ styles.comment }>
            
            <ul className={ styles.comment_list }>
            { commentList.length 
            ? commentList.map((item) => <CommentItem key={item._id} comment={ item }/>)
            : <div>아직 코멘트가 없습니다.</div> }
            </ul>
        </div>
    )
    
    // return (
    //     <section className='page_static'>
    //         <CommentNav contentTitle={ contentTitle } setSortOption={ setSortOption }/> 
    //         <CommentWrite contentId={ contentId }/>
    //         <List>
    //             { commentList.length
    //             ? commentList.map((item) => <CommentItem key={item._id} comment={ item }/>)
    //             : <div>아직 코멘트가 없어요~</div> }
    //         </List> 
    //         { hasNext && <Button onClick={ setToCommentList }>더보기</Button> }
    //     </section>
    // )
}
