'use client'
import styles from '../header/header.module.scss'
import Link from 'next/link';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useState } from 'react';
// MUI
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
// 컴포넌트
import Menu from '../menu/menu';

export default function Header({ session }) {
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
            { session ? <div style={{ fontSize : "32px", color : "purple", fontWeight : "800" }}>Admin 계정으로 접속중..</div> : null }
            <div className={ styles.menu }>
                { session ? <Avatar src={ session.user.image } /> : <div></div> }
                <MenuIcon sx={{ fontSize : 40 }} onClick={()=>{ setViewMenu(!viewMenu) }}/>
            </div>
        </header>

        {/* 메뉴 컴포넌트 */}
        <TransitionGroup>
            {viewMenu && 
                <CSSTransition timeout={500} classNames="menu-animation">
                    <Menu setViewMenu={ setViewMenu } session={ session }/>
                </CSSTransition> }
        </TransitionGroup>
        </>
    )
}