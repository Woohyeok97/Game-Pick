'use client' 
import { useState } from 'react'
import styles from '../../styles/contentImage.module.scss'
// 컴포넌트
import Trailer from './trailer'


export default function ContentImage({ content }) {
    const [ openTrailer, setOpenTrailer ] = useState(false)

    const handleClick = () => {
        setOpenTrailer((prev) => !prev)
    }

    return (
        <div className={ styles.content_image }>
            <div className={ styles.image_box } onClick={ handleClick }>
                <img src={`/너굴맨배경.jpeg`}/>
                <p className={ styles.trailer_click }>트레일러?</p>
            </div>

            { openTrailer &&
            <div className={ styles.trailer } onClick={ handleClick }>
                <Trailer content={ content }/>
            </div> }
        </div>
    )
}