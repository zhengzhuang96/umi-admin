import React from 'react';
import { Layout, Dropdown, Avatar, Space, Typography, Button } from 'antd';
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  DownOutlined,
  MenuOutlined
} from '@ant-design/icons';
import { useNavigate, useModel } from '@umijs/max';
import { useSnapshot } from 'valtio';
import { authAPI } from '@/services/api';
import { layoutActions, layoutStore } from '@/stores/layout';
import styles from './index.less';

const { Header: AntHeader } = Layout;
const { Text } = Typography;

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { initialState } = useModel('@@initialState');
  const userInfo = initialState?.userInfo;
  const layout = useSnapshot(layoutStore);

  const handleLogout = async () => {
    try {
      await authAPI.logout();
      navigate('/login');
    } catch (error) {
      console.error('退出失败:', error);
      navigate('/login');
    }
  };

  const handleMenuClick = (key: string) => {
    switch (key) {
      case 'profile':
        // 跳转到个人中心
        break;
      case 'settings':
        // 跳转到设置页面
        break;
      case 'logout':
        handleLogout();
        break;
      default:
        break;
    }
  };

  const userMenuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: '个人中心',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: '系统设置',
    },
    {
      type: 'divider' as const,
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
      danger: true,
    },
  ];

  return (
    <AntHeader className={styles.header}>
      <div className={styles.headerContent}>
        {/* Logo区域 */}
        <div className={styles.logo}>
          {/* 汉堡菜单按钮 - 移动端显示 */}
          <Button
            type="text"
            icon={<MenuOutlined />}
            className={styles.hamburgerButton}
            onClick={layoutActions.toggleSidebar}
          />
          <div className={styles.logoIcon}>
            <span className={styles.logoText}>Umi</span>
          </div>
          <span className={styles.logoTitle}>Admin</span>
        </div>

        {/* 用户信息区域 */}
        <div className={styles.userInfo}>
          <Dropdown
            menu={{
              items: userMenuItems,
              onClick: ({ key }) => handleMenuClick(key),
            }}
            placement="bottomRight"
            trigger={['click']}
          >
            <div className={styles.userDropdown}>
              <Space>
                <Avatar
                  size="small"
                  src={userInfo?.avatar}
                  icon={<UserOutlined />}
                  className={styles.avatar}
                />
                <Text className={styles.userName}>
                  {userInfo?.name || '用户'}
                </Text>
                <DownOutlined className={styles.dropdownIcon} />
              </Space>
            </div>
          </Dropdown>
        </div>
      </div>
    </AntHeader>
  );
};

export default Header;
