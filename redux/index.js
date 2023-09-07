import { configureStore } from '@reduxjs/toolkit'

// slices
import commentListSlice from './features/commentListSlice'


const store = configureStore({
    reducer : {
        commentList : commentListSlice.reducer,
    }
})

export default store