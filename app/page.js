// 컴포넌트
import HomeInfo from "./home/components/homeInfo"
import HomeMain from "./home/components/homeMain"
// 모듈컴포넌트
import FullPage from "../component/fullPage/fullPage"

export default function Home() {

    const component = [ <HomeMain key='home_main'/>, <HomeInfo key='home_info'/> ]
    // component를 <FullPage/>로 랩핑하여, 풀페이지 기능을 수행함
    // client component의 자식으로 server component를 전달해, server component의 특성을 유지함
    return (
        <FullPage>
        { component }
        </FullPage>
    )
}
