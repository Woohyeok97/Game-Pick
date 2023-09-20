import { configureStore } from '@reduxjs/toolkit'

// slices
import commentListSlice from './features/commentListSlice'
import snackbarStateSlice from './features/snackbarStateSlice'

const store = configureStore({
    reducer : {
        commentList : commentListSlice.reducer,
        snackbarState : snackbarStateSlice.reducer,
    }
})

export default store