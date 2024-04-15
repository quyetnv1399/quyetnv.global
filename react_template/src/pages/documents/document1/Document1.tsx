import { FunctionComponent, useState, useEffect, useContext } from "react";
import Document1View from "./Document1.view";
import { FormBuilder, FormGroup } from "react-reactive-form";
import Document1Detail from "./document1-detail/Document1Detail";
import { FormExtention } from "../../../common/extentions/FormExtention";
import { useDialog } from "../../../common/services/dialog/Dialog.provider";
import { DialogSize } from "../../../common/services/dialog/Dialog.service";
import { useLoading } from "../../../common/services/loading/Loading.provider";
import { useDataShare } from "../../../common/services/data-share/DataShare.provider";

export const Document1: FunctionComponent = (props: any) => {

	// use các service cần sử dụng
	const { dialogService } = useDialog();

	const { loadingService } = useLoading();

	const { dataShareService } = useDataShare();

	const [listData, setListData] = useState<any[]>([]);


	const [formSearch] = useState<FormGroup>(
		FormBuilder.group({
			q: ['']
		})
	);

	const getData = () => {
		const dataSource = [
			{
				key: '1',
				name: 'Mike',
				age: 32,
				address: '10 Downing Street',
			},
			{
				key: '2',
				name: 'John',
				age: 42,
				address: '10 Downing Street',
			},
		];

		if (formSearch.invalid) return;

		loadingService.openLoading();
		setTimeout(() => {
			setListData(dataSource);
			loadingService.closeLoading();
		}, 2000);
	}

	const handleSubmit = (e: any) => {
		e.preventDefault();

		// báo lỗi controll nếu lỗi
		FormExtention.markAllAsTouched(formSearch);
		if (formSearch.invalid) return;
		getData();
	}

	const handleOpenDialog = (mode: string = 'add', item: any = null) => {
		dialogService.openDialog(option => {
			option.title = mode === 'view' ? 'Xem dữ liệu' : 'Thêm dữ liệu';
			if (mode === 'edit') option.title = 'Sửa dữ liệu';
			option.mode = mode;
			option.size = DialogSize.small;
			option.content = (<Document1Detail onClose={(event) => handleCloseDialog(event)} />)
		});
	}

	const handleCloseDialog = (hasChange: boolean) => {
		dialogService.closeDialog();
		if (hasChange) {
			// có thay đổi dữ liệu refesh data
			getData();
		}
	}

	// init page
	useEffect(() => {
		console.log('useEffect');

		dataShareService.getValueChange('test', (x) => {
			console.log('useEffect sub test by document:', x);
		});

		dataShareService.setValue('test', 'set by document1');
	}, []);

	console.log('render html Document1');
	return Document1View({ formSearch, listData, handleSubmit, handleOpenDialog, handleCloseDialog });
};

export default Document1;
