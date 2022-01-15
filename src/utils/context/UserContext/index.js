import React, { createContext, useReducer } from 'react'
import { reducer } from './Reducer';

export const UserContext = createContext();

export function UserContextProvider({children}) {
    const initialState = {
        user: {},
        wallet: 0
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <UserContext.Provider value = {{ state:state, dispatch:dispatch }}>
            { children }
        </UserContext.Provider>
    )
}
