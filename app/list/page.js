import styles from './list.module.scss'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { connectDB } from "@/util/database";
// 컴포넌트
import ListItem from './components/listItem';


export default async function List() {
    const db = (await connectDB).db('project')
    const contentList = await db.collection('contents').find().toArray()
    const session = await getServerSession(authOptions)

    return (
        <section className={ styles.list }>
            <div className={ styles.list_banner }>
                <div>
                    <h2>할만한 게임을 찾고 계신가요?</h2>
                    <p>Game<span className='pick'>Pick</span>에서 찾아보세요!</p>
                </div>
                <img src='/배너_아이콘.png' title="홈 오피스 아이콘 제작자: Eucalyp - Flaticon https://www.flaticon.com/kr/free-icons/"/>
            </div>

            <div className={ styles.grid_container }>
                <h1 className={ styles.list_header }>게임 둘러보기</h1>
                <div className={ styles.list_box }>
                { contentList.map((item) => <ListItem key={item._id} content={ item } session={ session }/>) }
                </div>
            </div>
        </section>
    )
}
