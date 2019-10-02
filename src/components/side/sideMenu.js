import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
const { SubMenu } = Menu;

const SideMenu = () => {
	const [state, setState] = useState({ openKeys: ["2"] });
	const rootSubmenuKeys = ["2", "3", "4"];

	const onOpenChange = openKeys => {
		const latestOpenKey = openKeys.find(
			key => state.openKeys.indexOf(key) === -1
		);
		if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
			setState({ openKeys });
		} else {
			setState({
				openKeys: latestOpenKey ? [latestOpenKey] : []
			});
		}
	};

	return (
		<Menu
			className="p-aside-menu"
			mode="inline"
			// defaultSelectedKeys={['1']}
			openKeys={state.openKeys}
			onOpenChange={onOpenChange}
		>
			<Menu.Item key="1" className="aside-menu-item">
				<Link to="/dashboard">
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
					<Link to="/dashboard">Home</Link>
				</Menu.Item>
				<Menu.Item key="2-2">
					<Link to="/dashboard/list">List</Link>
				</Menu.Item>
				<Menu.Item key="2-3">
					<Link to="/dashboard/form">Form</Link>
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
					<Link to="/dashboard">Home</Link>
				</Menu.Item>
				<Menu.Item key="3-2">
					<Link to="/dashboard/list">List</Link>
				</Menu.Item>
				<Menu.Item key="3-3">
					<Link to="/dashboard/form">Form</Link>
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
					<Link to="/dashboard">Home</Link>
				</Menu.Item>
				<Menu.Item key="4-2">
					<Link to="/dashboard/list">List</Link>
				</Menu.Item>
				<Menu.Item key="4-3">
					<Link to="/dashboard/form">Form</Link>
				</Menu.Item>
			</SubMenu>
		</Menu>
	);
};

export default SideMenu;
