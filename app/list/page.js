// 레이아웃 컴포넌트
import PageLayout from "@/component/PageLayout/PageLayout";
// 컴포넌트
import ListMain from "@/app/list/components/listMain";
import ListContainer from "./components/listContainer";


export default function List() {
    return (
        <PageLayout>
            <ListMain/>
            <ListContainer/>
        </PageLayout>
    )
}