import React from 'react';
import Side from "./side/side";
import Wrapper from './wrapper';
import { SideProvider } from '../contexts/sideContext';

const Dashboard = () => {
    return (
        <SideProvider>
            <Side />
            <Wrapper />
        </SideProvider>
    );
}

export default Dashboard;