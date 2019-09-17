import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss'
import App from './components/app';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));
