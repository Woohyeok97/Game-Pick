import Link from 'next/link'
import styles from '../styles/listItem.module.scss'
// 컴포넌트
import FeedbackViewer from '@/component/feedback/feedbackViewer'


export default function ListItem({ content, session }) {

    return (
            <div className={ styles.list_item }>
                { session?.user.role == 'admin' && <Link href={`admin/contentModify/${content._id}`} className={ styles.edit_btn }>⚙︎</Link> }
                
                <Link href={`/detail/${content._id}`}>
                    <div className={ styles.item_card }>
                        <img src={ content.image }/>
                        <div className={ styles.item_profile }>
                            <h2>{ content.title }</h2>
                            <FeedbackViewer like={ content.like } dislike={ content.dislike }/>
                        </div>
                    </div>
                </Link>
            </div>   
    )
}