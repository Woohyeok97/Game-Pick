import styles from './detail.module.scss'
import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'
// 유틸함수
import formatDate from '@/util/formatDate';
// 컴포넌트
import DetailImage from './components/detailImage';
import ContentFeedback from './components/contentFeedback';
import Comment from './components/comment';


export default async function Detail(props) {
    const db = (await connectDB).db('project')
    const content = await db.collection('contents').findOne({ _id : new ObjectId(props.params.id) })

    return (
        <section className={ styles.detail }>
            <div className={ styles.grid_container }>

                <div className={ styles.detail_header }>
                    <h1>{ content.title }</h1>
                    <p>{ formatDate(content.createDate) } 발매</p>
                </div>

                <div className={ styles.detail_body }>
                    <DetailImage content={ content }/>
                </div>
                    
                <div className={ styles.detail_profile }>
                    <div className={ styles.description  }>
                        <p className={ styles.header }>게임소개</p>
                        <p className={ styles.body } >{ content.description }</p>
                    </div>
                    <ContentFeedback content={ content }/>
                </div>

                <div className={ styles.detail_comment }>
                    <Comment content={ content }/>
                </div>

            </div>
        </section>
    )
}

