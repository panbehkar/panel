import React, { useContext } from 'react';
import SideUser from './sideUser';
import SideMenu from './sideMenu';
import { SideContext } from '../../contexts/sideContext';

const Side = () => {
    const { sideOpen } = useContext(SideContext);
    return (
        <aside className={`p-aside${sideOpen ? ' open' : ''}`}>
            <SideUser />
            <SideMenu />
        </aside >
    );
};

export default Side;