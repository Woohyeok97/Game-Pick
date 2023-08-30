'use client'
import { Provider } from 'react-redux'
import store from './index'


export default function ReduxProvider({ children }) {

    return (
        <Provider store={store}>{ children }</Provider>
    )
}