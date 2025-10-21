import React from 'react';
import { Card, Table, Tag, Space, Button, Row, Col } from 'antd';
import { EyeOutlined, CheckCircleOutlined, CloseCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';

const MyApprovals: React.FC = () => {
  // 模拟我审批的数据
  const myApprovalData = [
    {
      key: '1',
      title: '项目需求文档审批',
      applicant: '张三',
      type: '文档审批',
      priority: '高',
      status: '待审批',
      submitTime: '2024-01-20 09:30',
      deadline: '2024-01-22',
      currentStep: '技术审核',
    },
    {
      key: '2',
      title: '技术设计方案审核',
      applicant: '李四',
      type: '方案审核',
      priority: '中',
      status: '已通过',
      submitTime: '2024-01-19 14:20',
      deadline: '2024-01-21',
      currentStep: '已完成',
    },
    {
      key: '3',
      title: '采购申请审批',
      applicant: '王五',
      type: '采购审批',
      priority: '高',
      status: '已拒绝',
      submitTime: '2024-01-18 11:15',
      deadline: '2024-01-20',
      currentStep: '已完成',
    },
    {
      key: '4',
      title: '请假申请',
      applicant: '赵六',
      type: '人事审批',
      priority: '低',
      status: '待审批',
      submitTime: '2024-01-20 16:45',
      deadline: '2024-01-23',
      currentStep: '主管审批',
    },
  ];

  const columns = [
    {
      title: '审批标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '申请人',
      dataIndex: 'applicant',
      key: 'applicant',
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
      title: '当前步骤',
      dataIndex: 'currentStep',
      key: 'currentStep',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        let color = 'default';
        let icon = null;

        if (status === '待审批') {
          color = 'orange';
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
          {record.status === '待审批' && (
            <>
              <Button type="link" size="small" style={{ color: '#52c41a' }}>
                通过
              </Button>
              <Button type="link" size="small" danger>
                拒绝
              </Button>
            </>
          )}
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h1>我审批的</h1>

      {/* 审批统计 */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 'bold', color: '#faad14' }}>2</div>
              <div style={{ color: '#666' }}>待我审批</div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 'bold', color: '#52c41a' }}>1</div>
              <div style={{ color: '#666' }}>我已通过</div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 'bold', color: '#ff4d4f' }}>1</div>
              <div style={{ color: '#666' }}>我已拒绝</div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 'bold', color: '#1890ff' }}>4</div>
              <div style={{ color: '#666' }}>总审批数</div>
            </div>
          </Card>
        </Col>
      </Row>

      <Card>
        <Table
          columns={columns}
          dataSource={myApprovalData}
          pagination={{
            total: myApprovalData.length,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
          }}
        />
      </Card>
    </div>
  );
};

export default MyApprovals;
