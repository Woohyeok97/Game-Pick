
import Link from 'next/link'
import styles from '../../styles/listItem.module.scss'
// 컴포넌트
import EditBtn from './editBtn'
import FeedbackViewer from '@/component/feedback/feedbackViewer'

export default function ListItem({ content, session }) {
    //content._id를 문자열로 변환
    content._id = content._id.toString()

    return (
            <div className={ styles.list_item }>
                <Link href={`/detail/${content._id}`}>
                    <div className={ styles.feedback }>
                        <FeedbackViewer data={ content }/>
                    </div>
                    <div className={ styles.image_box }>
                        <img src="/너굴맨.jpeg"/>
                    </div>
                    <p>{ content.title }</p>
                </Link>

                { session && session.user.role == 'admin' && <EditBtn contentId={ content._id }/> }
            </div>
        
    )
}