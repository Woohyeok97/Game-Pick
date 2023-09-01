import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const comment = createSlice({
    name : 'comment',
    initialState,

    reducers : {
        setComment : (state, action) => {
            return state = action.payload
        },
    },
})

export default comment
export const { setComment } = comment.actions