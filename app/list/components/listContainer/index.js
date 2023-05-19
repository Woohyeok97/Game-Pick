// scss
import styles from '../../styles/listContainer.module.scss'
import ListItem from './listItem'

export default function ListContainer() {
    const array = ['붉은사막', '디아블로4', '젤다의전설', 'Dokev', '동물의숲']

    return (
        <section className={ styles.list_container }>
        { array.map((a, i)=> <ListItem item={a}/> ) }
        </section>
    )
}