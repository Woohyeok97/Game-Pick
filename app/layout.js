import './globals.css'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
// 컴포넌트
import Header from '@/component/header/header'

// 폰트
import { Noto_Sans_KR } from 'next/font/google'
import FontProvider from './fontProvider'

const notoSansKorean = Noto_Sans_KR({
    weight : ['500'],
    subsets: ['latin'],
})


export default async function RootLayout({ children }) {
    const session = await getServerSession(authOptions)

    return (
        <html lang="ko">
            <body className={ notoSansKorean.className }>
                <FontProvider>
                    <Header session={ session }/>
                    { children }
                </FontProvider>
            </body>
        </html>
    )
}
