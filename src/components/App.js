import React from 'react';
import Main from './main';
import Side from "./Side";
import Wrapper from './wrapper';
import { SideProvider } from '../context/sideContext';

const App = () => {
    return (
        <SideProvider>
            <Main>
                <Side />
                <Wrapper />
            </Main>
        </SideProvider>
    );
}

export default App;