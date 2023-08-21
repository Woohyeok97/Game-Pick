import Link from 'next/link'
import { useState } from 'react'
import styles from '../../../styles/carouselItem.module.scss'
// MUI icons
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function CarouselItem({ content }) {
    // 마우스 호버 상태
    const [ isHovering, setIsHovering ] = useState(false)

    // 마우스 호버 핸들러
    const handleHover = () => {
        setIsHovering((prev) => !prev)
    }

    return (
        <div className={ styles.carousel_item } onMouseOver={ handleHover } onMouseOut={ handleHover }>
            <img src='/너굴맨.jpeg'/>

            { isHovering && 
            <Link href={`/detail/${content._id}`}>
                <div className={ styles.item_info }>
                    <p className={ styles.item_title }>{ content.title }</p>
                    <div className={ styles.item_like }>
                        <ThumbUpIcon fontSize="small"/>
                        <p >{ content.like }</p>
                    </div>
                </div>
            </Link> }
        </div>
    )
}