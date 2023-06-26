import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'
// 컴포넌트
import DetailFront from "./components/detailFront";
import DetailInfo from './components/detailInfo';
// 모듈컴포넌트
import FullPage from "@/component/module/fullPage";


export default async function Detail(props) {
    const db = (await connectDB).db('project')
    const content = await db.collection('game_content').findOne({ _id : new ObjectId(props.params.id) })
    content._id = content._id.toString()

    const component = [ 
        <DetailFront content={ content }/>,
        <DetailInfo content={ content }/> 
    ]

    return (
        <FullPage>
        { component }
        </FullPage>
    )
}