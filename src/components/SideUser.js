import React, { Component } from 'react';
import { Avatar } from 'antd';

class SideUser extends Component {
    render() {
        return (
            <div className="p-aside-user">
                <Avatar icon="user" style={{ backgroundColor: '#d0e8ff' }} size={120} />
                <h4>Abolfazl Panbehkar</h4>
            </div>
        );
    }
}

export default SideUser;