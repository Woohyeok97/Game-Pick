import styles from '../pageLayout/pageLayout.module.scss'

export default function PageLayout({ children }) {
    return (
        <div className={ styles.page_layout }>
            { children }
        </div>
    )
}