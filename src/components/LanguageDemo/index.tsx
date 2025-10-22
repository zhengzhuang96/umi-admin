import React from 'react';
import { Card, Space, Typography, Button } from 'antd';
import { useIntl } from 'umi';

const { Title, Text } = Typography;

const LanguageDemo: React.FC = () => {
  const intl = useIntl();

  return (
    <Card title={intl.formatMessage({ id: 'appInfo.title' })} style={{ marginTop: 16 }}>
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <div>
          <Title level={5}>{intl.formatMessage({ id: 'appInfo.basic' })}</Title>
          <Text>
            {intl.formatMessage({ id: 'appInfo.appName' })}: {intl.formatMessage({ id: 'appInfo.appName' })}
          </Text>
        </div>

        <div>
          <Title level={5}>{intl.formatMessage({ id: 'menu.dashboard' })}</Title>
          <Space>
            <Button type="primary">
              {intl.formatMessage({ id: 'common.submit' })}
            </Button>
            <Button>
              {intl.formatMessage({ id: 'common.cancel' })}
            </Button>
            <Button danger>
              {intl.formatMessage({ id: 'common.delete' })}
            </Button>
          </Space>
        </div>

        <div>
          <Title level={5}>{intl.formatMessage({ id: 'stats.todo' })}</Title>
          <Text>
            {intl.formatMessage({ id: 'stats.todo' })}: 12,
            {intl.formatMessage({ id: 'stats.unread' })}: 5,
            {intl.formatMessage({ id: 'stats.visits' })}: 128
          </Text>
        </div>

        <div>
          <Title level={5}>{intl.formatMessage({ id: 'user.admin' })}</Title>
          <Text>
            {intl.formatMessage({ id: 'user.admin' })}: {intl.formatMessage({ id: 'user.admin' })}
          </Text>
        </div>

        <div>
          <Title level={5}>当前语言状态</Title>
          <Text>
            当前语言: {intl.locale}
          </Text>
        </div>
      </Space>
    </Card>
  );
};

export default LanguageDemo;
