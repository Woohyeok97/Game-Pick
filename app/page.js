// 컴포넌트
import HomeInfo from "./home/components/homeInfo"
import HomeMain from "./home/components/homeMain"
// 모듈컴포넌트
import FullPage from "../component/module/fullPage"

export default function Home() {

    const component = [ <HomeMain/>, <HomeInfo/> ]
    
    // client component의 자식으로 server component를 전달해, server component의 특성을 유지함
    return (
        <FullPage name="Home">
        { component }
        </FullPage>
    )
}
