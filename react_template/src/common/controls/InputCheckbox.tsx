
export const InputCheckbox = (props: ({ handler: any, touched: any, hasError: any, meta: any })) => {
	return (
		<div className="input-checkbox">
			<input {...props.handler("checkbox")} />
		</div>
	);
}

export default InputCheckbox;
