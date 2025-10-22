import React, { useState, useEffect } from 'react';
import { Layout, Menu, Divider } from 'antd';
import {
  DashboardOutlined,
  FileTextOutlined,
  FileProtectOutlined,
  CheckCircleOutlined,
  EditOutlined,
  UserOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { useLocation, useNavigate, useIntl } from 'umi';
import { useSnapshot } from 'valtio';
import { layoutStore, layoutActions } from '../../../../stores/layout';
import styles from './index.less';

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  const intl = useIntl();
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const location = useLocation();
  const navigate = useNavigate();
  const layout = useSnapshot(layoutStore);

  // 根据当前路径自动展开对应的菜单项
  useEffect(() => {
    const path = location.pathname;
    const keys: string[] = [];

    // 检查是否在文档相关页面
    if (path.startsWith('/documents')) {
      keys.push('/documents');
    }

    // 检查是否在审批相关页面
    if (path.startsWith('/approvals')) {
      keys.push('/approvals');
    }

    setOpenKeys(keys);
  }, [location.pathname]);

  const menuItems = [
    {
      key: '/dashboard',
      icon: <DashboardOutlined />,
      label: intl.formatMessage({ id: 'menu.dashboard' }),
    },
    {
      key: '/documents',
      icon: <FileTextOutlined />,
      label: intl.formatMessage({ id: 'menu.documents' }),
      children: [
        {
          key: '/documents/all',
          label: intl.formatMessage({ id: 'menu.documents.all' }),
        },
        {
          key: '/documents/batch',
          label: intl.formatMessage({ id: 'menu.documents.batch' }),
        },
      ],
    },
    {
      key: '/templates',
      icon: <FileProtectOutlined />,
      label: intl.formatMessage({ id: 'menu.templates' }),
    },
    {
      key: '/approvals',
      icon: <CheckCircleOutlined />,
      label: intl.formatMessage({ id: 'menu.approvals' }),
      children: [
        {
          key: '/approvals/my-approvals',
          label: intl.formatMessage({ id: 'menu.approvals.my' }),
        },
        {
          key: '/approvals/my-submissions',
          label: intl.formatMessage({ id: 'menu.approvals.submissions' }),
        },
      ],
    },
    {
      key: '/signatures',
      icon: <EditOutlined />,
      label: intl.formatMessage({ id: 'menu.signatures' }),
    },
    {
      key: '/account',
      icon: <UserOutlined />,
      label: intl.formatMessage({ id: 'menu.account' }),
    },
    {
      key: '/settings',
      icon: <SettingOutlined />,
      label: intl.formatMessage({ id: 'page.settings.title' }),
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
          {/* 菜单项 - 直接从工作台开始 */}
          <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            openKeys={openKeys}
            onOpenChange={setOpenKeys}
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
