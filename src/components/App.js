import React from 'react';
import Side from "./side/side";
import Wrapper from './wrapper';
import { SideProvider } from '../contexts/sideContext';

const App = () => {
    return (
        <main className="p-container">
            <SideProvider>
                <Side />
                <Wrapper />
            </SideProvider>
        </main>
    );
}

export default App;