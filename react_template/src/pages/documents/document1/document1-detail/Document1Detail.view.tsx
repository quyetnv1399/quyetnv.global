import React from "react";
import { FieldControl, FieldGroup } from "react-reactive-form";
import InputText from "../../../../common/controls/InputText";
import { CloseOutlined, PlusCircleOutlined } from "@ant-design/icons";
import DialogButtonClose from "../../../../common/services/dialog/DialogButtonClose";

export const Document1DetailView = (props: any) => {
	return (<div>
		<DialogButtonClose onClick={() => props.closeDialog()} />

		<FieldGroup
			control={props.myForm}
			render={({ get, invalid }) => (
				<form onSubmit={props.handleSubmit}>
					<div className="row">
						<div className="col-md-6">
							<FieldControl
								name="code"
								meta={{ label: "Mã" }}
								render={InputText}
							/>
						</div>

						<div className="col-md-6">
							<FieldControl
								name="name"
								meta={{ label: "Tên" }}
								render={InputText}
							/>
						</div>

						<div className="col-md-12">

						</div>
					</div>

					<div className="list-control-search">
						<button
							type="button"
							className="btn btn-default"
							onClick={() => props.closeDialog()} >
							<CloseOutlined className="mr-2" />
							{props.mode === "view" ? "Đóng" : "Hủy"}
						</button>
						<button
							type="button"
							className="btn btn-primary"
							onClick={() => props.handleSubmit()}
						>
							<PlusCircleOutlined className="mr-2" />Lưu và đóng
						</button >
					</div >
				</form >
			)}
		/>
	</div >);
}

export default Document1DetailView;
