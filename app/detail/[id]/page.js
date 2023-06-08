import { connectDB } from '@/util/database'
import { ObjectId } from 'mongodb'
// 컴포넌트
import DetailFront from "./components/detailFront";
import DetailComment from "./components/detailComment";
// 모듈컴포넌트
import FullPage from "@/component/module/fullPage";

export default async function Detail(props) {
    const db = (await connectDB).db('project')
    const content = await db.collection('game_content').findOne({ _id : new ObjectId(props.params.id) })
 
    const component = [ 
        <DetailFront content={ content }/>, 
        <DetailComment/>
    ]

    return (
        <FullPage name="Detail">
        { component }
        </FullPage>
    )
}