import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'
import styles from './styles/comment.module.scss'
// 컴포넌트
import CommentMain from './components/commentMain'


export default async function Comment(props) {
    const db = (await connectDB).db('project')
    const content = await db.collection('game_content').findOne({ _id : new ObjectId(props.params.id) })
    content._id = content._id.toString()

    return (
        <section className={ styles.comment }>
            <div className={ styles.title }>
                <h1>{ content.title }</h1>
                <p>유저 코멘트</p>
            </div>
            <CommentMain _id={ props.params.id }/>
        </section>
    )
}