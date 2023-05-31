import styles from './menu.module.scss'
import Link from 'next/link'

export default function Menu() {
    return (
        <div className={ styles.menu }>
            <div className={ styles.menu_box }>
                <div className={ styles.menu_nav }>
                    <div className={ styles.login }>로그인</div>
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