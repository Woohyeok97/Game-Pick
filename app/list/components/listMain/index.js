// scss
import styles from '../../styles/listMain.module.scss'
import ListItem from './listItem'

export default function ListMain({ gameContent }) {

    return (
        <section className={ styles.list_main }>
        { gameContent.map((content, i)=> <ListItem content={ content }/> ) }
        </section>
    )
}