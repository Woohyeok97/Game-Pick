'use client'
import styles from './comment.module.scss'
import { useSelector } from 'react-redux'
// 커스텀 훅
import useFetchComment from '@/hook/comment/useFetchComment'
// MUI
import Button from '@mui/material/Button'
import List from '@mui/material/List'
// 컴포넌트
import CommentNav from './components/commentNav'
import CommentWrite from './components/commentWrite'
import CommentItem from './components/commentItem'


export default function Comment({ params, searchParams }) {
    const contentId = params.id
    const contentTitle = searchParams.title
    const commentList = useSelector((state) => state.commentList)
    const { loadComment, hasNext, setSortOption } = useFetchComment(contentId, 2)

    console.log('렌더링!')
    // 1. 컴포넌트끼리의 의존성
    // 2. 한가지의 역할에 집중하는지
    // 3. 한가지의 책임을 맡는지
    // 4. 핸들러는 주체에서 정의하기
    // 4-1. 핸들러는 ui를 조작할수도있고, 비지니스 로직 조각을 모아 실행할수도있다.

    return (
        <div className={ styles.comment }>
            <CommentNav contentTitle={ contentTitle } setSortOption={ setSortOption }/> 
            <CommentWrite contentId={ contentId } />
            <List>
                { commentList.length
                ? commentList.map((item)=> <CommentItem key={item._id} comment={ item } />)
                : <div>아직 코멘트가 없어요~</div> }
            </List> 

            { hasNext && <Button onClick={ loadComment }>더보기</Button> }
        </div>
    )
}
