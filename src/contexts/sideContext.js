import React, { createContext, useState } from 'react';

export const SideContext = createContext();

export const SideProvider = ({ children }) => {
    const [sideOpen, setSideOpen] = useState(false);
    const sideToggle = () => {
        setSideOpen(!sideOpen);
    };
    return (
        <SideContext.Provider value={{ sideOpen, sideToggle }}>
            {children}
        </SideContext.Provider>
    );
};