// 레이아웃 컴포넌트
import PageLayout from "@/component/PageLayout/PageLayout";
// 컴포넌트
import ListNav from "@/app/list/components/listNav";
import ListMain from "./components/listMain";


export default function List() {
    return (
        <PageLayout>
            <ListNav/>
            <ListMain/>
        </PageLayout>
    )
}