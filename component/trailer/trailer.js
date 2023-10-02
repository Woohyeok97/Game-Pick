'use client'
import styles from './trailer.module.scss'
// React-youtube
import ReactPlayer from 'react-player';

export default function Trailer({ url }) {

    return (
        <div className={ styles.trailer_wrapper }>
            <ReactPlayer url={ url } className={ styles.trailer } width="100%" height="100%" controls/>
        </div> 
    )
}