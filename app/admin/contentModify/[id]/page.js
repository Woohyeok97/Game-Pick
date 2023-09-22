'use client'
// 커스텀훅
import useEditContent from '@/hook/content/useEditContent';
import useDeleteContent from '@/hook/content/useDeleteContent';
// MUI
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'


export default function ContentModify({ params }) {
    const { prevContent, handleChangeContent, editContent, uploadS3 } = useEditContent(params.id)
    const { deleteContent } = useDeleteContent()

    // 컨텐츠 수정 핸들러 함수
    const handleEditSubmit = async () => {
        const result = await uploadS3()
        if(result) {
            await editContent()
        }
    }
    console.log(prevContent)
    // 컨텐츠 삭제 핸들러 함수
    const handleDeleteSubmit = async () => {
        if(confirm('컨텐츠를 삭제하겠습니까?')) {
            await deleteContent(params.id)
            alert('컨텐츠 삭제완료!')
        }
    }

    return (
        <Box sx={{ display : 'flex', flexDirection : 'column', padding : '0 30%', margin : 'auto 0'}}>
            <Typography fontSize="2rem" sx={{ mb : '36px' }}>게임 컨텐츠 수정</Typography>

            <Box sx={{ display : 'flex', flexDirection : 'column' }}>
                <TextField label="타이틀" variant="outlined" name="title" defaultValue={ prevContent.title } sx={{ mb: '36px' }}
                InputLabelProps={{ shrink : true }}
                onChange={ handleChangeContent } />

                <TextField label="출시일" variant="outlined" type="date" name="createDate" defaultValue={ prevContent.createDate }  sx={{ mb: '36px' }}
                InputLabelProps={{ shrink : true }}
                onChange={ handleChangeContent } />

                <TextField label="이미지" variant="outlined" type="file" name="image" defaultValue={ prevContent.image } sx={{ mb: '36px' }}
                InputLabelProps={{ shrink : true }}
                onChange={ handleChangeContent } />

                <TextField label="트레일러 url" variant="outlined" name="trailerURL" defaultValue={ prevContent.trailerURL } sx={{ mb: '36px' }}
                InputLabelProps={{ shrink : true }}
                onChange={ handleChangeContent } />
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