'use client'
import styles from './comment.module.scss'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
// 커스텀 훅
import useFetchComment from '@/hook/comment/useFetchComment'
// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
// 컴포넌트
import CommentNav from './components/commentNav'
import CommentWrite from './components/commentWrite'
import CommentItem from './components/commentItem'
import formatDate from '@/util/formatDate'

// 1. 부모는 자식 컴포넌트한테 의지하지않는다.
// 2. 의존성이 안중요할때(전역상태관리등) 컴포넌트 자치구역화

export default function Comment({ params, searchParams }) {
    const contentId = params.id
    const contentTitle = searchParams.title

    const comment = useSelector((state) => state.comment)
    const { loadComment, hasNext } = useFetchComment(contentId, 2)
    const session = useSession()

    console.log('gd')
    return (
        <div className={ styles.comment }>
            <CommentNav contentTitle={ contentTitle }/>
            <CommentWrite contentId={ contentId } />
            <List>
                { comment.length
                ? comment.map((item)=> <CommentItem key={item._id} comment={ item } session={ session } />)
                : <div>아직 코멘트가 없어요~</div> }
            </List> 

            { hasNext && <Button onClick={ loadComment }>더보기</Button> }
        </div>
    )
}
