import React from 'react';
import { Card, Table, Tag, Space, Button } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import styles from './index.less';

const Users: React.FC = () => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 80,
    },
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '角色',
      dataIndex: 'role',
      key: 'role',
      render: (role: string) => (
        <Tag color={role === 'admin' ? 'red' : 'blue'}>
          {role === 'admin' ? '管理员' : '普通用户'}
        </Tag>
      ),
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'active' ? 'green' : 'red'}>
          {status === 'active' ? '激活' : '禁用'}
        </Tag>
      ),
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: any) => (
        <Space size="small">
          <Button type="link" icon={<EditOutlined />} size="small">
            编辑
          </Button>
          <Button type="link" danger icon={<DeleteOutlined />} size="small">
            删除
          </Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      username: 'admin',
      name: '管理员',
      role: 'admin',
      status: 'active',
      createTime: '2025-01-01 10:00:00',
    },
    {
      id: 2,
      username: 'user1',
      name: '张三',
      role: 'user',
      status: 'active',
      createTime: '2025-01-02 14:30:00',
    },
    {
      id: 3,
      username: 'user2',
      name: '李四',
      role: 'user',
      status: 'active',
      createTime: '2025-01-03 09:15:00',
    },
    {
      id: 4,
      username: 'user3',
      name: '王五',
      role: 'user',
      status: 'inactive',
      createTime: '2025-01-04 16:45:00',
    },
  ];

  return (
    <div className={styles.users}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>用户管理</h1>
        <p className={styles.pageSubtitle}>管理系统用户信息</p>
      </div>

      <Card
        title="用户列表"
        extra={
          <Button type="primary" icon={<PlusOutlined />}>
            新增用户
          </Button>
        }
      >
        <Table
          columns={columns}
          dataSource={data}
          rowKey="id"
          pagination={{
            total: data.length,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total) => `共 ${total} 条记录`,
          }}
        />
      </Card>
    </div>
  );
};

export default Users;
