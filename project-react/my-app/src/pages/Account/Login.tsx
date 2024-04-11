import { Button, Card, Checkbox, Form, FormProps, Input, Tabs, TabsProps } from 'antd';
import React from 'react'

const Login = () => {
    
  return (
    <div className="flex justify-content-center" style={{ background: '#f0f2f5', width: '100%', height: '100%', position: 'fixed' }}>
        <Card bordered={false} style={{ width: 'fit-content', height: 'fit-content', marginTop: "10rem" }}>
            <Tabs
                defaultActiveKey="1"
                tabPosition="top"
                items={ items }
            />
        </Card>

    </div>
  )
}

export default Login;

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Đăng nhập',
      children: <SignIn />,
    },
    {
      key: '2',
      label: 'Đăng ký',
      children: <Register />,
    },
  ];

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log('Success:', values);
  };
  
const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

export function SignIn() {
    return (
        <Form name="basic" style={{ maxWidth: 600 }} initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >

        <Form.Item<FieldType> label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]} >
            <Input className="w-20rem" />
        </Form.Item>

        <Form.Item<FieldType> label="Password"  name="password" rules={[{ required: true, message: 'Please input your password!' }]} >
            <Input.Password />
        </Form.Item>

        <Form.Item<FieldType> name="remember" valuePropName="checked" wrapperCol={{ offset: 0, span: 6 }}>
            <Checkbox>Ghi nhớ</Checkbox>
        </Form.Item>

        <Form.Item >
            <Button type="primary" htmlType="submit" className="w-full">Đăng nhập</Button>
        </Form.Item>

        </Form>
    )
}

export function Register(){
    return (
        <Form name="basic" style={{ maxWidth: 600 }} initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >

        <Form.Item<FieldType> label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]} >
            <Input className="w-20rem" />
        </Form.Item>

        <Form.Item<FieldType> label="Password"  name="password" rules={[{ required: true, message: 'Please input your password!' }]} >
            <Input.Password />
        </Form.Item>

        <Form.Item >
            <Button type="primary" htmlType="submit" className="w-full">Đăng ký</Button>
        </Form.Item>

        </Form>
    )
}