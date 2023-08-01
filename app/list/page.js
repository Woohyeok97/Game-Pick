import { connectDB } from "@/util/database";
// 컴포넌트
import ListNav from "@/app/list/components/listNav";
import ListMain from "./components/listMain";

export default async function List() {
    const db = (await connectDB).db('project')
    const contents = await db.collection('game_content').find().toArray()
    
    // contents에 좋아요 / 싫어요 카운트 추가
    const gameContent = await Promise.all(contents.map( async (item, i) => {
        const likeCount = await db.collection('game_content_feedback').countDocuments({ parent : item._id.toString(), feedback : 'like' })
        const dislikeCount = await db.collection('game_content_feedback').countDocuments({ parent : item._id.toString(), feedback : 'dislike' })

        return { ...item, like : likeCount, dislike : dislikeCount }
    }))

    // 좋아요 순으로 정렬하기
    gameContent.sort((a, b) => b.like - a.like)

    return (
        <section className="page_static">
            <ListNav/>
            <ListMain gameContent={ gameContent }/>
        </section>
    )
}