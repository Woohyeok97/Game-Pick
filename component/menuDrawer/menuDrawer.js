'use client'
import styles from './menuDrawer.module.scss'
import Link from 'next/link'
import { signIn, signOut } from 'next-auth/react'
// MUI
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
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';

export default function MenuDrawer({ session }) {

    const handleSign = () => {
        session ? signOut() : signIn()
    }

    return (
        <div className={ styles.menu_drawer } >
            {/* 메뉴 리스트 */}
            <div>
                <List sx={{ padding : '0' }}>

                    {/* 로그인 & 로그아웃 */}
                    <ListItem disablePadding>
                        <ListItemButton sx={{ padding : '16px' }}>
                            <ListItemIcon>
                                { session ? <LogoutIcon sx={{ color : '#FFFFFF' }}/> : <LoginIcon sx={{ color : '#FFFFFF' }}/> }
                            </ListItemIcon>
                            <ListItemText 
                                primary={ session ? "로그아웃" : "소셜 로그인" }
                                primaryTypographyProps={{ fontSize : '1.2rem' }}
                                onClick={ handleSign }/>
                        </ListItemButton>
                    </ListItem>
                    <Divider/>

                    {/* main 바로가기 */}
                    <ListItem disablePadding>
                        <Link href="/" className={ styles.drawer_link }>
                            <ListItemButton sx={{ padding : '16px' }}>
                                <ListItemIcon>
                                    <HomeIcon sx={{ color : '#FFFFFF' }}/>
                                </ListItemIcon>
                                <ListItemText primary="Main" primaryTypographyProps={{ fontSize : '1.2rem' }}/>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    {/* list 바로가기 */}
                    <ListItem disablePadding>
                        <Link href="/list" className={ styles.drawer_link }>
                            <ListItemButton sx={{ padding : '16px' }}>
                                <ListItemIcon>
                                    <VideogameAssetIcon sx={{ color : '#FFFFFF' }}/>
                                </ListItemIcon>
                                <ListItemText primary="List" primaryTypographyProps={{ fontSize : '1.2rem' }}/>
                        </ListItemButton>
                        </Link>
                    </ListItem>
                </List>

                {/* admin 메뉴 */}
                { session && session.user.role == 'admin' &&
                <List sx={{ padding : '0' }}>
                    <p className={ styles.admin }>관리자 메뉴</p>
                    <Divider/>
                    <ListItem disablePadding>
                        <Link href="/admin" className={ styles.drawer_link }>
                            <ListItemButton sx={{ padding : '16px' }}>
                                <ListItemIcon>
                                    <LocalPoliceIcon color="success"/>
                                </ListItemIcon>
                                <ListItemText primary="Upload Content" primaryTypographyProps={{ color : "#2e7d32", fontSize : '1.2rem' }}/>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                </List> }
            </div>

            {/* Github 링크 */}
            <p className={ styles.github }>
                <Link href="https://github.com/Woohyeok97/project" className={ styles.drawer_link }>Github</Link>
            </p>
        </div>
    )
    // return (
    //     <Box onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} 
    //         sx={{ display : 'flex', flexDirection : 'column', justifyContent : 'space-between', bgcolor : '#555555', height : '100%', color : '#FFFFFF', width : '20vw'}}>
            
    //         {/* 메뉴 리스트 */}
    //         <Box>
    //             <List sx={{ padding : '0' }}>

    //                 {/* 로그인 & 로그아웃 */}
    //                 <ListItem disablePadding>
    //                     <ListItemButton sx={{ padding : '16px' }}>
    //                         <ListItemIcon>
    //                             { session ? <LogoutIcon sx={{ color : '#FFFFFF' }}/> : <LoginIcon sx={{ color : '#FFFFFF' }}/> }
    //                         </ListItemIcon>
    //                         <ListItemText 
    //                             primary={ session ? "로그아웃" : "소셜 로그인" }
    //                             primaryTypographyProps={{ fontSize : '1.2rem' }}
    //                             onClick={ session ? ()=>{ signOut() } : ()=>{ signIn() }}/>
    //                     </ListItemButton>
    //                 </ListItem>
    //                 <Divider/>

    //                 {/* main 바로가기 */}
    //                 <ListItem disablePadding>
    //                     <Link href="/" className={ styles.drawer_link }>
    //                         <ListItemButton sx={{ padding : '16px' }}>
    //                             <ListItemIcon>
    //                                 <HomeIcon sx={{ color : '#FFFFFF' }}/>
    //                             </ListItemIcon>
    //                             <ListItemText primary="Main" primaryTypographyProps={{ fontSize : '1.2rem' }}/>
    //                         </ListItemButton>
    //                     </Link>
    //                 </ListItem>
    //                 {/* list 바로가기 */}
    //                 <ListItem disablePadding>
    //                     <Link href="/list" className={ styles.drawer_link }>
    //                         <ListItemButton sx={{ padding : '16px' }}>
    //                             <ListItemIcon>
    //                                 <VideogameAssetIcon sx={{ color : '#FFFFFF' }}/>
    //                             </ListItemIcon>
    //                             <ListItemText primary="List" primaryTypographyProps={{ fontSize : '1.2rem' }}/>
    //                     </ListItemButton>
    //                     </Link>
    //                 </ListItem>
    //             </List>

    //             {/* admin 메뉴 */}
    //             { session && session.user.role == 'admin' &&
    //             <List sx={{ padding : '0' }}>
    //                 <Typography textAlign="center" color="#2e7d32" fontWeight="400" fontSize="1.2rem" mb={2}>Admin Menu</Typography>
    //                 <Divider/>
    //                 <ListItem disablePadding>
    //                     <Link href="/admin" className={ styles.drawer_link }>
    //                         <ListItemButton sx={{ padding : '16px' }}>
    //                             <ListItemIcon>
    //                                 <LocalPoliceIcon color="success"/>
    //                             </ListItemIcon>
    //                             <ListItemText primary="Upload Content" primaryTypographyProps={{ color : "#2e7d32", fontSize : '1.2rem' }}/>
    //                         </ListItemButton>
    //                     </Link>
    //                 </ListItem>
    //             </List> }
    //         </Box>

    //         {/* Github 링크 */}
    //         <Typography textAlign="center" fontWeight="800" fontSize="large" mb={5}>
    //             <Link href="https://github.com/Woohyeok97/project" className={ styles.drawer_link }>Github</Link>
    //         </Typography>
    //     </Box>
    // )
}
