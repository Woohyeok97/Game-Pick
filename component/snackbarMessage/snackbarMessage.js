'use client'
import { useDispatch, useSelector } from 'react-redux';
// reducer
import { closeSnackbar } from '@/redux/features/snackbarStateSlice';
// MUI
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


export default function SnackbarMessage() {
    const snackbarState = useSelector((state) => state.snackbarState)
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(closeSnackbar())
    }

    return (
        <Snackbar open={ snackbarState.opne } autoHideDuration={3000} onClose={ handleClose }>
            <Alert onClose={ handleClose } severity={ snackbarState.severity } variant="filled" sx={{ width: '100%' }}>
            { snackbarState.message }
            </Alert>
        </Snackbar>
    )
}