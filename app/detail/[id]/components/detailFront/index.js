import styles from '../../styles/detailFront/detailFront.module.scss'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
// 컴포넌트
import DetailTrailer from './detailtrailer'
import ContentFeedback from '@/component/feedback/contentFeedback'


export default async function DetailFront({ content }) {
    const session = await getServerSession(authOptions)
    
    return (
        <div className={ styles.detail_front }>
            <img src={`/너굴맨배경.jpeg`}/>
            <div className={ styles.item_info }>
                <h1>{ content.title }</h1>
                <div className={ styles.release_date_box }>
                    <p>{ content.releaseDate }</p>
                </div>
                <DetailTrailer trailerUrl={ content.trailerUrl }/>
                <ContentFeedback content={ content } session={ session }/>
            </div>    
        </div>
    )
}

