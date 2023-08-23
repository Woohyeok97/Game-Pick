'use client'
import styles from '../../styles/trailer.module.scss'
// React-youtube
import ReactPlayer from 'react-player';


export default function Trailer({ content }) {

    return (
        <div className={ styles.trailer_box }>
            <ReactPlayer
                url={ content.trailerURL }
                width="100%"
                height="100%"
                controls
                className={ styles.trailer }
            />
        </div>
      );
      
    
    
}