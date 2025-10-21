import React from 'react';
import { Card, Table, Tag, Space, Button, Row, Col } from 'antd';
import { EyeOutlined, DownloadOutlined, EditOutlined, DeleteOutlined, CopyOutlined } from '@ant-design/icons';

const Templates: React.FC = () => {
  // 模拟模版数据
  const templateData = [
    {
      key: '1',
      name: '项目需求文档模版',
      category: '需求文档',
      version: 'v2.1',
      status: '已发布',
      usageCount: 156,
      createTime: '2024-01-10',
      updateTime: '2024-01-15',
    },
    {
      key: '2',
      name: '技术设计文档模版',
      category: '设计文档',
      version: 'v1.5',
      status: '已发布',
      usageCount: 89,
      createTime: '2024-01-08',
      updateTime: '2024-01-12',
    },
    {
      key: '3',
      name: '测试用例模版',
      category: '测试文档',
      version: 'v3.0',
      status: '草稿',
      usageCount: 0,
      createTime: '2024-01-18',
      updateTime: '2024-01-18',
    },
    {
      key: '4',
      name: '会议纪要模版',
      category: '会议文档',
      version: 'v1.2',
      status: '已发布',
      usageCount: 234,
      createTime: '2024-01-05',
      updateTime: '2024-01-10',
    },
  ];

  const columns = [
    {
      title: '模版名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '分类',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: '版本',
      dataIndex: 'version',
      key: 'version',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        let color = status === '已发布' ? 'green' : 'orange';
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: '使用次数',
      dataIndex: 'usageCount',
      key: 'usageCount',
      render: (count: number) => `${count} 次`,
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
            预览
          </Button>
          <Button type="link" icon={<DownloadOutlined />} size="small">
            下载
          </Button>
          <Button type="link" icon={<CopyOutlined />} size="small">
            复制
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
      <h1>我的模版</h1>

      {/* 模版统计 */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 'bold', color: '#1890ff' }}>4</div>
              <div style={{ color: '#666' }}>模版总数</div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 'bold', color: '#52c41a' }}>3</div>
              <div style={{ color: '#666' }}>已发布模版</div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 'bold', color: '#faad14' }}>1</div>
              <div style={{ color: '#666' }}>草稿模版</div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 'bold', color: '#722ed1' }}>479</div>
              <div style={{ color: '#666' }}>总使用次数</div>
            </div>
          </Card>
        </Col>
      </Row>

      <Card>
        <Table
          columns={columns}
          dataSource={templateData}
          pagination={{
            total: templateData.length,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
          }}
        />
      </Card>
    </div>
  );
};

export default Templates;
