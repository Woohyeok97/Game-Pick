'use client'
import { useSession } from 'next-auth/react';
// 커스텀 훅
import useCreateContent from '@/hook임시/content/useCreateContent';
// MUI
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import  Button  from '@mui/material/Button'


export default function Admin() {
    const { content, handleChangeContent, createContent } = useCreateContent()
    const session = useSession()

    const handleCreateSubmit = async () => {
        const { title, createDate, image, trailerURL } = content;

        if(!session.data || session.data.user.role != 'admin') {
            console.log('관리자 권한이 없습니다.')
            return
        }
        
        if(!title || !createDate || !image || !trailerURL) {
            console.log('컨텐츠 내용을 확인해주세요.')
            return
        }

        if(confirm('컨텐츠를 업로드 할까요?')) {
            await createContent()
        }
    }
    

    return (
        <Box sx={{ display : 'flex', flexDirection : 'column', padding : '5% 20%' }}>
            <TextField label="타이틀" variant="standard" name="title" 
            onChange={ handleChangeContent }/>
            <TextField label="출시일" variant="standard" type="date" name="createDate" 
            onChange={ handleChangeContent }/>
            <TextField label="이미지" variant="standard" type="file" name="image" 
            onChange={ handleChangeContent }/>
            <TextField label="트레일러 url" variant="standard" name="trailerURL" 
            onChange={ handleChangeContent }/>
            <Button onClick={ handleCreateSubmit }>컨텐츠 생성</Button>
        </Box>
    )
}