import React from 'react';
import { Card, Form, Input, Button, Upload, message, Row, Col, Divider, Switch, Select } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, LockOutlined, UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const Account: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('表单数据:', values);
    message.success('个人信息更新成功');
  };

  const uploadProps = {
    name: 'avatar',
    action: '/api/upload/avatar',
    accept: '.png,.jpg,.jpeg',
    beforeUpload: (file: File) => {
      const isImage = file.type.startsWith('image/');
      if (!isImage) {
        message.error('只能上传图片文件!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error('图片大小不能超过 2MB!');
      }
      return isImage && isLt2M;
    },
    onChange(info: any) {
      if (info.file.status === 'done') {
        message.success(`${info.file.name} 头像上传成功`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 头像上传失败`);
      }
    },
  };

  return (
    <div>
      <h1>账号设置</h1>

      <Row gutter={[24, 24]}>
        {/* 个人信息 */}
        <Col xs={24} lg={12}>
          <Card title="个人信息" bordered={false}>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              initialValues={{
                name: '张三',
                email: 'zhangsan@example.com',
                phone: '13800138000',
                department: '技术部',
                position: '前端开发工程师',
              }}
            >
              <Form.Item
                name="name"
                label="姓名"
                rules={[{ required: true, message: '请输入姓名' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="请输入姓名" />
              </Form.Item>

              <Form.Item
                name="email"
                label="邮箱"
                rules={[
                  { required: true, message: '请输入邮箱' },
                  { type: 'email', message: '邮箱格式不正确' },
                ]}
              >
                <Input prefix={<MailOutlined />} placeholder="请输入邮箱" />
              </Form.Item>

              <Form.Item
                name="phone"
                label="手机号"
                rules={[{ required: true, message: '请输入手机号' }]}
              >
                <Input prefix={<PhoneOutlined />} placeholder="请输入手机号" />
              </Form.Item>

              <Form.Item
                name="department"
                label="部门"
                rules={[{ required: true, message: '请选择部门' }]}
              >
                <Select placeholder="请选择部门">
                  <Option value="技术部">技术部</Option>
                  <Option value="产品部">产品部</Option>
                  <Option value="设计部">设计部</Option>
                  <Option value="运营部">运营部</Option>
                  <Option value="市场部">市场部</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="position"
                label="职位"
                rules={[{ required: true, message: '请输入职位' }]}
              >
                <Input placeholder="请输入职位" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  保存个人信息
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        {/* 头像设置 */}
        <Col xs={24} lg={12}>
          <Card title="头像设置" bordered={false}>
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <Upload {...uploadProps} showUploadList={false}>
                <div
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    backgroundColor: '#f5f5f5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                    cursor: 'pointer',
                    border: '2px dashed #d9d9d9',
                  }}
                >
                  <div>
                    <UploadOutlined style={{ fontSize: 24, color: '#999' }} />
                    <div style={{ marginTop: 8, color: '#999' }}>上传头像</div>
                  </div>
                </div>
              </Upload>
              <div style={{ color: '#999', fontSize: 12 }}>
                支持 JPG、PNG 格式，大小不超过 2MB
              </div>
            </div>
          </Card>

          {/* 安全设置 */}
          <Card title="安全设置" bordered={false} style={{ marginTop: 24 }}>
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>修改密码</span>
                <Button type="link" icon={<LockOutlined />}>
                  立即修改
                </Button>
              </div>
            </div>

            <Divider />

            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>两步验证</span>
                <Switch checked={false} />
              </div>
            </div>

            <Divider />

            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>登录通知</span>
                <Switch checked={true} />
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      {/* 系统设置 */}
      <Card title="系统设置" bordered={false} style={{ marginTop: 24 }}>
        <Row gutter={[24, 16]}>
          <Col xs={24} sm={12}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>语言设置</span>
              <Select defaultValue="zh-CN" style={{ width: 120 }}>
                <Option value="zh-CN">简体中文</Option>
                <Option value="en-US">English</Option>
              </Select>
            </div>
          </Col>
          <Col xs={24} sm={12}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>主题设置</span>
              <Select defaultValue="light" style={{ width: 120 }}>
                <Option value="light">浅色主题</Option>
                <Option value="dark">深色主题</Option>
                <Option value="auto">跟随系统</Option>
              </Select>
            </div>
          </Col>
          <Col xs={24} sm={12}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>页面布局</span>
              <Select defaultValue="sidebar" style={{ width: 120 }}>
                <Option value="sidebar">侧边菜单</Option>
                <Option value="top">顶部菜单</Option>
                <Option value="mix">混合菜单</Option>
              </Select>
            </div>
          </Col>
          <Col xs={24} sm={12}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>消息推送</span>
              <Switch checked={true} />
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Account;
