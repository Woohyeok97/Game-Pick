// 컴포넌트
import DetailFront from "./components/detailFront";
import DetailComment from "./components/detailComment";
// 모듈컴포넌트
import FullPage from "@/component/module/fullPage";

export default function Detail(props) {
 
    const component = [ 
        <DetailFront contentId={props.params.id}/>, 
        <DetailComment contentId={props.params.id}/>
    ]

    return (
        <FullPage name="Detail">
        { component }
        </FullPage>
    )
}