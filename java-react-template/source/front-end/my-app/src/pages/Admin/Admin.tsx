import React from 'react'
import { CaretDownFilled, DashboardOutlined, LoginOutlined, LogoutOutlined, SettingOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Dropdown, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

import './style.css'

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

const items: MenuProps['items'] = [
    {
      label: 'Thông tin cá nhân',
      key: '0',
      icon: <UserOutlined />,
    },
    {
      label: 'Cài đặt',
      key: '1',
      icon: <SettingOutlined />,
      
    },
    {
      type: 'divider',
    },
    {
      label: 'Đăng xuất',
      key: '4',
      icon: <LogoutOutlined />,
    },
  ];

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
        <div className="demo-logo mr-5 text-white" >LOGO</div>
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={navHeader}
            style={{ flex: 1, minWidth: 0 }}
        />
         <Dropdown menu={{ items }} trigger={['click']}>
            <div className="account">
                <div className="avatar">
                    <img src="https://geo-static.traxsource.com/files/images/213973340b3b5dc3b980f7d5c07183e0.jpg" width={45} alt="avatar" />
                </div>
                <div className="dot-dropdown">
                    <div className="icon">
                        <CaretDownFilled />
                    </div>
                </div>
            </div>
        </Dropdown>
        
        
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
