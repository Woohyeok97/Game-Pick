'use client'
// MUI
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function AlertSnackbar({ children, open, snackbarKey, handleSnackbarClose }) {

    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleSnackbarClose} key={snackbarKey}>
            <Alert onClose={handleSnackbarClose} severity="success" variant="filled" sx={{ width: '100%' }}>
            { children }
            </Alert>
        </Snackbar>
    )
}