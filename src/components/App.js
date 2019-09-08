import React from 'react';
import Main from './Main';
import Side from "./Side";
import Wrapper from './Wrapper';
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