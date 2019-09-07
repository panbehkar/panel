import React from 'react';
import { Spin, Icon } from 'antd';

const Loading = ({ sideMenuOpen }) => {
    const spinIcon = <Icon type="loading" style={{ fontSize: '5rem' }} spin />;
    return (
        <div className={`p-loading${sideMenuOpen ? ' push' : ''}`}>
            <Spin indicator={spinIcon} />
        </div>
    );
};

export default Loading;