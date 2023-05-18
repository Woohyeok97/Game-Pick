import styles from '../../style/layout/pageLayout.module.scss'

export default function PageLayout({ children }) {
    return (
        <div className={ styles.page_layout }>
            { children }
        </div>
    )
}