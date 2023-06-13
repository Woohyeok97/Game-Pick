'use client'
import styles from './menu.module.scss'
import Link from 'next/link'
import { signIn, signOut } from 'next-auth/react'
// MUI
import Button from '@mui/material/Button';

export default function Menu({ setViewMenu, session }) {

    return (
        <div className={ styles.menu }>
            <div className={ styles.backgrond_box } onClick={()=>{ setViewMenu(false) }}></div>
            <div className={ styles.menu_box }>
                <div className={ styles.menu_nav }>
                    { session
                    ? <Button variant="contained" size="large" onClick={()=>{ signOut() }}>로그아웃</Button>
                    : <Button variant="contained" size="large" onClick={()=>{ signIn() }}>깃헙 로그인</Button> }
                </div>
                <div className={ styles.link_box }>
                    <div className={ styles.link }>
                        <Link href="/">Main</Link>
                    </div>
                    <div className={ styles.link }>
                        <Link href="/list">List</Link>
                    </div>
                </div>
                <div className={ styles.menu_footer }>
                    <Link href="">Github</Link> / <Link href="">Notion</Link> / <Link href="/admin" className={ styles.admin }>Admin</Link>
                </div>
            </div>
        </div>
    )
}