import React from 'react';
import { Card, Row, Col, Statistic, Progress, List } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, UserOutlined, FileTextOutlined } from '@ant-design/icons';
import { useIntl } from 'umi';
import AppInfo from '@/components/AppInfo';
import LanguageDemo from '@/components/LanguageDemo';
import styles from './index.less';

const Dashboard: React.FC = () => {
  const intl = useIntl();

  // 模拟数据
  const statsData = [
    { title: intl.formatMessage({ id: 'stats.todo' }), value: 12, prefix: <UserOutlined /> },
    { title: intl.formatMessage({ id: 'stats.unread' }), value: 5, prefix: <FileTextOutlined /> },
    { title: intl.formatMessage({ id: 'stats.visits' }), value: 128, prefix: <ArrowUpOutlined /> },
    { title: intl.formatMessage({ id: 'stats.load' }), value: 75, suffix: '%' },
  ];

  const recentActivities = [
    intl.formatMessage({ id: 'activity.document.submit' }),
    intl.formatMessage({ id: 'activity.template.create' }),
    intl.formatMessage({ id: 'activity.signature.update' }),
    intl.formatMessage({ id: 'activity.system.backup' }),
    intl.formatMessage({ id: 'activity.document.batch' }),
  ];

  return (
    <div className={styles.dashboard}>
      <h1>{intl.formatMessage({ id: 'page.dashboard.title' })}</h1>

      {/* 统计卡片 */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        {statsData.map((item, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card>
              <Statistic
                title={item.title}
                value={item.value}
                prefix={item.prefix}
                suffix={item.suffix}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={[16, 16]}>
        {/* 项目进度 */}
        <Col xs={24} lg={12}>
          <Card title={intl.formatMessage({ id: 'dashboard.project.progress' })} bordered={false}>
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span>{intl.formatMessage({ id: 'dashboard.project.document' })}</span>
                <span>75%</span>
              </div>
              <Progress percent={75} status="active" />
            </div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span>{intl.formatMessage({ id: 'dashboard.project.approval' })}</span>
                <span>50%</span>
              </div>
              <Progress percent={50} status="active" />
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span>{intl.formatMessage({ id: 'dashboard.project.signature' })}</span>
                <span>90%</span>
              </div>
              <Progress percent={90} status="active" />
            </div>
          </Card>
        </Col>

        {/* 最近活动 */}
        <Col xs={24} lg={12}>
          <Card title={intl.formatMessage({ id: 'dashboard.recent.activities' })} bordered={false}>
            <List
              size="small"
              dataSource={recentActivities}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    description={item}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>

      {/* 应用配置信息 */}
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <AppInfo />
        </Col>
      </Row>

      {/* 多语言演示 */}
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <LanguageDemo />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
