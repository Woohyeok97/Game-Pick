// scss
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import styles from '../../styles/listMain.module.scss'
import ListItem from './listItem'

export default async function ListMain({ gameContent }) {
    const session = await getServerSession(authOptions)
    // session의 존재여부 + 존재한다면 session.user.role을 prop으로 전달해야함
    // 그렇기 때문에 role이라는 변수를 선언후에 prop으로 전달
    // 그냥 session.user.role을 prop으로 전달하면 비로그인 상태일때 오류 발생
    let role = ''
    if(session) {
        role = session.user.role
    }
    
    return (
        <section className={ styles.list_main }>
        { gameContent.map((content, i)=> <ListItem content={ content } role={ role }/> ) }
        </section>
    )
}