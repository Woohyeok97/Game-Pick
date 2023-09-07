'use client'
import styles from './comment.module.scss'
import { useEffect, useState } from 'react'
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

    const { requestfetchComment, setToCommentList, sortOption, setSortOption } = useFetchComment()
    const [ hasNext, setHasNext ] = useState(false)

    useEffect(()=>{
        loadComment()
    }, [sortOption])


    async function loadComment() {
        const fetched = await requestfetchComment(contentId, 2)
    
        if(fetched.result.length) {
            setToCommentList(fetched.result)
            setHasNext(fetched.hasNext)
        }
    }

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
