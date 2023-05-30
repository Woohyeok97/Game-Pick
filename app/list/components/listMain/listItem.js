// scss
import Link from 'next/link'
import styles from '../../styles/listItem.module.scss'


export default function ListItem({ item }) {
    return (
        <Link href={`/detail/${item}`}>
            <div className={ styles.list_item }>
                <div className={ styles.image_box }>
                    <img src="/너굴맨.jpeg"/>
                </div>
                <p>{item} 이에용</p>
            </div>
        </Link>
    )
}