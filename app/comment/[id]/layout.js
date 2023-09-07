'use client'
import { SessionProvider } from "next-auth/react"
import ReduxProvider from "@/redux/reduxProvider"

export default function Layout({ children }) {

    return(
        <SessionProvider>
            <ReduxProvider>{ children }</ReduxProvider>
        </SessionProvider>
    )
}