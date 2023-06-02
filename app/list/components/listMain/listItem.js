// scss
import Link from 'next/link'
import styles from '../../styles/listItem.module.scss'


export default function ListItem({ content }) {
    return (
        <Link href={`/detail/${content.title}`}>
            <div className={ styles.list_item }>
                <div className={ styles.image_box }>
                    <img src="/너굴맨.jpeg"/>
                </div>
                <p>{content.title}</p>
            </div>
        </Link>
    )
}