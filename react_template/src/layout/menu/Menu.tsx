import { FunctionComponent } from "react";
import MenuView from "./Menu.view";

export const Menu: FunctionComponent = () => {
	let listMenu = [
		{
			icon: 'isax-chart-square',
			label: 'TRANG CHỦ',
			url: '/',
			children: null,
			level: 0,
		},
		{
			icon: 'isax-document-text1',
			label: 'CODE MẪU',
			url: null,
			level: 1,
			children: [
				{
					icon: 'isax-clipboard-text1',
					label: 'MẪU CƠ BẢN',
					url: '/document/document1',
					level: 2,
					children: null,
				},
				{
					icon: 'isax-task-square1',
					label: 'MẪU NÂNG CAO',
					url: '/document/document2',
					level: 2,
					children: null,
				},
			],
		}];

	return MenuView({ listMenu });
};

export default Menu;
