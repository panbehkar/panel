import React from 'react';
import Main from './Main';
import Side from "./Side";
import Wrapper from './Wrapper';

const App = () => {
    return (
        <Main>
            <Side />
            <Wrapper />
        </Main>
    );
}

export default App;