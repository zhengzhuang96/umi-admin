import React from 'react';
import { Outlet } from '@umijs/max';
import { Layout } from 'antd';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import styles from './index.less';

const { Content } = Layout;

const BasicLayout: React.FC = () => {
  return (
    <Layout className={styles.layout}>
      {/* 顶部导航栏 */}
      <Header />

      <Layout className={styles.mainLayout}>
        {/* 侧边菜单 - 紧贴顶部导航栏 */}
        <Sidebar />

        {/* 内容区域 */}
        <Layout className={styles.contentLayout}>
          <Content className={styles.content}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
