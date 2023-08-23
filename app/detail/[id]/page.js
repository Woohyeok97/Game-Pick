import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'
// 컴포넌트
import ContentProfile from './components/contentProfile';
import ContentComments from './components/contentComment';


export default async function Detail(props) {
    const db = (await connectDB).db('project')
    const content = await db.collection('contents').findOne({ _id : new ObjectId(props.params.id) })

    return (
        <section className="page_static">
            <ContentProfile content={ content }/>
            <ContentComments content={ content }/>
        </section>
    )
}