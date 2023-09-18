import formatDate from '@/util/formatDate'
import styles from '../../styles/profile.module.scss'
// 컴포넌트
import ContentFeedback from './contentFeedback'
import ContentImage from './contentImage'

export default function Profile({ content }) {
    content._id = content._id.toString()
    
    return (
        <div className={ styles.content_profile }>
            <ContentImage content={ content } />

            <div className={ styles.profile }>
                <div>
                    <p>{ formatDate(content.createDate) } 출시</p>
                    <h1>{ content.title }</h1>
                </div>
                {/* <ContentFeedback content={ content }/> */}
            </div>
        </div>
    )
}