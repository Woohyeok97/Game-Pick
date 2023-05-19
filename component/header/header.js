import styles from '../header/header.module.scss'
import Link from 'next/link'

export default function Header() {
    return (
        <header className={ styles.header_container }>
            <div className={ styles.nav }>
                <h3>로고에용</h3>
                <h3><Link href="/">[Main]</Link></h3>
                <h3><Link href="/list">[List]</Link></h3>
                <h3><Link href="/admin">[Admin]</Link></h3>
                </div>
            <div className={ styles.menu }>햄버거</div>
        </header>
    )
}