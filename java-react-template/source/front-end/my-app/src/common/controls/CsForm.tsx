// import React from 'react'
// import { Input, InputProps, Select } from 'antd'
// import { Controller } from 'react-hook-form';
// import CsInput from './CsInput';

// declare const FormHTMLTypes: readonly ["input", "select"];
// export type FormHTMLType = typeof FormHTMLTypes[number];

// interface CsFormProps extends InputProps {
//   control: any;
//   name: string;
//   elementHtml: FormHTMLType;
// }

// // const CsSelect: React.FC<any> = ({ field, ...rest }) => {
// //   return <Select {...field} {...rest} />;
// // };


// const CsForm: React.FC<CsFormProps> = ({ control, name, elementHtml, ...rest }) => {

//   // const renderSelect = (field: any) => {
//   //   return (
//   //     <span className="input-label">
//   //       {label && <label>{required && <span className="required">* </span>}{label}</label>}
//   //       <CsSelect field={field} {...rest} />
//   //     </span>
//   //   );
//   // };

//   return (
//     <Controller name={name} control={control} defaultValue="" render={({ field }) => 
//         elementHtml === "input" ? <CsInput field={field} {...rest} /> :
//         // elementHtml === "select" ? renderSelect(field) :
//         <></>
//       } />
//   )
// }

// export default CsForm

