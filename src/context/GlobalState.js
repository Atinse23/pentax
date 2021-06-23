import { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    posts: []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    const updatePostsSuccessful = (data) => {
        dispatch({ type: 'UPDATE_POST_SUCCESS', payload: data })
    }

    const updatePostsFailed = () => {
        dispatch({ type: 'UPDATE_POST_FAILURE' })
    }

    return <GlobalContext.Provider value={{ posts: state.posts, updatePostsSuccessful, updatePostsFailed }} >
        {children}
    </GlobalContext.Provider>

}