import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Menu } from 'antd';
const { SubMenu } = Menu;

class SideMenu extends Component {
    state = {
        openKeys: ['2']
    };
    rootSubmenuKeys = ['2', '3', '4'];

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    render() {
        return (
            <Menu
                className="p-aside-menu"
                mode="inline"
                // defaultSelectedKeys={['1']}
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
            >
                <Menu.Item key="1" className="aside-menu-item">
                    <Link to="/">
                        <i className="far fa-tachometer-alt-slow"></i>
                        <span>Dashboard</span>
                    </Link>
                </Menu.Item>
                <SubMenu
                    className="aside-menu-item"
                    key="2"
                    title={
                        <div>
                            <i className="far fa-stream"></i>
                            <span>List</span>
                        </div>
                    }
                >
                    <Menu.Item key="2-1">
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2-2">
                        <Link to="/list">List</Link>
                    </Menu.Item>
                    <Menu.Item key="2-3">
                        <Link to="/form">Form</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu
                    className="aside-menu-item"
                    key="3"
                    title={
                        <div>
                            <i className="far fa-tools"></i>
                            <span>Tools</span>
                        </div>
                    }
                >
                    <Menu.Item key="3-1">
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="3-2">
                        <Link to="/list">List</Link>
                    </Menu.Item>
                    <Menu.Item key="3-3">
                        <Link to="/form">Form</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu
                    className="aside-menu-item"
                    key="4"
                    title={
                        <div>
                            <i className="far fa-chart-pie-alt"></i>
                            <span>Stats</span>
                        </div>
                    }
                >
                    <Menu.Item key="4-1">
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="4-2">
                        <Link to="/list">List</Link>
                    </Menu.Item>
                    <Menu.Item key="4-3">
                        <Link to="/form">Form</Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

export default SideMenu;