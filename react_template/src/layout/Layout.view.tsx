import { Layout } from "antd";
import "./Layout.style.scss";
import Sider from "antd/es/layout/Sider";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Menu from "./menu/Menu";
import Navbar from "./navbar/Navbar";

export const LayoutView = () => {
  const [collapsed, setCollapsed] = useState(true);

  console.log('render html LayoutView');
  return (
    <div className="layout-202404091028">
      <Layout>
        <Navbar open={collapsed} onChange={(event) => setCollapsed(event)} />
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <Menu />
          </Sider>
          <Layout className="content-page">
            <Outlet />
          </Layout>
        </Layout>
      </Layout>
    </div >
  );
};
