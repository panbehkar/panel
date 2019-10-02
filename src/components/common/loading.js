import React, { useContext } from "react";
import { Spin, Icon } from "antd";
import { SideContext } from "../../contexts/sideContext";

const Loading = () => {
	const { sideOpen } = useContext(SideContext);
	const spinIcon = <Icon type="loading" style={{ fontSize: "5rem" }} spin />;
	return (
		<div className={`p-loading${sideOpen ? " push" : ""}`}>
			<Spin indicator={spinIcon} />
		</div>
	);
};

export default Loading;
