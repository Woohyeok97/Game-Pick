import { useState } from 'react'
import styles from '../../../styles/carouselItem.module.scss'


export default function CarouselItem({ content }) {
    const [ isHovering, setIsHovering ] = useState(false)

    const handleHover = () => {
        setIsHovering((prev) => !prev)
    }
    return (
        <div className={ styles.carousel_item } onMouseOver={ handleHover } onMouseOut={ handleHover }>
            <img src='/너굴맨.jpeg'/>
            { isHovering && <div className={ styles.item_info }>{ content.title }</div> }
        </div>
    )
}