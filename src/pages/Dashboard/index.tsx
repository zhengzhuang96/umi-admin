import React from 'react';
import { Card, Row, Col, Statistic, Progress, List } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, UserOutlined, FileTextOutlined } from '@ant-design/icons';
import styles from './index.less';

const Dashboard: React.FC = () => {
  // 模拟数据
  const statsData = [
    { title: '待办事项', value: 12, prefix: <UserOutlined /> },
    { title: '未读消息', value: 5, prefix: <FileTextOutlined /> },
    { title: '今日访问', value: 128, prefix: <ArrowUpOutlined /> },
    { title: '系统负载', value: 75, suffix: '%' },
  ];

  const recentActivities = [
    '用户张三提交了新的文档审批',
    '李四完成了模版创建',
    '王五更新了个人签名',
    '系统进行了自动备份',
    '新的批量文档处理完成',
  ];

  return (
    <div className={styles.dashboard}>
      <h1>工作台</h1>

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
          <Card title="项目进度" bordered={false}>
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span>文档管理系统</span>
                <span>75%</span>
              </div>
              <Progress percent={75} status="active" />
            </div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span>审批流程优化</span>
                <span>50%</span>
              </div>
              <Progress percent={50} status="active" />
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span>签名管理模块</span>
                <span>90%</span>
              </div>
              <Progress percent={90} status="active" />
            </div>
          </Card>
        </Col>

        {/* 最近活动 */}
        <Col xs={24} lg={12}>
          <Card title="最近活动" bordered={false}>
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
    </div>
  );
};

export default Dashboard;
