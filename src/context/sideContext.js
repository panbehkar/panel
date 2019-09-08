import React, { createContext, useState } from 'react';

export const SideContext = createContext();

export const SideProvider = ({ children }) => {
    const [side, setSide] = useState({ sideMenuOpen: false })
    return (
        <SideContext.Provider value={[side, setSide]}>
            {children}
        </SideContext.Provider>
    );
}

// export default SideContext;