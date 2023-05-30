import './globals.css'
// 컴포넌트
import Header from '@/component/header/header'


export default function RootLayout({ children }) {

    return (
        <html lang="ko">
            <body>
                <Header/>
                {children}
            </body>
        </html>
    )
}
