import { connectDB } from "@/util/database";
// 컴포넌트
import ListNav from "@/app/list/components/listNav";
import ListMain from "./components/listMain";

export default async function List() {
    const db = (await connectDB).db('project')
    const gameContent = await db.collection('game_content').find().toArray()

    return (
        <section className="page_static">
            <ListNav/>
            <ListMain gameContent={ gameContent }/>
        </section>
    )
}