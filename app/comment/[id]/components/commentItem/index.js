'use client'
import styles from '../../styles/commentMain/commentItem.module.scss'
import { useState } from 'react';
// MUI
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
// 컴포넌트
import CommentMenu from './commentMenu';


export default function CommentItem({ comment }) {
    const [ menuSwitch, setMenuSwitch ] = useState(false)

    return (
        <ListItem className={ styles.comment_item } alignItems="flex-start">
            <div className={ styles.comment }>
                {/* 사용자 아이콘 */}
                <ListItemAvatar>
                    <Avatar src={ comment.userImage }/>
                </ListItemAvatar>
                {/* 사용자 이름 & 코멘트 내용 */}
                <ListItemText primary={ comment.userName } secondary={ comment.comment } />
                {/* 좋아요 & 싫어요 버튼 */}
                <div className={ styles.btn_box }>
                    <IconButton aria-label="like" size="small">
                        <ThumbUpIcon fontSize="inherit"/>
                        <p>{ comment.like }</p>
                    </IconButton>
                    <IconButton aria-label="unlike" size="small">
                        <ThumbDownIcon fontSize="inherit"/>
                        <p>{ comment.unlike }</p>
                    </IconButton>
                </div>
            </div>

            {/* 코멘트 버튼 */}
            <div className={ styles.menu }>
                {/* 코멘트 메뉴 */}
                { menuSwitch ? <CommentMenu/> : null }
                <IconButton aria-label="menu" onClick={()=>{ setMenuSwitch(!menuSwitch) }}>
                    <MoreHorizIcon/>
                </IconButton>
            </div>
        </ListItem>
        )
}