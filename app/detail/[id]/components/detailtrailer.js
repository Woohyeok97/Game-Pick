import styles from '../styles/detailTrailer.module.scss'
// React-youtube
import ReactPlayer from 'react-player';


export default function DetailTrailer() {

      return (
        // <div className={styles.detail_trailer}>
            <div className={ styles.trailer_box }>
                <ReactPlayer
                    url="https://youtu.be/XrPZSq5YXqc"
                    width="100%"
                    height="100%"
                    controls
                    className={ styles.trailer }
                />
            </div>
        // </div>
      );
      
    
    
}