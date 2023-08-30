'use client'
import { useContext, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { CommentContext } from './layout'
// 컴포넌트
import CommentNav from './components/commentNav'
import CommentWrite from './components/commentWrite'
import CommentItem from './components/commentItem'
// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import List from '@mui/material/List'


export default function Comment({ params, searchParams }) {
    const { comment, fetchComment, nextComment, fetchOption } = useContext(CommentContext)
    const [ isLoading, setIsLoading ] = useState(true)
    const session = useSession()

    const contentId = params.id
    const contentTitle = searchParams.title

    const setComments = async () => {
        await fetchComment(contentId, 2)
        setIsLoading(false)
    }

    useEffect(()=>{
        setComments()
    }, [fetchOption])


    return (
        <Box sx={{ display : 'flex', flexDirection : 'column', padding : '5% 20%' }}>
            <CommentNav contentTitle={ contentTitle } /> 
            <CommentWrite contentId={ contentId } />

            { !isLoading &&
            <List>
                { comment.length
                ? comment.map((item)=> <CommentItem key={item._id} comment={ item } session={ session } />)
                : <div>아직 코멘트가 없어요~</div> }
            </List> }

            { nextComment && <Button onClick={()=>{ fetchComment(contentId, 2) }}>더보기</Button> }
        </Box>
    )
}