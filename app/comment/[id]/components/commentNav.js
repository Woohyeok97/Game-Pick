import styles from '../styles/commentNav.module.scss'
// 컴포넌트
import Selector from '@/component/selector/selector';


export default function CommentNav({ contentTitle }) {

    const handleChange = (e) => {
        alert(e.target.value)
    }

    const menuItems = [
        { name : '좋아요', value : 'like' },
        { name : '최근 코멘트', value : 'createDate' }
    ]

    return (
        <div className={ styles.comment_nav }>
            <h1>{ contentTitle }</h1>
            <Selector menuItems={ menuItems } onChange={ handleChange }/>
        </div>
    )
}