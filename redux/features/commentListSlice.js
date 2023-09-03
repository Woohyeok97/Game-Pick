import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const commentList = createSlice({
    name : 'commentList',
    initialState,

    reducers : {
        setCommentList : (state, action) => {
            return state = action.payload
        },
        clearCommentList : (state) => {
            return state = []
        },
    },
})

export default commentList
export const { setCommentList, clearCommentList } = commentList.actions