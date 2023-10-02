import Link from 'next/link'
import styles from '../styles/listItem.module.scss'
// 컴포넌트
import FeedbackViewer from '@/component/feedback/feedbackViewer'

export default function ListItem({ content, session }) {

    return (
            <div className={ styles.list_item }>
                <img src={ content.image }/>
                <div className={ styles.content_card }>

                    { session && session.user.role == 'admin'
                    &&  <Link href={`admin/contentModify/${content._id}`} className={ styles.edit }>⚙️</Link> }

                    <Link href={`/detail/${content._id}`}>
                    <div className={ styles.content_info }>
                        <div className={ styles.info_box }>
                            <h2 className={ styles.title }>{ content.title }</h2>
                            <p className={ styles.description }>어쩌구 저쩌구</p>
                            <div className={ styles.attribute }>
                                <FeedbackViewer like={ content.like } dislike={ content.dislike }/>
                            </div>
                        </div>
                    </div>
                    </Link>

                </div>
            </div>   
    )
}
