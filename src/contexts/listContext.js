import React, { createContext, useReducer } from 'react';
import ListReducer from '../reducers/listReducer';

export const ListContext = createContext();

const listInitial = {
    isLoading: false,
    isError: false,
    data: [],
};

export const ListProvider = ({ children }) => {
    const [list, dispatch] = useReducer(ListReducer, listInitial);
    return (
        <ListContext.Provider value={{ list, dispatch }}>
            {children}
        </ListContext.Provider>
    );
};