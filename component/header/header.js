'use client'
import styles from '../header/header.module.scss'
import Link from 'next/link';
import { useState } from 'react';
// MUI
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Drawer from '@mui/material/Drawer'
// 컴포넌트
import MenuDrawer from '../menuDrawer/menuDrawer';

export default function Header({ session }) {
    const [ openDrawer, setOpenDrawer ] = useState(false)

    const handleOpenDrawer = () => {
        setOpenDrawer((prev) => !prev)
    }

    return (
        <header className={ styles.header }>
            <Link href="/" className={ styles.header_icon }>
                <SportsEsportsIcon sx={{ mr : '6px', fontSize : '2rem' }}/>
                <h1>PROJECT</h1>
            </Link>

            <div className={ styles.header_menu }>
                { session &&  <Avatar src={ session.user.image } sx={{ width: '36px', height: '36px' }}/> }
                <MenuIcon onClick={ handleOpenDrawer } sx={{ fontSize : 40, ml : '24px', color : '#000000' }}/>
            </div>

            <Drawer anchor='right' open={ openDrawer } onClose={ handleOpenDrawer }>
                <MenuDrawer session={ session }/>
            </Drawer>
        </header>
    )
    // const [ viewMenu, setViewMenu ] = useState(false)

    // const toggleDrawer = (open) => (event) => {
    //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //       return;
    //     }
    //     setViewMenu(open);
    //   };

    // return (
    //     <AppBar positio="static" sx={{ bgcolor : '#333333' }}>
    //         <Toolbar sx={{ display : 'flex', justifyContent : "space-between", alignItems : 'center', height : '80px' }}>
    //             <Link href="/" className={ styles.nav_icon }>
    //                 <SportsEsportsIcon sx={{ mr : '6px', fontSize : '1.5rem' }}/>
    //                 <Typography fontSize="1.2rem">PROJECT</Typography>
    //             </Link>
    //             <Box sx={{ display : 'flex', alignItems : 'center' }}>
    //                 { session ? <Avatar src={ session.user.image } sx={{ width: '36px', height: '36px' }}/> : null }
    //                 <MenuIcon sx={{ fontSize : 40, ml : '16px' }} onClick={ toggleDrawer(true) }/>
    //             </Box>
    //         </Toolbar>

    //         {/* menu drawer */}
    //         <Drawer anchor='right' open={ viewMenu } onClose={ toggleDrawer(false) }>
    //             <MenuDrawer session={ session } toggleDrawer={ toggleDrawer }/>
    //         </Drawer>
    //     </AppBar>
    // )
}