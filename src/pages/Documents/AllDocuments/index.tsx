import React from 'react';
import { Card, Table, Tag, Space, Button, Input } from 'antd';
import { EyeOutlined, DownloadOutlined, EditOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';

const AllDocuments: React.FC = () => {
  // 模拟全部文档数据
  const allDocumentData = [
    {
      key: '1',
      name: '项目需求文档',
      type: '需求文档',
      size: '2.5 MB',
      status: '已完成',
      createTime: '2024-01-15',
      updateTime: '2024-01-20',
      owner: '张三',
    },
    {
      key: '2',
      name: '技术设计方案',
      type: '设计文档',
      size: '1.8 MB',
      status: '审核中',
      createTime: '2024-01-18',
      updateTime: '2024-01-19',
      owner: '李四',
    },
    {
      key: '3',
      name: '测试报告',
      type: '测试文档',
      size: '3.2 MB',
      status: '已完成',
      createTime: '2024-01-10',
      updateTime: '2024-01-15',
      owner: '王五',
    },
    {
      key: '4',
      name: '用户手册',
      type: '说明文档',
      size: '4.1 MB',
      status: '草稿',
      createTime: '2024-01-12',
      updateTime: '2024-01-12',
      owner: '赵六',
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
      title: '创建者',
      dataIndex: 'owner',
      key: 'owner',
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
      render: (_: any, record: any) => (
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
    <div>
      <h1>全部文档</h1>
      <Card>
        <div style={{ marginBottom: 16 }}>
          <Input
            placeholder="搜索文档名称..."
            prefix={<SearchOutlined />}
            style={{ width: 300 }}
          />
        </div>
        <Table
          columns={columns}
          dataSource={allDocumentData}
          pagination={{
            total: allDocumentData.length,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
          }}
        />
      </Card>
    </div>
  );
};

export default AllDocuments;
