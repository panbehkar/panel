import React from 'react';
import Side from "./side/side";
import Wrapper from './wrapper';
import { SideProvider } from '../contexts/sideContext';
import { AuthProvider } from '../contexts/authContext';

const Dashboard = () => {
    return (
        <AuthProvider>
            <SideProvider>
                <Side />
                <Wrapper />
            </SideProvider>
        </AuthProvider>
    );
}

export default Dashboard;