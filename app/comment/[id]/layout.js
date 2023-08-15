'use client'
import useFetchComment from "@/hook/comment/useFetchComment"
import { SessionProvider } from "next-auth/react"
import { createContext } from "react"

export const CommentContext = createContext()

export default function Layout({ children }) {
    const { comment, setComment, setTempCommentId, fetchComment, nextComment, fetchOption, setFetchOption } = useFetchComment()

    return(
        <CommentContext.Provider value={{ comment, setComment, setTempCommentId, fetchComment, nextComment, fetchOption, setFetchOption }}>
            <SessionProvider>
                { children }
            </SessionProvider>
        </CommentContext.Provider>
    )
}