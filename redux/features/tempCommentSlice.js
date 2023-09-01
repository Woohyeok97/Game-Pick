import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const tempComment = createSlice({
    name : 'tempComment',
    initialState,

    reducers : {
        setTempComment : (state, action) => {
            return state = action.payload
        },
    },
})

export default tempComment
export const { setTempComment } = tempComment.actions