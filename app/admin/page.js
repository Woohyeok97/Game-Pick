'use client'
import { useSession } from 'next-auth/react';
// 커스텀 훅
import useCreateContent from '@/hook/content/useCreateContent';
// MUI
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export default function Admin() {
    const { content, handleContentChange, createContent, uploadS3 } = useCreateContent()
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
            const result = await uploadS3()
            if(result) {
                await createContent()
            }
        }
    }


    return (
        <Box sx={{ display : 'flex', flexDirection : 'column', padding : '0 30%', margin : 'auto 0'}}>
            <Typography fontSize="2rem" sx={{ mb : '12px' }}>게임 컨텐츠 업로드</Typography>
            <Box sx={{ display : 'flex', flexDirection : 'column' }}>
                <TextField label="타이틀" variant="standard" name="title" sx={{ mb: '36px' }}
                onChange={ handleContentChange }/>
                <TextField label="출시일" variant="standard" type="date" name="createDate" sx={{ mb: '36px' }} InputLabelProps={{ shrink: true }}
                onChange={ handleContentChange }/>
                <TextField label="이미지" variant="standard" type="file" name="image" sx={{ mb: '36px' }} InputLabelProps={{ shrink: true }}
                onChange={ handleContentChange }/>
                <TextField label="트레일러 url" variant="standard" name="trailerURL" sx={{ mb: '36px' }}
                onChange={ handleContentChange }/>
            </Box>

            <Box sx={{ display : 'flex', justifyContent : 'flex-end' }}>
                <Button onClick={ handleCreateSubmit }>컨텐츠 생성</Button>
            </Box>
        </Box>
    )
}