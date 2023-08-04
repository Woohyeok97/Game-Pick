'use client'
// 커스텀 훅
import useGetData from '@/hook/dataFetching/useGetData'
// 컴포넌트

// MUI
import Box from '@mui/material/Box'

export default function ContentGraph() {
    const { rankedContent, getRankedContent } = useGetData()

    return (
        <Box sx={{ flexBasis : '50%', display : 'flex', justifyContent : 'center' }}>
            그래프 자리에용
            <button onClick={()=>{ getRankedContent() }}>click</button>
        </Box>
    )
}