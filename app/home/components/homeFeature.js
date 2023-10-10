import styles from '../styles/homeFeature.module.scss'


export default function HomeFeature() {

    return (
        <section className={ styles.home_feature }>
            <div className={ styles.grid_container }>
                <h1 className={ styles.home_feature_header }>
                    Game<span className='pick'>Pick</span>에서 무엇을 할수있나요?
                </h1>
                <div className={ styles.home_feature_content }>
                    <img src="/게임_아이콘.png" title='아이콘 제작자: Eucalyp - Flaticon https://www.flaticon.com/kr/free-icons/'/>
                    <h2>둘러보기</h2>
                    <p>유저들이 추천한 게임을 둘러볼수 있습니다.</p>
                </div>
                <div className={ styles.home_feature_content }>
                    <img src="/코멘트_아이콘.png" title='아이콘 제작자: Eucalyp - Flaticon https://www.flaticon.com/kr/free-icons/'/>
                    <h2>코멘트 남기기</h2>
                    <p>게임에 대한 코멘트를 남길수 있습니다.</p>
                </div>
                <div className={ styles.home_feature_content }>
                    <img src="/피드백_아이콘.png" title='아이콘 제작자: Eucalyp - Flaticon https://www.flaticon.com/kr/free-icons/'/>
                    <h2>피드백</h2>
                    <p>게임에 대한 피드백을 남길수 있습니다.</p>
                </div>
            </div>
        </section>
    )
}