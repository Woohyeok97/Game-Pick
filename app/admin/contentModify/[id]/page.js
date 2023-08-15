'use client'
// 커스텀훅
import useEditContent from '@/hook/content/useEditContent';
import useDeleteContent from '@/hook/content/useDeleteContent';
// MUI
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'


export default function ContentModify({ params }) {
    const { prevContent, handleChangeContent, editContent } = useEditContent(params.id)
    const { deleteContent } = useDeleteContent()

    // 컨텐츠 수정 핸들러 함수
    const handleEditSubmit = async () => {
        await editContent()
    }

    // 컨텐츠 삭제 핸들러 함수
    const handleDeleteSubmit = async () => {
        if(confirm('컨텐츠를 삭제하겠습니까?')) {
            await deleteContent(params.id)
            alert('컨텐츠 삭제완료!')
        }
    }

    return (
        <Box sx={{ display : 'flex', flexDirection : 'column', padding : '5% 20%' }}>
            <TextField label="타이틀" variant="standard" name="title" defaultValue={ prevContent.title }
            onChange={ handleChangeContent } />

            <TextField label="출시일" variant="standard" type="date" name="createDate" defaultValue={ prevContent.createDate }
            onChange={ handleChangeContent } />

            <TextField label="이미지" variant="standard" type="file" name="image" defaultValue={ prevContent.image }
            onChange={ handleChangeContent } />

            <TextField label="트레일러 url" variant="standard" name="trailerURL" defaultValue={ prevContent.trailerURL }
            onChange={ handleChangeContent } />


            <Button onClick={ handleEditSubmit }>
                컨텐츠 수정
            </Button>

            <Button onClick={ handleDeleteSubmit }>
                컨텐츠 삭제
            </Button>
        </Box>
    )
}