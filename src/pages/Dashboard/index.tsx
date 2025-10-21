import React from 'react';
import { Card, Row, Col, Statistic, Progress, Space } from 'antd';
import { ArrowUpOutlined, UserOutlined, ShoppingCartOutlined, DollarOutlined } from '@ant-design/icons';
import styles from './index.less';

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>仪表盘</h1>
        <p className={styles.pageSubtitle}>欢迎使用Umi Admin管理系统</p>
      </div>

      <Row gutter={[16, 16]} className={styles.statsRow}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="总用户数"
              value={11280}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
              prefix={<UserOutlined />}
              suffix={<ArrowUpOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="今日订单"
              value={93}
              precision={0}
              valueStyle={{ color: '#1890ff' }}
              prefix={<ShoppingCartOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="总收入"
              value={112893}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<DollarOutlined />}
              suffix="元"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="增长率"
              value={9.3}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} className={styles.chartsRow}>
        <Col xs={24} lg={12}>
          <Card title="项目进度" className={styles.chartCard}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <div>
                <div className={styles.progressLabel}>前端开发</div>
                <Progress percent={75} status="active" />
              </div>
              <div>
                <div className={styles.progressLabel}>后端开发</div>
                <Progress percent={60} status="active" />
              </div>
              <div>
                <div className={styles.progressLabel}>测试阶段</div>
                <Progress percent={30} status="active" />
              </div>
              <div>
                <div className={styles.progressLabel}>部署上线</div>
                <Progress percent={10} status="active" />
              </div>
            </Space>
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="系统信息" className={styles.chartCard}>
            <div className={styles.systemInfo}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>系统版本:</span>
                <span className={styles.infoValue}>Umi Admin v1.0.0</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>React版本:</span>
                <span className={styles.infoValue}>18.3.1</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Antd版本:</span>
                <span className={styles.infoValue}>5.27.6</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Umi版本:</span>
                <span className={styles.infoValue}>4.5.3</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>最后更新:</span>
                <span className={styles.infoValue}>2025-10-21</span>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
