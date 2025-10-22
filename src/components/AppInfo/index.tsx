import React from 'react';
import { Card, Tag, Space, Typography } from 'antd';
import { InfoCircleOutlined, SettingOutlined, GlobalOutlined } from '@ant-design/icons';
import configManager, { appName } from '@/utils/config';

const { Title, Text } = Typography;

const AppInfo: React.FC = () => {
  const themeConfig = configManager.getThemeConfig();
  const layoutConfig = configManager.getLayoutConfig();
  const requestConfig = configManager.getRequestConfig();
  const accessConfig = configManager.getAccessConfig();
  const localeConfig = configManager.getLocaleConfig();
  const features = configManager.getFeatures();

  return (
    <Card
      title={
        <Space>
          <InfoCircleOutlined />
          <span>应用配置信息</span>
        </Space>
      }
      style={{ marginBottom: 16 }}
    >
      {/* 基础信息 */}
      <div style={{ marginBottom: 16 }}>
        <Title level={5}>基础信息</Title>
        <Space direction="vertical" size="small">
          <Text>应用名称: <Tag color="blue">{appName}</Tag></Text>
          <Text>描述: {configManager.get('description')}</Text>
          <Text>版权: {configManager.get('copyright')}</Text>
        </Space>
      </div>

      {/* 主题配置 */}
      <div style={{ marginBottom: 16 }}>
        <Title level={5}>主题配置</Title>
        <Space direction="vertical" size="small">
          <Text>模式: <Tag color={themeConfig?.mode === 'dark' ? 'black' : 'blue'}>{themeConfig?.mode}</Tag></Text>
          <Text>主色: <Tag color={themeConfig?.primaryColor}>{themeConfig?.primaryColor}</Tag></Text>
          <Text>紧凑模式: <Tag color={themeConfig?.compact ? 'green' : 'red'}>{themeConfig?.compact ? '开启' : '关闭'}</Tag></Text>
        </Space>
      </div>

      {/* 布局配置 */}
      <div style={{ marginBottom: 16 }}>
        <Title level={5}>布局配置</Title>
        <Space direction="vertical" size="small">
          <Text>固定头部: <Tag color={layoutConfig?.fixedHeader ? 'green' : 'red'}>{layoutConfig?.fixedHeader ? '是' : '否'}</Tag></Text>
          <Text>固定侧边栏: <Tag color={layoutConfig?.fixedSidebar ? 'green' : 'red'}>{layoutConfig?.fixedSidebar ? '是' : '否'}</Tag></Text>
          <Text>导航模式: <Tag color="purple">{layoutConfig?.navMode}</Tag></Text>
        </Space>
      </div>

      {/* 请求配置 */}
      <div style={{ marginBottom: 16 }}>
        <Title level={5}>请求配置</Title>
        <Space direction="vertical" size="small">
          <Text>超时时间: <Tag color="orange">{requestConfig?.timeout}ms</Tag></Text>
          <Text>基础URL: <Tag color="cyan">{requestConfig?.baseURL}</Tag></Text>
          <Text>请求日志: <Tag color={requestConfig?.enableLog ? 'green' : 'red'}>{requestConfig?.enableLog ? '开启' : '关闭'}</Tag></Text>
        </Space>
      </div>

      {/* 权限配置 */}
      <div style={{ marginBottom: 16 }}>
        <Title level={5}>权限配置</Title>
        <Space direction="vertical" size="small">
          <Text>权限模式: <Tag color="magenta">{accessConfig?.mode}</Tag></Text>
          <Text>默认权限:
            {accessConfig?.defaultAccess?.map((permission: string) => (
              <Tag key={permission} color="blue" style={{ marginLeft: 4 }}>{permission}</Tag>
            ))}
          </Text>
        </Space>
      </div>

      {/* 国际化配置 */}
      <div style={{ marginBottom: 16 }}>
        <Title level={5}>国际化配置</Title>
        <Space direction="vertical" size="small">
          <Text>默认语言: <Tag color="green">{localeConfig?.default}</Tag></Text>
          <Text>支持语言:
            {localeConfig?.languages?.map((lang: any) => (
              <Tag key={lang.key} color="blue" style={{ marginLeft: 4 }}>{lang.label}</Tag>
            ))}
          </Text>
        </Space>
      </div>

      {/* 功能开关 */}
      <div>
        <Title level={5}>功能开关</Title>
        <Space wrap>
          <Tag color={features?.watermark ? 'green' : 'red'}>水印: {features?.watermark ? '开启' : '关闭'}</Tag>
          <Tag color={features?.errorBoundary ? 'green' : 'red'}>错误边界: {features?.errorBoundary ? '开启' : '关闭'}</Tag>
          <Tag color={features?.performance ? 'green' : 'red'}>性能监控: {features?.performance ? '开启' : '关闭'}</Tag>
          <Tag color={features?.keepAlive ? 'green' : 'red'}>页面缓存: {features?.keepAlive ? '开启' : '关闭'}</Tag>
        </Space>
      </div>
    </Card>
  );
};

export default AppInfo;
