import React from 'react';
import { Card, Table, Tag, Space, Button, Row, Col, Upload, message } from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined, UploadOutlined, CheckCircleOutlined } from '@ant-design/icons';

const Signatures: React.FC = () => {
  // 模拟签名数据
  const signatureData = [
    {
      key: '1',
      name: '个人签名',
      type: '手写签名',
      status: '已启用',
      createTime: '2024-01-15',
      lastUsed: '2024-01-20',
    },
    {
      key: '2',
      name: '公司印章',
      type: '电子印章',
      status: '已启用',
      createTime: '2024-01-10',
      lastUsed: '2024-01-19',
    },
    {
      key: '3',
      name: '备用签名',
      type: '手写签名',
      status: '未启用',
      createTime: '2024-01-18',
      lastUsed: '-',
    },
  ];

  const columns = [
    {
      title: '签名名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        let color = status === '已启用' ? 'green' : 'gray';
        let icon = status === '已启用' ? <CheckCircleOutlined /> : null;
        return (
          <Tag icon={icon} color={color}>
            {status}
          </Tag>
        );
      },
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
    {
      title: '最后使用',
      dataIndex: 'lastUsed',
      key: 'lastUsed',
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button type="link" icon={<EyeOutlined />} size="small">
            预览
          </Button>
          <Button type="link" icon={<EditOutlined />} size="small">
            编辑
          </Button>
          {record.status === '已启用' ? (
            <Button type="link" size="small" danger>
              停用
            </Button>
          ) : (
            <Button type="link" size="small" style={{ color: '#52c41a' }}>
              启用
            </Button>
          )}
          <Button type="link" icon={<DeleteOutlined />} size="small" danger>
            删除
          </Button>
        </Space>
      ),
    },
  ];

  const uploadProps = {
    name: 'file',
    action: '/api/upload/signature',
    accept: '.png,.jpg,.jpeg',
    beforeUpload: (file: File) => {
      const isImage = file.type.startsWith('image/');
      if (!isImage) {
        message.error('只能上传图片文件!');
      }
      return isImage;
    },
    onChange(info: any) {
      if (info.file.status === 'done') {
        message.success(`${info.file.name} 上传成功`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 上传失败`);
      }
    },
  };

  return (
    <div>
      <h1>我的签名</h1>

      {/* 签名统计 */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 'bold', color: '#1890ff' }}>3</div>
              <div style={{ color: '#666' }}>签名总数</div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 'bold', color: '#52c41a' }}>2</div>
              <div style={{ color: '#666' }}>已启用</div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 'bold', color: '#8c8c8c' }}>1</div>
              <div style={{ color: '#666' }}>未启用</div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 'bold', color: '#722ed1' }}>15</div>
              <div style={{ color: '#666' }}>本月使用</div>
            </div>
          </Card>
        </Col>
      </Row>

      <Card>
        <div style={{ marginBottom: 16 }}>
          <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />}>上传新签名</Button>
          </Upload>
        </div>
        <Table
          columns={columns}
          dataSource={signatureData}
          pagination={{
            total: signatureData.length,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
          }}
        />
      </Card>
    </div>
  );
};

export default Signatures;
