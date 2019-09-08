import React, { useContext } from 'react';
import SideUser from './SideUser';
import SideMenu from './SideMenu';
import { SideContext } from '../context/sideContext';

const Side = () => {
    const [{ sideMenuOpen }] = useContext(SideContext);
    // const { sideMenuOpen } = side;
    return (
        <aside className={`p-aside${sideMenuOpen ? ' open' : ''}`}>
            <SideUser />
            <SideMenu />
        </aside >
    );
};

export default Side;