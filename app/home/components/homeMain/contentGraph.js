'use client'
import { useEffect, useState } from 'react'
// 커스텀 훅
import useFetchContent from '@/hook/content/useFetchContent'
// MUI
import Box from '@mui/material/Box'


export default function ContentGraph() {
    const { fetchContentList } = useFetchContent()
    const [ contentList, setContentList ] = useState([])

    useEffect(()=>{
        const getContentList = async () => {
            const result = await fetchContentList('like', 2)
            setContentList(result)
        }

        getContentList()
    }, [])

    console.log(contentList)
    
    return (
        <Box sx={{ flexBasis : '50%', display : 'flex', justifyContent : 'center' }}>
            그래프 자리에용
        </Box>
    )
}