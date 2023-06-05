// 컴포넌트
import DetailFront from "./components/detailFront";
import DetailComment from "./components/detailComment";
// 모듈컴포넌트
import FullPage from "@/component/module/fullPage";

export default function Detail() {
 
    const compoent = [ <DetailFront/>, <DetailComment/> ]

    return (
        <FullPage>
        { compoent }
        </FullPage>
    )
}