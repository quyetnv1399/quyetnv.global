import React from 'react'
import '../../css/input-label.css'
import { Input, InputProps, Select } from 'antd'
import { Controller } from 'react-hook-form';

declare const FormHTMLTypes: readonly ["input", "select"];
export type FormHTMLType = typeof FormHTMLTypes[number];

interface CsFormProps extends InputProps {
  control: any;
  name: string;
  label?: any;
  required?: boolean;
  elementHtml: FormHTMLType;
  options?: any[];
}

const CsInput: React.FC<any> = ({ field, ...rest }) => {
  return <Input {...field} {...rest} />;
};

const CsSelect: React.FC<any> = ({ field, ...rest }) => {
  return <Select {...field} {...rest} />;
};


const CsForm: React.FC<CsFormProps> = ({control, name, label, required, elementHtml, ...rest }) => {

  const renderInput = (field: any) => {
    return (
      <span className="input-label">
        {label && <label>{required && <span className="required">* </span>}{label}</label>}
        <CsInput field={field} {...rest} />
      </span>
    );
  };

  const renderSelect = (field: any) => {
    return (
      <span className="input-label">
        {label && <label>{required && <span className="required">* </span>}{label}</label>}
        <CsSelect field={field} {...rest} />
      </span>
    );
  };

  return (
    <Controller name={name} control={control} defaultValue="" render={({ field }) => 
        elementHtml === "input" ? renderInput(field) :
        elementHtml === "select" ? renderSelect(field) :
        <></>
      } />
  )
}

export default CsForm

