'use client'
import styles from './menu.module.scss'
import Link from 'next/link'
import { signIn, signOut } from 'next-auth/react'
// MUI
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
// MUI icons
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';

export default function Menu({ session, toggleDrawer }) {

    return (
        <Box onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} 
            sx={{ display : 'flex', flexDirection : 'column', justifyContent : 'space-between', bgcolor : '#555555', height : '100%', color : '#FFFFFF', width : '20vw'}}>
            <List>
                {/* 로그인 & 로그아웃 */}
                <ListItem disablePadding>
                    <ListItemButton sx={{ padding : '16px' }}>
                        <ListItemIcon>
                            { session ? <LogoutIcon sx={{ color : '#FFFFFF' }}/> : <LoginIcon sx={{ color : '#FFFFFF' }}/> }
                        </ListItemIcon>
                        <ListItemText primary={ session ? "로그아웃" : "소셜 로그인" } onClick={ session ? ()=>{ signOut() } : ()=>{ signIn() }}/>
                    </ListItemButton>
                </ListItem>
                <Divider/>

                <ListItem disablePadding>
                    <Link href="/" className={ styles.drawer_link }>
                        <ListItemButton sx={{ padding : '16px' }}>
                            <ListItemIcon>
                                <HomeIcon sx={{ color : '#FFFFFF' }}/>
                            </ListItemIcon>
                            <ListItemText primary="Main"/>
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link href="/list" className={ styles.drawer_link }>
                        <ListItemButton sx={{ padding : '16px' }}>
                            <ListItemIcon>
                                <VideogameAssetIcon sx={{ color : '#FFFFFF' }}/>
                            </ListItemIcon>
                            <ListItemText primary="List"/>
                    </ListItemButton>
                    </Link>
                </ListItem>

                {/* 관리자 페이지 */}
                { session && session.user.role == 'admin'
                ? <ListItem disablePadding>
                    <Link href="/admin" className={ styles.drawer_link }>
                        <ListItemButton sx={{ padding : '16px' }}>
                            <ListItemIcon>
                                <LocalPoliceIcon color="success"/>
                            </ListItemIcon>
                            <ListItemText primary="Admin"/>
                        </ListItemButton>
                    </Link>
                </ListItem> : null }
            </List>

            {/* Github 링크 */}
            <Typography textAlign="center" fontWeight="800" fontSize="large" mb={5}>
                <Link href="https://github.com/Woohyeok97/project" className={ styles.drawer_link }>Github</Link>
            </Typography>
        </Box>
    )
}