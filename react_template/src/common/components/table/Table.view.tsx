import Table from "antd/es/table/Table";

export const TableView = (props: ({ dataSource: any[], columns: any[] })) => {
	return (
		<div className="table-202404101616">
			<div className="title-table">
				<div className="title-bottom">Kết quả tìm kiếm</div>
			</div>
			<Table dataSource={props.dataSource} columns={props.columns} bordered />
		</div>
	);
}

export default TableView;
