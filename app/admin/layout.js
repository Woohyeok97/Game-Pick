'use client'
import styles from './admin.module.scss'
import Link from "next/link"
import { SessionProvider, useSession } from "next-auth/react"


export default function Layout({ children }) {

    return(
        <SessionProvider>
            <AdminChecker>{ children }</AdminChecker>
        </SessionProvider>
    )
}


function AdminChecker({ children }) {
    const session = useSession()
    
    if(session.status == 'loading') return

    if(session.data?.user.role != 'admin') return (
        <section className={ styles.warning }>
            <p>관리자 권한이 필요한 페이지 입니다.</p>
            <Link href="/">
                <button>메인 페이지</button>
            </Link>
        </section>
    )

    return children
}