import React, { useState, useEffect } from 'react';
import { Layout, Menu, Divider } from 'antd';
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { useLocation, useNavigate } from '@umijs/max';
import { useSnapshot } from 'valtio';
import { layoutStore, layoutActions } from '@/stores/layout';
import styles from './index.less';

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const layout = useSnapshot(layoutStore);

  const menuItems = [
    {
      key: '/dashboard',
      icon: <DashboardOutlined />,
      label: '仪表盘',
    },
    {
      key: '/users',
      icon: <UserOutlined />,
      label: '用户管理',
    },
    {
      key: '/settings',
      icon: <SettingOutlined />,
      label: '系统设置',
    },
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      {/* 移动端遮罩层 */}
      <div
        className={`${styles.mobileOverlay} ${layout.sidebarVisible ? styles.mobileOverlayVisible : ''}`}
        onClick={layoutActions.hideSidebar}
      />

      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className={`${styles.sidebar} ${!layout.sidebarVisible ? styles.mobileHidden : ''}`}
        width={240}
        collapsedWidth={80}
      >
        {/* 菜单容器 - 可滚动 */}
        <div className={styles.menuContainer}>
          {/* 菜单项 - 直接从仪表盘开始 */}
          <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            items={menuItems}
            onClick={(info) => {
              handleMenuClick(info);
              // 移动端点击菜单项后自动关闭菜单
              if (window.innerWidth <= 768) {
                layoutActions.hideSidebar();
              }
            }}
            className={styles.menu}
          />
        </div>

        {/* 收起按钮固定在底部 */}
        <div className={styles.collapseContainer}>
          <Divider style={{ margin: '8px 0' }} />
          <div
            className={styles.collapseButton}
            onClick={toggleCollapsed}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            {!collapsed && <span style={{ marginLeft: 8 }}>收起</span>}
          </div>
        </div>
      </Sider>
    </>
  );
};

export default Sidebar;
