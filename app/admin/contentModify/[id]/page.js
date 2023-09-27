'use client'
import { useDispatch } from 'react-redux';
// 커스텀훅
import useEditContent from '@/hook/content/useEditContent';
import useDeleteContent from '@/hook/content/useDeleteContent';
// reducer
import { openSnackbar } from '@/redux/features/snackbarStateSlice';
// MUI
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'


export default function ContentModify({ params }) {
    const dispatch = useDispatch()
    const { prevContent, editContent, updateContent } = useEditContent({ contentId : params.id })
    const { deleteContent } = useDeleteContent({ contentId : params.id })

    // 컨텐츠 수정 핸들러
    const handleEditSubmit = async () => {
        if(!confirm('컨텐츠를 수정하겠습니까?')) return
        const result = await updateContent()

        if(result.severity != 'success') {
            dispatch(openSnackbar(result)) 
            return
        }
        alert(result.message)
    }
 
    // 컨텐츠 삭제 핸들러
    const handleDeleteSubmit = async () => {
        if(!confirm('컨텐츠를 삭제하겠습니까?')) return
        const result = await deleteContent()
            
        if(result.severity != 'success') {
            dispatch(openSnackbar(result))
            return
        }
        alert(result.message)  
    }

    return (
        <Box sx={{ display : 'flex', flexDirection : 'column', padding : '0 30%', margin : 'auto 0'}}>
            <button onClick={()=>{ console.log(prevContent) }}>click</button>
            <Typography fontSize="2rem" sx={{ mb : '36px' }}>게임 컨텐츠 수정</Typography>
            <Box sx={{ display : 'flex', flexDirection : 'column' }}>
                <TextField label="타이틀" variant="outlined" name="title" value={ prevContent.title || '' } sx={{ mb: '36px' }}
                InputLabelProps={{ shrink : true }}
                onChange={ editContent } />

                <TextField label="출시일" variant="outlined" type="date" name="createDate" defaultValue={ prevContent.createDate || '' }  sx={{ mb: '36px' }}
                InputLabelProps={{ shrink : true }}
                onChange={ editContent } />

                <TextField label="이미지" variant="outlined" type="file" name="image" defaultValue={ prevContent.image || '' } sx={{ mb: '36px' }}
                InputLabelProps={{ shrink : true }}
                onChange={ editContent } />

                <TextField label="트레일러 url" variant="outlined" name="trailerURL" defaultValue={ prevContent.trailerURL || '' } sx={{ mb: '36px' }}
                InputLabelProps={{ shrink : true }}
                onChange={ editContent } />

                <TextField label="게임소개" name="description" defaultValue={ prevContent.description || '' } fullWidth multiline margin="normal" minRows={4} 
                onChange={ editContent }/>
            </Box>

            <Box sx={{ display : 'flex', justifyContent : 'flex-end' }}>
                <Button onClick={ handleEditSubmit }>
                컨텐츠 수정
                </Button>
                <Button  onClick={ handleDeleteSubmit } color="error" sx={{ ml : '12px' }}>
                    컨텐츠 삭제
                </Button>
            </Box>
        </Box>
    )
}