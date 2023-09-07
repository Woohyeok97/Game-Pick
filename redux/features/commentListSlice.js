import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const commentList = createSlice({
    name : 'commentList',
    initialState,

    reducers : {
        setCommentList : (state, action) => {
            state.push(...action.payload)
        },
        clearCommentList : (state) => {
            return state = []
        },
        addComment : (state, action) => {
            state.unshift(action.payload)
        },
        deleteComment : (state, action) => {
            const filtered = state.filter((item) => item._id != action.payload)
            return state = filtered
        }
    },
})

export default commentList
export const { setCommentList, clearCommentList, addComment, deleteComment } = commentList.actions