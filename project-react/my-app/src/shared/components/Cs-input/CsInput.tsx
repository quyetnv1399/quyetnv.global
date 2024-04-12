import React from 'react'
import '../../css/input-label.css'
import { Input, InputProps } from 'antd'

interface CsInputProps extends InputProps {
    label?: any;
    required?: boolean;
}

const CsInput: React.FC<CsInputProps> = ({label, required, ...rest}) => {
  return (
    <span className="input-label">
        {label ? 
            <label>
                {required ? <span className="required">* </span> : null}
                {label}
            </label> : null}
        <Input {...rest}  />
    </span>
  )
}

export default CsInput
