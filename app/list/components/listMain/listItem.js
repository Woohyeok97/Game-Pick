// scss
import Link from 'next/link'
import styles from '../../styles/listItem.module.scss'
// 컴포넌트
import EditBtn from './editBtn'


export default function ListItem({ content }) {
    content._id = content._id.toString()
    return (
            <div className={ styles.list_item }>
                <Link href={`/detail/${content._id}`}>
                    <div className={ styles.image_box }>
                        <img src="/너굴맨.jpeg"/>
                    </div>
                    <p>{content.title}</p>
                </Link>
                <EditBtn contentId={ content._id }/>
            </div>
        
    )
}