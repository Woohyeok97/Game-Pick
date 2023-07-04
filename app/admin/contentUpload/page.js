'use client'
import styles from '../styles/contentUpload.module.scss'
// 커스텀훅
import useSetData from '@/hook/setData/useSetData'
import useUploadData from '@/hook/dataFetching/useUploadData'
// MUI
import Box from '@mui/material/Box'

export default function ContentUpload() {
    const { content, handleInputChange } = useSetData()
    const { uploadContent } = useUploadData()

    // handleInpuutChange(e)함수로 사용자가 입력한 데이터를 content에 저장함
    return (
        <section className={ styles.content_upload }>
            <Box sx={{ display : 'flex', flexDirection : 'column', width : '100%', height : '100%', border : '1px solid #555555' }}>
                
            </Box>
        </section>
    )
}
// return (
//     <section className="page_static">
//         <div className={ styles.upload_box }>
//             <div className={ styles.upload_item }>
//                 <h3>게임타이틀</h3>
//                 <input type="text" name="title" onChange={(e)=>{ handleInputChange(e) }}/>
//             </div>
//             <div className={ styles.upload_item }>
//                 <h3>정식 출시일</h3>
//                 <input type="date" name="releaseDate" onChange={(e)=>{ handleInputChange(e) }}/>
//             </div>
//             <div className={ styles.upload_item }>
//                 <h3>이미지</h3>
//                 <input type="file" name="image" onChange={(e)=>{ handleInputChange(e) }}/>
//             </div>
//             <div className={ styles.upload_item }>
//                 <h3>트레일러 URL</h3>
//                 <input type="text" name="trailerUrl" onChange={(e)=>{ handleInputChange(e) }}/>
//             </div>
//         </div>
//         <div>
//             <button onClick={()=>{ uploadContent(content) }}>컨텐츠 업로드</button>
//         </div>
//     </section>
// )