'use client'
import styles from '../header/header.module.scss'
import Link from 'next/link';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useState } from 'react';
// MUI
import MenuIcon from '@mui/icons-material/Menu';
// 컴포넌트
import Menu from '../menu/menu';



export default function Header() {
    const [ viewMenu, setViewMenu ] = useState(false)

    return (
        <>
        {/* 헤더 컴포넌트 */}
        <header className={ styles.header_container }>
            <div className={ styles.nav }>
                <h3>
                    <Link href="/">로고에용</Link>
                </h3>
            </div>
            <div className={ styles.menu } onClick={()=>{ setViewMenu(!viewMenu) }}>
                <MenuIcon sx={{ fontSize : 40 }}/>
            </div>
        </header>

        {/* 메뉴 컴포넌트 */}
        <TransitionGroup>
            {viewMenu && 
                <CSSTransition timeout={500} classNames="menu-animation">
                    <Menu setViewMenu={ setViewMenu }/>
                </CSSTransition> }
        </TransitionGroup>
        </>
    )
}