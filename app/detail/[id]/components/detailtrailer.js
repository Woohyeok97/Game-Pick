'use client'
import { useState } from 'react'
import styles from '../styles/detailTrailer.module.scss'
// React-youtube
import ReactPlayer from 'react-player';


export default function DetailTrailer() {
    const [ viewTrailer, setViewTrailer ] = useState(false)

    if(!viewTrailer) return (
        <button className={ styles.trailer_btn } onClick={()=>{ setViewTrailer(true) }}>트레일러</button>
    )
    else return (
        <div className={styles.detail_trailer} onClick={()=>{ setViewTrailer(false) }}>
            <div className={ styles.trailer_box }>
                <ReactPlayer
                    url="https://youtu.be/XrPZSq5YXqc"
                    width="100%"
                    height="100%"
                    controls
                    className={ styles.trailer }
                />
            </div>
        </div>
      );
      
    
    
}