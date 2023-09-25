'use client'
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

    const { setToCommentList, hasNext, setSortOption } = useFetchComment({
        contentId : contentId,
        limit : 2,
    })
    
    return (
        <section className='page_static'>
            <CommentNav contentTitle={ contentTitle } setSortOption={ setSortOption }/> 
            <CommentWrite contentId={ contentId }/>
            <List>
                { commentList.length
                ? commentList.map((item) => <CommentItem key={item._id} comment={ item }/>)
                : <div>아직 코멘트가 없어요~</div> }
            </List> 
            { hasNext && <Button onClick={ setToCommentList }>더보기</Button> }
        </section>
    )
}
