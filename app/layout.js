import Link from 'next/link'
import './globals.css'


export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <div className="nav">
            <Link href="/">Main</Link>
            <Link href="/list">List</Link>
            <Link href="/admin">Admin</Link>
        </div>
      {children}
      </body>
    </html>
  )
}
