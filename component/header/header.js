'use client'
import styles from '../header/header.module.scss'
import Link from 'next/link'
import { useState } from 'react';
// MUI
import MenuIcon from '@mui/icons-material/Menu';
// 컴포넌트
import Menu from '../menu/menu';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


export default function Header() {
    const [ viewMenu, setViewMenu ] = useState(false)

    return (
        <>
        <header className={ styles.header_container }>
            <div className={ styles.nav }>
                <h3>로고에용</h3>
                <h3><Link href="/">[Main]</Link></h3>
                <h3><Link href="/list">[List]</Link></h3>
                <h3><Link href="/admin">[Admin]</Link></h3>
            </div>
            <div className={ styles.menu } onClick={()=>{ setViewMenu(!viewMenu) }}>
                <MenuIcon sx={{ fontSize : 40 }}/>
            </div>
        </header>

        <TransitionGroup>
            {viewMenu && 
                <CSSTransition timeout={500} classNames="menu-animation">
                    <Menu/>
                </CSSTransition> }
        </TransitionGroup>
        </>
    )
}