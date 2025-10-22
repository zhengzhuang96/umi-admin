import React from 'react';
import { Layout, Dropdown, Avatar, Space, Typography, Button, Popover } from 'antd';
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  DownOutlined,
  MenuOutlined,
  BgColorsOutlined
} from '@ant-design/icons';
import { useIntl } from 'umi';
import { useSnapshot } from 'valtio';
import { layoutActions, layoutStore } from '@/stores/layout';
import configManager, { appName } from '@/utils/config';
import LanguageSwitch from '@/components/LanguageSwitch';
import ThemeColorPicker from '@/components/ThemeColorPicker';
import styles from './index.less';

const { Header: AntHeader } = Layout;
const { Text } = Typography;

const Header: React.FC = () => {
  const intl = useIntl();
  const layout = useSnapshot(layoutStore);

  const handleLogout = () => {
    // 清除本地存储的token
    localStorage.removeItem('token');
    // 跳转到登录页
    window.location.href = '/login';
  };

  const handleMenuClick = (key: string) => {
    switch (key) {
      case 'profile':
        // 跳转到个人中心
        window.location.href = '/account';
        break;
      case 'settings':
        // 跳转到设置页面
        window.location.href = '/settings';
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
      label: intl.formatMessage({ id: 'header.profile' }),
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: intl.formatMessage({ id: 'header.settings' }),
    },
    {
      type: 'divider' as const,
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: intl.formatMessage({ id: 'header.logout' }),
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
            <span className={styles.logoText}>{appName.substring(0, 3)}</span>
          </div>
          <span className={styles.logoTitle}>{appName}</span>
        </div>

        {/* 用户信息区域 */}
        <div className={styles.userInfo}>
          <Space size="middle">
            {/* 主题色切换 */}
            <Popover
              content={<ThemeColorPicker />}
              title={intl.formatMessage({ id: 'theme.colorPicker' })}
              trigger="click"
              placement="bottomRight"
            >
              <Button type="text" icon={<BgColorsOutlined />}>
                {intl.formatMessage({ id: 'theme.title' })}
              </Button>
            </Popover>

            {/* 语言切换 */}
            <LanguageSwitch />

            {/* 用户下拉菜单 */}
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
                    icon={<UserOutlined />}
                    className={styles.avatar}
                  />
                  <Text className={styles.userName}>
                    {intl.formatMessage({ id: 'user.admin' })}
                  </Text>
                  <DownOutlined className={styles.dropdownIcon} />
                </Space>
              </div>
            </Dropdown>
          </Space>
        </div>
      </div>
    </AntHeader>
  );
};

export default Header;
