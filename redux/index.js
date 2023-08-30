import { configureStore } from '@reduxjs/toolkit'

// slices
import commentSlice from './features/commentSlice'


const store = configureStore({
    reducer : {
        comment : commentSlice.reducer,
    }
})

export default store