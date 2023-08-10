import { useSession } from 'next-auth/react';
// 커스텀훅
import useCreateComment from '@/hook임시/comment/useCreateComment';
// MUI
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useContext } from 'react';
import { CommentContext } from '../layout';
// 컴포넌트


export default function CommentWrite({ contentId }) {
    const { setComment, setTempCommentId } = useContext(CommentContext)
    const { commentText, setCommentText, handleCommentChange, createComment } = useCreateComment()
    const session = useSession()
    
    const handleCreateSubmit = async () => {

        if(!commentText) {
            console.log('코멘트 내용을 확인해 주세요!')
            return
        }
        if(!session) {
            console.log('로그인후, 이용해주세요!')
            return
        }

        const tempCommentId = await createComment(contentId)
        
        const tempComment = {
            _id : tempCommentId,
            userName : session.data.user.name,
            userImage : session.data.user.image,
            userEmail : session.data.user.email,
            text : commentText,
            like : 0,
            dislike : 0,
            createComment : new Date(),
        }
        setComment((prev) => [ tempComment, ...prev])
        setTempCommentId ((prev) => [...prev, tempCommentId])
        setCommentText('')
    }

    if(!session.data) return (
        <Box sx={{ display : 'flex', flexDirection : 'column', alignItems : 'flex-end' }}>
            <TextField name="comment" multiline fullWidth placeholder="로그인후, 이용해주세요!" margin="normal" minRows={4} disabled/>
        </Box>
    )

    return (
       <Box sx={{ display : 'flex', flexDirection : 'column', alignItems : 'flex-end' }}>
            <TextField name="comment" multiline fullWidth placeholder="코멘트를 남겨주세요!" margin="normal" minRows={4}
             onChange={(e)=>{ handleCommentChange(e) }} value={ commentText }/>
            <Box>
               <Button onClick={ handleCreateSubmit } variant="contained" endIcon={<EmojiEmotionsIcon />} size="large">COMMENT!</Button>
            </Box>
       </Box>
    )
}

// export default function CommentWrite({ contentId, setRefreshFeedback }) {
//     const { content, setContent, handleInputChange } = useSetData()
//     const { uploadComment } = useUploadData()
//     const { open, snackbarKey, handleSnackbarOpne, handleSnackbarClose } = useSnackbar()
//     // 클라이언트에서 세션데이터는 오직, 로그인 여부만 확인
//     const session = useSession();

//     const handleWriteSubmit = async () => {
//         await uploadComment(content, contentId)      
//         setRefreshFeedback(true)
//         // 코멘트 업로드후, TextFiled의 글자가 지워질수 있게 value를 ''로 바꿔줌
//         setContent({...content, comment : ''})
//         handleSnackbarOpne()
//     }
    
//     // 로그인
//     if(session.data) return (
//         <div className={ styles.comment_write }>
//             <TextField onChange={(e)=>{ handleInputChange(e) }} name="comment" multiline fullWidth placeholder="코멘트를 남겨주세요!" margin="normal" minRows={4} value={content.comment}/>
//             <div className={ styles.btn_box }>
//                 <Button className={ styles.btn } onClick={()=>{ handleWriteSubmit() }} variant="contained" endIcon={<EmojiEmotionsIcon />} size="large">COMMENT!</Button>
//             </div>
//             <AlertSnackbar open={open} snackbarKey={snackbarKey} handleSnackbarClose={handleSnackbarClose}>
//                 코멘트 작성완료!
//             </AlertSnackbar>
            
//         </div>
//     )
//     // 비로그인
//     if(!session.data) return (
//         <div className={ styles.comment_write }>
//             <TextField name="comment" multiline fullWidth placeholder="로그인후, 이용해주세요!" margin="normal" minRows={4} disabled/>
//         </div>
//     )
// }