import { configureStore } from '@reduxjs/toolkit'

// slices
import commentSlice from './features/commentSlice'
import tempComment from './features/tempCommentSlice'


const store = configureStore({
    reducer : {
        comment : commentSlice.reducer,
        tempComment : tempComment.reducer,
    }
})

export default store