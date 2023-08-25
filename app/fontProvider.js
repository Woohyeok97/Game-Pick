'use client'
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    typography : { fontFamily: 'inherit' }
})

export default function FontProvider({ children }) {

    return (
        <ThemeProvider theme={ theme }>
        { children }
        </ThemeProvider>
    )
}