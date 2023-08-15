// scss
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import styles from '../../styles/listMain.module.scss'
import ListItem from './listItem'

export default async function ListMain({ contents }) {
    const session = await getServerSession(authOptions)
    
    return (
        <section className={ styles.list_main }>
        { contents.map((content, i)=> <ListItem content={ content } session={ session }/> ) }
        </section>
    )
}