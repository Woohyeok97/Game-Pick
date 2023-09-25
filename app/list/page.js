import { getServerSession } from 'next-auth';
import ListItem from './components/listMain/listItem';
import styles from './list.module.scss'
import { connectDB } from "@/util/database";
import { authOptions } from '@/pages/api/auth/[...nextauth]';
// 컴포넌트


export default async function List() {
    const db = (await connectDB).db('project')
    const contentList = await db.collection('contents').find().toArray()
    const session = await getServerSession(authOptions)

    return (
        <section className="page_static">
            <div className={ styles.list_header }>
                <p>지금 골라보세요!</p>
            </div>
            <div className={ styles.list_container }>
            { contentList.map((item) => <ListItem key={item._id} content={ item } session={ session }/>) }
            </div>
        </section>
    )
}