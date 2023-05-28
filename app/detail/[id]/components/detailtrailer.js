'use client'
import styles from '../styles/detailTrailer.module.scss'
import { useEffect, useState } from 'react';
// React-youtube
import ReactPlayer from 'react-player';
// 컴포넌트
export const dynamic = 'force-dynamic'

export default function DetailTrailer() {
    const [ viewTrailer, setViewTrailer ] = useState(false)

    useEffect(()=>{
        setViewTrailer(true)
    }, [])
      
      if(viewTrailer) return (
        <div className={styles.detail_trailer}>
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