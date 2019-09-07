import React from 'react';
import SideUser from './SideUser';
import SideMenu from './SideMenu';

const Side = ({ sideMenuOpen }) => {
    return (
        <aside className={`p-aside${sideMenuOpen ? ' open' : ''}`}>
            <SideUser />
            <SideMenu />
        </aside >
    );
};

export default Side;