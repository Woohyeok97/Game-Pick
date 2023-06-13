// scss
import Link from 'next/link'
import styles from '../../styles/listItem.module.scss'
// 컴포넌트
import EditBtn from './editBtn'


export default function ListItem({ content, role }) {
    //content._id를 문자열로 변환
    content._id = content._id.toString()
    
    return (
            <div className={ styles.list_item }>
                <Link href={`/detail/${content._id}`}>
                    <div className={ styles.image_box }>
                        <img src="/너굴맨.jpeg"/>
                    </div>
                    <p>{content.title}</p>
                </Link>
                { role == 'admin' ? <EditBtn contentId={ content._id }/> : null }
            </div>
        
    )
}