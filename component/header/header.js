'use client'
import styles from '../header/header.module.scss'
import Link from 'next/link';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useState } from 'react';
// MUI
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer'
// 컴포넌트
import MenuDrawer from '../menuDrawer/menuDrawer';

export default function Header({ session }) {
    const [ viewMenu, setViewMenu ] = useState(false)

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setViewMenu(open);
      };

    return (
        <AppBar positio="static" sx={{ bgcolor : '#333333' }}>
            <Toolbar sx={{ display : 'flex', justifyContent : "space-between", alignItems : 'center', height : '80px' }}>
                <Link href="/" className={ styles.nav_icon }>
                    <SportsEsportsIcon sx={{ mr : '6px', fontSize : '1.5rem' }}/>
                    <Typography fontSize="1.2rem">PROJECT</Typography>
                </Link>
                <Box sx={{ display : 'flex', alignItems : 'center' }}>
                    { session ? <Avatar src={ session.user.image } sx={{ width: '36px', height: '36px' }}/> : null }
                    <MenuIcon sx={{ fontSize : 40, ml : '16px' }} onClick={ toggleDrawer(true) }/>
                </Box>
            </Toolbar>

            {/* menu drawer */}
            <Drawer anchor='right' open={ viewMenu } onClose={ toggleDrawer(false) }>
                <MenuDrawer session={ session } toggleDrawer={ toggleDrawer }/>
            </Drawer>
        </AppBar>
    )
}