import "./Navbar.style.scss";
import { Header } from "antd/es/layout/layout";
import Button from "antd/es/button";
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined
} from '@ant-design/icons';

export const NavbarView = (props: ({ open: boolean, onChange: (value: boolean) => void })) => {
	return (
		<Header className="navbar-202494191120">
			<Button
				className="btn-menu-collaps"
				type="text"
				icon={props.open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
				onClick={() => props.onChange(!props.open)}
			/>
			<div className="demo-logo" >Logo</div>
		</Header>
	);
}

export default NavbarView;
