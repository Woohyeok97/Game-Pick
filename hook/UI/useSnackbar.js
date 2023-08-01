import { useState } from "react"

export default function useSnackbar() {
    const [ open, setOpen ] = useState(false)
    const [ snackbarKey, setSnackbarKey ] = useState(0)

    const handleSnackbarOpne = () => {
        setOpen(true)
        setSnackbarKey((prev) => prev + 1)
    }

    const handleSnackbarClose = () => {
        setOpen(false);
    }

    return { open, snackbarKey, handleSnackbarOpne, handleSnackbarClose }
}