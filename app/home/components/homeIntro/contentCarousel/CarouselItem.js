import Link from 'next/link'
import styles from '../../../styles/carouselItem.module.scss'
// MUI icons
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function CarouselItem({ content }) {

    return (
        <div className={ styles.carousel_item }>
           {/* <Image src='/너굴맨.jpeg' width="400" height="400"/> */}
           <img src='/너굴맨.jpeg'/>

            <Link href={`/detail/${content._id}`}>
            <div className={ styles.item_info }>
                <p className={ styles.item_title }>{ content.title }</p>
                <div className={ styles.item_like }>
                    <ThumbUpIcon fontSize="small"/>
                    <p >{ content.like }</p>
                </div>
            </div>
            </Link> 
        </div>
    )
}