import React from 'react';
import { Card, Form, Input, Switch, Button, Select, Divider, Space } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import styles from './index.less';

const { Option } = Select;
const { TextArea } = Input;

const Settings: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('设置保存:', values);
    // 这里可以调用API保存设置
  };

  return (
    <div className={styles.settings}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>系统设置</h1>
        <p className={styles.pageSubtitle}>管理系统配置参数</p>
      </div>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          siteName: 'Umi Admin',
          siteDescription: '基于Umi的React Admin框架',
          theme: 'light',
          language: 'zh-CN',
          notifications: true,
          autoSave: false,
          apiUrl: 'https://api.example.com',
        }}
      >
        <Card title="基本设置" className={styles.settingCard}>
          <Form.Item
            label="网站名称"
            name="siteName"
            rules={[{ required: true, message: '请输入网站名称' }]}
          >
            <Input placeholder="请输入网站名称" />
          </Form.Item>

          <Form.Item
            label="网站描述"
            name="siteDescription"
          >
            <TextArea
              placeholder="请输入网站描述"
              rows={3}
            />
          </Form.Item>

          <Form.Item
            label="主题设置"
            name="theme"
          >
            <Select>
              <Option value="light">浅色主题</Option>
              <Option value="dark">深色主题</Option>
              <Option value="auto">跟随系统</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="语言设置"
            name="language"
          >
            <Select>
              <Option value="zh-CN">简体中文</Option>
              <Option value="en-US">English</Option>
            </Select>
          </Form.Item>
        </Card>

        <Card title="功能设置" className={styles.settingCard}>
          <Form.Item
            label="启用通知"
            name="notifications"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            label="自动保存"
            name="autoSave"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            label="API地址"
            name="apiUrl"
            rules={[{ required: true, message: '请输入API地址' }]}
          >
            <Input placeholder="请输入API地址" />
          </Form.Item>
        </Card>

        <Card title="关于系统" className={styles.settingCard}>
          <div className={styles.aboutInfo}>
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
              <span className={styles.infoLabel}>构建时间:</span>
              <span className={styles.infoValue}>2025-10-21</span>
            </div>
          </div>
        </Card>

        <div className={styles.formActions}>
          <Space>
            <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
              保存设置
            </Button>
            <Button onClick={() => form.resetFields()}>
              重置
            </Button>
          </Space>
        </div>
      </Form>
    </div>
  );
};

export default Settings;
