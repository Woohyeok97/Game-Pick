'use client'
import styles from '../styles/detailImage.module.scss'
import { useState } from 'react'
// MUI
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Trailer from '@/component/trailer/trailer';

export default function DetailImage({ content }) {
    const [ openTrailer, setOpenTrailer ] = useState(false)

    const handleClick = () => {
        setOpenTrailer(prev => !prev)
    }

    return (
        <div className={ styles.detail_image }>
            <div className={ styles.image_box }>
                <img src={ content.image }/>
                <div className={ styles.image_blur } onClick={ handleClick }>
                    <p><LiveTvIcon/>트레일러</p>
                </div>
            </div>

            { openTrailer &&
            <div className={ styles.trailer_box } onClick={ handleClick }>
                <Trailer url={ content.trailerURL }/>
            </div> }
        </div>
    )
}