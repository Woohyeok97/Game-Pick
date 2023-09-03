import { useState } from 'react';
import { useSession } from 'next-auth/react';
// MUI
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// 컴포넌트
import CommentCard from '@/component/commentCard/commentCard';
import MenuPopup from './menuPopup';


// 컴포넌트에 비지니스 로직이 있어도됨 => 단, 전체가 아닌 비지니스 로직의 추상화
// 비지니스 로직이 ui상태를 직접 관리하지 말자
export default function CommentItem({ comment }) {
    const [ showMenu, setShowMenu ] = useState(false)
    const session = useSession()
    const isMenuRender =  session.data && (session.data.user.email == comment.userEmail || session.data.user.role == 'admin')

    const handleMenuSwitchChange = () => {
        setShowMenu((prev) => !prev)
    }

    return (
        <ListItem sx={{ display : 'flex', justifyContent : 'space-between', mb : '16px' }} alignItems="flex-start">
            <CommentCard comment={ comment }/>
            <Box>
                { isMenuRender &&
                <IconButton aria-label="menu" onClick={ handleMenuSwitchChange }>
                    <MoreHorizIcon/> 
                </IconButton> }
                { showMenu && <MenuPopup comment={ comment }/> }
            </Box>       
        </ListItem>
        )
}