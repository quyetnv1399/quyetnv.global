import { Link } from "react-router-dom";
import "./Menu.style.scss";
import { Menu, MenuProps } from "antd";

export const MenuView = (props: ({
	listMenu: any[]
})) => {

	// xử lý lại mảng listMenu sang Menu template
	let listMenuArray: any[] = [];
	let i = 1;
	const convertTreeToArray = (items: any[], parent: any = null) => {
		for (const item of items) {
			const key = `${i}`;
			item.key = key;
			item.parent = parent;
			listMenuArray.push(item);
			i++;
			if (item.children) {
				convertTreeToArray(item.children, key);
			}
		}
	}

	convertTreeToArray(props.listMenu);

	// map label and icon tempalte
	for (const item of listMenuArray) {
		item.label = (
			<Link to={item.url}>
				<span>{item.label}</span>
			</Link>
		)
		item.icon = (<i className={item.icon}></i>)
	}

	// set tree to listMenu
	let listMenu: MenuProps['items'] = props.listMenu;

	return (
		<Menu
			mode="inline"
			items={listMenu}
		/>
	);
}

export default MenuView;
