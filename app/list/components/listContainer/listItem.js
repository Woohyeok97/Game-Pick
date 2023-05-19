// scss
import Image from 'next/image'
import styles from '../../styles/listItem.module.scss'


export default function ListItem({ item }) {
    return (
        <div className={ styles.list_item }>
                <div className={ styles.image_box }>
                {/* <Image src="/너굴맨.jpeg" width={100} height={200} alt="너굴맨"/> */}
                    <img src="/너굴맨.jpeg"/>
                </div>
                <p>{item} 이에용</p>
        </div>
    )
}