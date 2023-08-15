'use client'
// 커스텀 훅
// 컴포넌트

// MUI
import Box from '@mui/material/Box'

export default function ContentGraph() {

    return (
        <Box sx={{ flexBasis : '50%', display : 'flex', justifyContent : 'center' }}>
            그래프 자리에용
            <button>click</button>
        </Box>
    )
}