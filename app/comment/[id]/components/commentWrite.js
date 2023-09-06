// import styles from '../styles/commentWrite.module.scss'
// import { useSession } from 'next-auth/react';
// // 커스텀훅
// import useCreateComment from '@/hook/comment/useCreateComment';
// // MUI
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
// import { useDispatch, useSelector } from 'react-redux';
// import { setCommentList } from '@/redux/features/commentListSlice';


// export default function CommentWrite({ contentId }) {
//     const { textValue, setTextValue, createComment, addComment } = useCreateComment()
//     const commentList = useSelector((state) => state.commentList)
//     const dispatch = useDispatch()
//     const session = useSession()
    
//     const handleTextValueChange = (e) => {
//         setTextValue(e.target.value)
//     }
//     const handleClick = async () => {
//         const insertedId = await createComment(contentId, textValue)
//         if(insertedId) {
//             const result = addComment(insertedId, session, textValue)
//             dispatch(setCommentList([ result, ...commentList ]))
//             setTextValue('')
//         }
//     }
//     console.log('gd')


//     if(!session.data) return (
//         <div className={ styles.comment_write }>
//             <TextField multiline fullWidth placeholder="로그인후, 이용해주세요!" margin="normal" minRows={4} disabled/>
//         </div>
//     )

//     return (
//        <div className={ styles.comment_write }>
//             <TextField value={ textValue } multiline fullWidth placeholder="코멘트를 남겨주세요!" margin="normal" minRows={4}
//             onChange={ handleTextValueChange }/>

//             <Button variant="contained" endIcon={<EmojiEmotionsIcon/>} size="large"
//             onClick={ handleClick }>COMMENT!</Button>
//        </div>
//     )
// }
import styles from '../styles/commentWrite.module.scss'
import { useSession } from 'next-auth/react';
// 커스텀훅
import useCreateComment from '@/hook/comment/useCreateComment';
// MUI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';


export default function CommentWrite({ contentId }) {
    const { textValue, setTextValue, requestCreateComment, addToCommentList } = useCreateComment()
    const session = useSession()
    
    const handleTextValueChange = (e) => {
        setTextValue(e.target.value)
    }

    const handleCreateComment = async () => {
        if(!textValue) {
            console.log('코멘트 내용을 확인해 주세요!')
            return
        }
        if(!session.data) {
            console.log('로그인후, 이용해주세요!')
            return
        }

        const insertedData = await requestCreateComment(contentId)

        if(insertedData) {
            addToCommentList(insertedData)
        }
    }
 

    if(!session.data) return (
        <div className={ styles.comment_write }>
            <TextField multiline fullWidth placeholder="로그인후, 이용해주세요!" margin="normal" minRows={4} disabled/>
        </div>
    )

    return (
       <div className={ styles.comment_write }>
            <TextField value={ textValue } multiline fullWidth placeholder="코멘트를 남겨주세요!" margin="normal" minRows={4}
            onChange={ handleTextValueChange }/>

            <Button variant="contained" endIcon={<EmojiEmotionsIcon/>} size="large"
            onClick={ handleCreateComment }>COMMENT!</Button>
       </div>
    )
}



