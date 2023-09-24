'use client'
import { useDispatch } from 'react-redux';
// 커스텀 훅
import useCreateContent from '@/hook/content/useCreateContent';
// reducer
import { openSnackbar } from '@/redux/features/snackbarStateSlice';
// MUI
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'


export default function Admin() {
    const { handleContentChange, createContent } = useCreateContent()
    const dispatch = useDispatch()

    // 컨텐츠 업로드 핸들러
    const handleCreateSubmit = async () => {        
        if(!confirm('컨텐츠를 업로드 할까요?')) return
        const result = await createContent()

        if(result.severity != 'success') {
            dispatch(openSnackbar(result))
            return
        }
        alert(result.message)
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