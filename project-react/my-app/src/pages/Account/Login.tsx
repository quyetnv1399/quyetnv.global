import React from 'react'
import { Button, Card, Checkbox } from 'antd';
import { useForm } from 'react-hook-form';
import CsForm from '../../shared/components/Cs-form/CsForm';

const Login = () => {

  const { control, handleSubmit,  watch, formState: { errors }} = useForm()

  let options=[
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

  const onSignIn = (data:any) => {
    console.log(data)
  }

  const onRemember = () => {
    console.log('remember')
  }
    
  return (
    <div className="flex justify-content-center" style={{ background: '#f0f2f5', width: '100%', height: '100%', position: 'fixed' }}>
      <Card title="Đăng nhập" bordered={false} style={{ width: '400px', height: 'fit-content', marginTop: "10rem" }}>
        <form onSubmit={handleSubmit(onSignIn)}>
            <div className="grid">

              <div className="col-12">
                <CsForm elementHtml="input" type="email" name="email" label="E-mail" required control={control} placeholder="Nhập email" />
              </div>

              <div className="col-12">
                <CsForm elementHtml="input" type="password" name="password" label="Password" required control={control} placeholder="Nhập password" />
              </div>

              <div className="col-12">
                <CsForm elementHtml="select" className="w-full" options={options} name="city" label="City" required control={control} placeholder="Chọn" />
              </div>

              <div className="col-12 flex">
                <Checkbox onChange={onRemember}>Ghi nhớ</Checkbox>
              </div>
              
              <div className="col-12">
                <Button htmlType="submit" type="primary" className="w-full mt-1">Đăng nhập</Button>
              </div>
            </div>
          </form>
      </Card>
    </div>
  )
}

export default Login;
