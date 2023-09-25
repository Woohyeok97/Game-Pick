import Link from 'next/link'
import styles from '../../styles/listItem.module.scss'
// 컴포넌트


export default function ListItem({ content, session }) {

    return (
            <div className={ styles.list_item }>
                <img src={ content.image }/>
                <Link href={`/detail/${content._id}`}>
                <div className={ styles.content_info }>
                    <div className={ styles.info_box }>
                        <h2 className={ styles.title }>{ content.title }</h2>
                        <p className={ styles.description }>어쩌구 저쩌구</p>
                        <div className={ styles.attribute }>
                            <p>따봉 { content.like }</p>
                        </div>
                    </div>
                </div>
                </Link>
                { session && session.user.role == 'admin' 
                &&  <Link href={`admin/contentModify/${content._id}`} className={ styles.edit }>컨텐츠 수정</Link> }
            </div>   
    )
}
