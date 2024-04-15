import { Content } from "antd/es/layout/layout";
import BreadcumbView from "../../../common/components/breadcrumb/Breadcrumb.view";
import FormSearchBasicView from "../../../common/components/form-search-basic/FormSearchBasic.view";
import { FieldControl, FieldGroup } from "react-reactive-form";
import TableView from "../../../common/components/table/Table.view";
import InputText from "../../../common/controls/InputText";
import Document1Detail from "./document1-detail/Document1Detail";

export const Document1View = (props: any) => {

	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'Age',
			dataIndex: 'age',
			key: 'age',
		},
		{
			title: 'Address',
			dataIndex: 'address',
			key: 'address',
		},
	];

	return (
		<div>
			<BreadcumbView>
				<>
					<button
						type="button"
						className="btn btn-primary"
						onClick={() => props.handleOpenDialog()}
					>
						<i className="isax-add-circle1 mr-2"></i>Thêm danh mục
					</button>

					<button
						type="button"
						className="btn btn-primary ml-2"
					>
						<i className="isax-add-circle1 mr-2"></i>Import
					</button>
				</>
			</BreadcumbView>
			<Content>
				<FormSearchBasicView>
					<FieldGroup
						control={props.formSearch}
						render={({ get, invalid }) => (
							<form onSubmit={props.handleSubmit}>
								<FieldControl
									name="q"
									render={InputText}
								/>
								<button className="hide" type="submit" />
							</form>
						)}
					/>
				</FormSearchBasicView>
				<TableView dataSource={props.listData} columns={columns}></TableView>
			</Content>
		</div >
	);
}

export default Document1View;
