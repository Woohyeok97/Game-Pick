import Header from '@/component/common/header'
import './globals.css'



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
