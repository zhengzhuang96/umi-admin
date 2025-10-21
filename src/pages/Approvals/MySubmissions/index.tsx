import React from 'react';
import { Card, Table, Tag, Space, Button, Row, Col } from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined, CheckCircleOutlined, CloseCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';

const MySubmissions: React.FC = () => {
  // 模拟我提交的审批数据
  const mySubmissionData = [
    {
      key: '1',
      title: '项目预算审批',
      type: '财务审批',
      priority: '高',
      status: '审核中',
      submitTime: '2024-01-20 10:15',
      deadline: '2024-01-25',
      currentApprover: '财务部',
    },
    {
      key: '2',
      title: '设备采购申请',
      type: '采购审批',
      priority: '中',
      status: '已通过',
      submitTime: '2024-01-18 14:30',
      deadline: '2024-01-22',
      currentApprover: '已完成',
    },
    {
      key: '3',
      title: '项目延期申请',
      type: '项目审批',
      priority: '高',
      status: '已拒绝',
      submitTime: '2024-01-17 09:20',
      deadline: '2024-01-19',
      currentApprover: '已完成',
    },
    {
      key: '4',
      title: '培训费用报销',
      type: '报销审批',
      priority: '低',
      status: '草稿',
      submitTime: '2024-01-21 16:00',
      deadline: '-',
      currentApprover: '-',
    },
  ];

  const columns = [
    {
      title: '审批标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '审批类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '优先级',
      dataIndex: 'priority',
      key: 'priority',
      render: (priority: string) => {
        let color = priority === '高' ? 'red' : priority === '中' ? 'orange' : 'green';
        return <Tag color={color}>{priority}</Tag>;
      },
    },
    {
      title: '当前审批人',
      dataIndex: 'currentApprover',
      key: 'currentApprover',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        let color = 'default';
        let icon = null;

        if (status === '草稿') {
          color = 'gray';
        } else if (status === '审核中') {
          color = 'blue';
          icon = <ClockCircleOutlined />;
        } else if (status === '已通过') {
          color = 'green';
          icon = <CheckCircleOutlined />;
        } else if (status === '已拒绝') {
          color = 'red';
          icon = <CloseCircleOutlined />;
        }

        return (
          <Tag icon={icon} color={color}>
            {status}
          </Tag>
        );
      },
    },
    {
      title: '提交时间',
      dataIndex: 'submitTime',
      key: 'submitTime',
    },
    {
      title: '截止时间',
      dataIndex: 'deadline',
      key: 'deadline',
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button type="link" icon={<EyeOutlined />} size="small">
            查看详情
          </Button>
          {record.status === '草稿' && (
            <>
              <Button type="link" icon={<EditOutlined />} size="small">
                编辑
              </Button>
              <Button type="link" icon={<DeleteOutlined />} size="small" danger>
                删除
              </Button>
            </>
          )}
          {record.status === '审核中' && (
            <Button type="link" size="small">
              催办
            </Button>
          )}
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h1>我提交的</h1>

      {/* 提交统计 */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 'bold', color: '#1890ff' }}>1</div>
              <div style={{ color: '#666' }}>审核中</div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 'bold', color: '#52c41a' }}>1</div>
              <div style={{ color: '#666' }}>已通过</div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 'bold', color: '#ff4d4f' }}>1</div>
              <div style={{ color: '#666' }}>已拒绝</div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 'bold', color: '#8c8c8c' }}>1</div>
              <div style={{ color: '#666' }}>草稿</div>
            </div>
          </Card>
        </Col>
      </Row>

      <Card>
        <Table
          columns={columns}
          dataSource={mySubmissionData}
          pagination={{
            total: mySubmissionData.length,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
          }}
        />
      </Card>
    </div>
  );
};

export default MySubmissions;
