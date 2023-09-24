'use client'
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

    if(!session.data || session.data.user.role != 'admin') {
        return <div>관리자 권한이 필요한 페이지 입니다.</div>
    }

    return children
}