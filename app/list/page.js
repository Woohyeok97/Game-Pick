// 컴포넌트
import ListNav from "@/app/list/components/listNav";
import ListMain from "./components/listMain";


export default function List() {
    return (
        <section className="page_static">
            <ListNav/>
            <ListMain/>
        </section>


    )
}