import React, { useState } from 'react';
import { Form, Input, Button, Card, message, Space } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate, useModel } from '@umijs/max';
import { authAPI } from '@/services/api';
import styles from './index.less';

const Login: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { initialState, setInitialState } = useModel('@@initialState');

  const handleLogin = async (values: { username: string; password: string }) => {
    setLoading(true);
    try {
      const result = await authAPI.login(values.username, values.password);

      if (result.success) {
        // 保存token
        localStorage.setItem('token', result.data.token);

        // 更新全局状态
        await setInitialState((s) => ({
          ...s,
          userInfo: result.data.userInfo,
        }));

        message.success('登录成功');
        navigate('/');
      } else {
        message.error(result.message || '登录失败');
      }
    } catch (error) {
      message.error('登录失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBackground}>
        <Card className={styles.loginCard}>
          <div className={styles.loginHeader}>
            <h1 className={styles.loginTitle}>Umi Admin</h1>
            <p className={styles.loginSubtitle}>欢迎登录管理系统</p>
          </div>

          <Form
            form={form}
            name="login"
            onFinish={handleLogin}
            autoComplete="off"
            size="large"
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请输入用户名!' }]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="用户名: admin"
                className={styles.loginInput}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="密码: admin"
                className={styles.loginInput}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                block
                className={styles.loginButton}
              >
                登录
              </Button>
            </Form.Item>
          </Form>

          <div className={styles.loginTips}>
            <Space direction="vertical" size="small">
              <div>测试账号: admin / admin</div>
              <div className={styles.tipText}>这是一个基于Umi的React Admin框架</div>
            </Space>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
