import React from 'react';
import { Card, Table, Tag, Space, Button } from 'antd';
import { EyeOutlined, DownloadOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import styles from './index.less';

const Documents: React.FC = () => {
  // 模拟文档数据
  const documentData = [
    {
      key: '1',
      name: '项目需求文档',
      type: '需求文档',
      size: '2.5 MB',
      status: '已完成',
      createTime: '2024-01-15',
      updateTime: '2024-01-20',
    },
    {
      key: '2',
      name: '技术设计方案',
      type: '设计文档',
      size: '1.8 MB',
      status: '审核中',
      createTime: '2024-01-18',
      updateTime: '2024-01-19',
    },
    {
      key: '3',
      name: '测试报告',
      type: '测试文档',
      size: '3.2 MB',
      status: '已完成',
      createTime: '2024-01-10',
      updateTime: '2024-01-15',
    },
    {
      key: '4',
      name: '用户手册',
      type: '说明文档',
      size: '4.1 MB',
      status: '草稿',
      createTime: '2024-01-12',
      updateTime: '2024-01-12',
    },
  ];

  const columns = [
    {
      title: '文档名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '大小',
      dataIndex: 'size',
      key: 'size',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        let color = 'green';
        if (status === '审核中') color = 'orange';
        if (status === '草稿') color = 'gray';
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      key: 'updateTime',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" icon={<EyeOutlined />} size="small">
            查看
          </Button>
          <Button type="link" icon={<DownloadOutlined />} size="small">
            下载
          </Button>
          <Button type="link" icon={<EditOutlined />} size="small">
            编辑
          </Button>
          <Button type="link" icon={<DeleteOutlined />} size="small" danger>
            删除
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className={styles.documents}>
      <h1>我的文档</h1>
      <Card>
        <Table
          columns={columns}
          dataSource={documentData}
          pagination={{
            total: documentData.length,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
          }}
        />
      </Card>
    </div>
  );
};

export default Documents;
