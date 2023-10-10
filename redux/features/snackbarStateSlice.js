import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    opne : false,
    severity : 'info',
    message : ''
}

const snackbarState = createSlice({
    name : 'snackbarState',
    initialState,

    reducers : {
        openSnackbar : (state, action) => {
            state.opne = true
            state.severity = action.payload.severity
            state.message = action.payload.message
        },
        closeSnackbar : (state) => {
            state.opne = false
        },
    },
})

export default snackbarState
export const { openSnackbar, closeSnackbar } = snackbarState.actions