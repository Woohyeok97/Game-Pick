'use client'
import { useEffect, useState } from 'react'
import styles from '../../styles/detailComment/detailComment.module.scss'
// 컴포넌트
import CommentItem from './commentItem'
import CommentMake from './commentMake'
import CommentNav from './commentNav'

export default function DetailComment() {
    const [ width, setWidth ] = useState(window.innerWidth)
    const [ name, setName ] = useState('comment_box')
    const [ sortOption, setSortOption ] = useState('좋아요순')

    const [ comment, setComment ] = useState([{
        title : '제목1번 하이용!',
        comment : '기대가되는 게임이네용~'
    },{
        title : '제목2번 반가용!',
        comment : '여기 뭐임?'
    },{
        title : '제목3번 코멘트용!',
        comment : '여기 언제오픈하나요'
    },{
        title : '4번 제목이용!',
        comment : '환불해줘잉'
    },{
        title : '5번 그리드 어케쓰냐?',
        comment : '최솟값과 최댓값을 지정할 수 있는 함수입니다. minmax(100px, auto)의 의미는 최소한 100px, 최대는 자동으로(auto) 늘어나게.. 입니다. 즉 아무리 내용의 양이 적더라도 최소한 높이 100px은 확보하고, 내용이 많아 100px이 넘어가면 알아서 늘어나도록 처리해 준 예시입니다.'
    }])

    const handleResize = () => setWidth(window.innerWidth)

    useEffect(()=>{
        window.addEventListener('resize', handleResize)
        if(width < 1200) {
            let array = [...comment]
            array = array.slice(0, 3)
            setComment(array)
            setName('comment_box_mobile')
        } else {
            setComment([{
                title : '제목1번 하이용!',
                comment : '기대가되는 게임이네용~'
            },{
                title : '제목2번 반가용!',
                comment : '여기 뭐임?'
            },{
                title : '제목3번 코멘트용!',
                comment : '여기 언제오픈하나요'
            },{
                title : '4번 제목이용!',
                comment : '환불해줘잉'
            },{
                title : '5번 그리드 어케쓰냐?',
                comment : '최솟값과 최댓값을 지정할 수 있는 함수입니다. minmax(100px, auto)의 의미는 최소한 100px, 최대는 자동으로(auto) 늘어나게.. 입니다. 즉 아무리 내용의 양이 적더라도 최소한 높이 100px은 확보하고, 내용이 많아 100px이 넘어가면 알아서 늘어나도록 처리해 준 예시입니다.'
            }])
            setName('comment_box')
        }
        return () => window.removeEventListener('resize', handleResize)
    }, [width])


    return (
        <div className={ styles.detail_comment }>
            <div className={ styles.comment_container }>

                <CommentNav sortOption={ sortOption } setSortOption={ setSortOption }/>

                <div className={ styles[name] }>
                { comment.map((a, i)=> <CommentItem title={ a.title } comment={ a.comment } key={i} />) }
                </div>
                
                <CommentMake/>

                <div className={ styles.next }>▷</div>
                <div className={ styles.prev }>◁</div>
            </div>
        </div>
    )
}