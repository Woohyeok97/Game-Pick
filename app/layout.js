import './globals.css'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
// 컴포넌트
import Header from '@/component/header/header'

export default async function RootLayout({ children }) {
    const session = await getServerSession(authOptions)
    
    return (
        <html lang="ko">
            <body>
                <Header session={ session }/>
                {children}
            </body>
        </html>
    )
}
