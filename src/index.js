import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss'
import App from './components/App';
// import fa_IR from 'antd/es/locale/fa_IR'
import en_US from 'antd/es/locale/en_US'
import { ConfigProvider } from 'antd';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <ConfigProvider locale={en_US}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ConfigProvider>, document.getElementById('root'));
