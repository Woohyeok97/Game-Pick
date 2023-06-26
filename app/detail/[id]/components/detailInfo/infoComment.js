'use client'
import Link from 'next/link'
import styles from '../../styles/detailInfo/infoComment.module.scss'
// 컴포넌트
import CommentItem from './commentItem'
// MUI
import Fab from '@mui/material/Fab';

export default function InfoComment({ content }) {
    
    const array = [1, 2, 3, 4]

    return (
        <div className={ styles.info_comment }>
            <div className={ styles.title }>
                <h4>유저 코멘트</h4>
            </div>
            <div className={ styles.comment_container }>
                <div className={ styles.comment_box }>
                { array.map((a, i) => <CommentItem key={i}/>) }
                </div>
                <div className={ styles.comment_more }>
                    <Fab variant="extended">
                        <Link href={`/comment/${ content._id }`}>유저코멘트 더보기</Link>
                    </Fab>   
                </div>
            </div>
        </div>
    )
}

