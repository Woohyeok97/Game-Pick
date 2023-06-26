'use client'
import { useEffect, useState } from 'react'
import styles from './styles/comment.module.scss'

export default function Comment(props) {
    const [ comment, setComment ] = useState('')
    
    return (
        <section className={ styles.comment }>

        </section>
    )
}