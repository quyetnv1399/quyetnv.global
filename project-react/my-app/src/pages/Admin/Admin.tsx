import React from 'react'
import { DashboardOutlined, SolutionOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const getItem = (label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[],type?: 'group'): MenuItem => {
    return { key, icon, children, label, type} as MenuItem;
  }

const navHeader: MenuItem[] = [
    getItem('Nav 1', 'nav1'),
    getItem('Nav 2', 'nav2'),
]

const navSider: MenuItem[] = [
    getItem('Dashboard', '', <DashboardOutlined /> ),
    getItem('Quản lý', 'manage', <SolutionOutlined />),
]

const Admin = () => {

    const navigate = useNavigate();

    const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();

    const handleClick = (key?:any) => {
        if(key){
            navigate(key);
        }
    }

  return (
    <Layout style={{ position: 'fixed', width: '100%', height: '100%' }}>
    <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={navHeader}
            style={{ flex: 1, minWidth: 0 }}
        />
    </Header>
    <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
        <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0, overflowY: 'auto' }}
            items={navSider}
            onClick={({key}) => handleClick(key)}
        />
        </Sider>
        <Layout style={{ padding: '0 24px 24px', height: '100%' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Admin</Breadcrumb.Item>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <Content
            style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
            }}
            >
            <Outlet />
            </Content>
        </Layout>
    </Layout>
  </Layout>
  )
}

export default Admin
