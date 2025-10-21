import React from 'react';
import { Card, Table, Tag, Space, Button, Progress, Upload } from 'antd';
import { EyeOutlined, DownloadOutlined, DeleteOutlined, UploadOutlined } from '@ant-design/icons';

const BatchDocuments: React.FC = () => {
  // 模拟批量文档数据
  const batchDocumentData = [
    {
      key: '1',
      batchName: '2024年1月项目文档',
      fileCount: 25,
      totalSize: '156 MB',
      status: '处理完成',
      progress: 100,
      createTime: '2024-01-20',
      processTime: '2024-01-20 14:30',
    },
    {
      key: '2',
      batchName: '客户合同批量上传',
      fileCount: 12,
      totalSize: '89 MB',
      status: '处理中',
      progress: 65,
      createTime: '2024-01-19',
      processTime: '2024-01-19 16:45',
    },
    {
      key: '3',
      batchName: '技术规范文档集',
      fileCount: 8,
      totalSize: '42 MB',
      status: '等待处理',
      progress: 0,
      createTime: '2024-01-18',
      processTime: '-',
    },
    {
      key: '4',
      batchName: '培训材料打包',
      fileCount: 15,
      totalSize: '78 MB',
      status: '处理失败',
      progress: 0,
      createTime: '2024-01-17',
      processTime: '2024-01-17 11:20',
    },
  ];

  const columns = [
    {
      title: '批次名称',
      dataIndex: 'batchName',
      key: 'batchName',
    },
    {
      title: '文件数量',
      dataIndex: 'fileCount',
      key: 'fileCount',
      render: (count: number) => `${count} 个文件`,
    },
    {
      title: '总大小',
      dataIndex: 'totalSize',
      key: 'totalSize',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string, record: any) => {
        let color = 'green';
        if (status === '处理中') color = 'blue';
        if (status === '等待处理') color = 'orange';
        if (status === '处理失败') color = 'red';

        return (
          <Space>
            <Tag color={color}>{status}</Tag>
            {status === '处理中' && (
              <Progress percent={record.progress} size="small" style={{ width: 80 }} />
            )}
          </Space>
        );
      },
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
    {
      title: '处理时间',
      dataIndex: 'processTime',
      key: 'processTime',
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button type="link" icon={<EyeOutlined />} size="small">
            查看详情
          </Button>
          <Button type="link" icon={<DownloadOutlined />} size="small">
            下载
          </Button>
          <Button type="link" icon={<DeleteOutlined />} size="small" danger>
            删除
          </Button>
        </Space>
      ),
    },
  ];

  const uploadProps = {
    name: 'file',
    multiple: true,
    action: '/api/upload',
    onChange(info: any) {
      console.log(info.fileList);
    },
  };

  return (
    <div>
      <h1>批量文档</h1>
      <Card>
        <div style={{ marginBottom: 16 }}>
          <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />}>批量上传文档</Button>
          </Upload>
        </div>
        <Table
          columns={columns}
          dataSource={batchDocumentData}
          pagination={{
            total: batchDocumentData.length,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
          }}
        />
      </Card>
    </div>
  );
};

export default BatchDocuments;
