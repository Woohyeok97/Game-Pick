import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'
// 컴포넌트
import Profile from './components/profile';
import UserComments from './components/userComments';


export default async function Detail(props) {
    const db = (await connectDB).db('project')
    const content = await db.collection('contents').findOne({ _id : new ObjectId(props.params.id) })
   
    return (
        <section className="page_static">
            <Profile content={ content }/>
            <UserComments content={ content }/>
        </section>
    )
}