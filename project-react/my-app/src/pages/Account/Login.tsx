import { Button, Card, Checkbox, Form, FormProps, Input, Tabs, TabsProps } from 'antd';
import React from 'react'
import CsInput from '../../shared/components/Cs-input/CsInput';
import CsSelect from '../../shared/components/Cs-select/CsSelect';

const Login = () => {
    
  return (
    <div className="flex justify-content-center" style={{ background: '#f0f2f5', width: '100%', height: '100%', position: 'fixed' }}>
        <Card title="Đăng nhập" bordered={false} style={{ width: '400px', height: '500px', marginTop: "10rem" }}>
            <SignIn />
        </Card>
    </div>
  )
}

export default Login;


export function SignIn() {

    const options = [
        {
          value: '1',
          label: 'Not Identified',
        },
        {
          value: '2',
          label: 'Closed',
        },
        {
          value: '3',
          label: 'Communicated',
        },
        {
          value: '4',
          label: 'Identified',
        },
        {
          value: '5',
          label: 'Resolved',
        },
        {
          value: '6',
          label: 'Cancelled',
        },
      ]

    return (
        <>
            <form>
                <div className="grid">
                    <div className="col-12">
                        <CsInput type="text" label="E-mail" required placeholder="Nhập E-mail"   />
                    </div>
                    <div className="col-12">
                        <CsSelect placeholder="Search to Select" label="Chọn" required className="w-full"
                            options={options}
                            showSearch
                            optionFilterProp="children"
                            filterOption={(input, option) => typeof option?.label === 'string' && option.label.includes(input)}
                            filterSort={(optionA, optionB) => typeof optionA?.label === 'string' && typeof optionB?.label === 'string'
                                ? optionA.label.toLowerCase().localeCompare(optionB.label.toLowerCase())
                                : 0
                            }
                            
                        />
                    </div>
                </div>
            </form>
        </>
    )
}

export function Register(){
    return (
       <></>
    )
}