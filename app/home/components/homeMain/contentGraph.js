'use client'
import { useEffect, useState } from 'react'
import { TransitionGroup, CSSTransition } from "react-transition-group"
// 커스텀 훅
import useFetchContent from '@/hook/content/useFetchContent'
// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

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
    

    
    return (
        <Box sx={{ flexBasis : '50%', display : 'flex', alignItems : 'center', height : '100%' }}>
            <Box sx={{ display : 'flex', flexDirection : 'column', width : '100%', height : '50%' }}>
                <Box sx={{ flexBasis : '90%', display : 'flex', justifyContent : 'space-between', alignItems : 'flex-end' }}>
                    <Temp/>
                    <Temp/>
                    <Temp/>
                    <Temp/>
                </Box>
                <Box sx={{ flexBasis : '10%' }}>
                    <Typography variant="h3" textAlign="center">그래프에용~</Typography>
                </Box>
            </Box>
        </Box>
    )
}

function Temp() {
    const bar = '60%'
    const num = 1000
    const [inProp, setInProp] = useState(false);

    useEffect(() => {
        setInProp(true);
    }, []);
 
    return (
        
        <CSSTransition in={inProp} timeout={1000} classNames="bar-animation">
            <Box sx={{ height: bar, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <Typography textAlign="center">{num}</Typography>
                <Box sx={{ bgcolor: 'orange', height: '100%', border: '5px solid darkOrange' }}>
                    난 그래프
                </Box>
            </Box>
        </CSSTransition>
    );
}