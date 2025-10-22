import React from 'react';
import { Outlet } from 'umi';
import { Layout, ConfigProvider } from 'antd';
import { useSnapshot } from 'valtio';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { layoutStore } from '@/stores/layout';
import configManager from '@/utils/config';
import styles from './index.less';

const { Content } = Layout;

const BasicLayout: React.FC = () => {
  const layout = useSnapshot(layoutStore);

  // 获取主题配置
  const themeConfig = configManager.getThemeConfig();
  const layoutConfig = configManager.getLayoutConfig();

  // 使用动态主题色
  const themeColor = layout.themeColor || themeConfig?.primaryColor || '#1890ff';

  // 配置主题
  const theme = {
    token: {
      colorPrimary: themeColor,
    },
    components: {
      Layout: {
        bodyBg: '#f5f5f5',
        headerBg: '#fff',
        siderBg: '#fff',
      },
    },
  };

  return (
    <ConfigProvider theme={theme}>
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
    </ConfigProvider>
  );
};

export default BasicLayout;
