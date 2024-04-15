import { FunctionComponent, useEffect, useState } from "react";
import Document1DetailView from "./Document1Detail.view";
import { FormGroup, FormBuilder, Validators } from "react-reactive-form";
import { FormExtention } from "../../../../common/extentions/FormExtention";
import { useDialog } from "../../../../common/services/dialog/Dialog.provider";
import { useDataShare } from "../../../../common/services/data-share/DataShare.provider";

export const Document1Detail: FunctionComponent<({
	id?: string,
	mode?: string,
	onClose: (hasChange: boolean) => void
})> = (props) => {

	const { dialogService } = useDialog();

	const { dataShareService } = useDataShare();

	const [hasChange, setHasChange] = useState<boolean>(false);

	const [myForm] = useState<FormGroup>(
		FormBuilder.group({
			code: ['', Validators.required],
			name: ['', Validators.required]
		})
	);

	const handleSubmit = async (e: any) => {
		if (e) e.preventDefault();

		// báo lỗi controll nếu lỗi
		FormExtention.markAllAsTouched(myForm);

		if (myForm.invalid) return;

		let formData = myForm.getRawValue();
		console.log("Form values", formData);

		// call api

		// set trạng thái đã thêm hoặc sửa dữ liệu
		setHasChange(true);

		await dialogService.alert("Lưu dữ liệu");

		const confirm = await dialogService.confirmData("Bạn có muốn đóng dialog ko?");
		if (confirm) {
			closeDialog();
		}

	}

	const closeDialog = () => {
		props.onClose(hasChange);
	}

	// init page
	useEffect(() => {
		if (props.mode === 'view') myForm.disable();

		dataShareService.getValueChange('test', (x) => {
			console.log('useEffect sub test by document detail:', x);
		});

		dataShareService.setValue('test', 'set by document detail');
	}, []);

	console.log('render html Document1 detail');
	return Document1DetailView({ mode: props.mode, myForm, handleSubmit, closeDialog });
};

export default Document1Detail;
