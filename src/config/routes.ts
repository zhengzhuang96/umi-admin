// 路由配置
export const routes = [
  {
    path: '/login',
    component: './Login',
    layout: false,
  },
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      {
        path: '/',
        redirect: '/dashboard',
      },
      {
        name: '工作台',
        path: '/dashboard',
        component: './Dashboard',
      },
      {
        name: '我的文档',
        path: '/documents',
        component: './Documents',
        routes: [
          {
            name: '全部文档',
            path: '/documents/all',
            component: './Documents/AllDocuments',
          },
          {
            name: '批量文档',
            path: '/documents/batch',
            component: './Documents/BatchDocuments',
          },
        ],
      },
      {
        name: '我的模版',
        path: '/templates',
        component: './Templates',
      },
      {
        name: '我的审批',
        path: '/approvals',
        component: './Approvals',
        routes: [
          {
            name: '我审批的',
            path: '/approvals/my-approvals',
            component: './Approvals/MyApprovals',
          },
          {
            name: '我提交的',
            path: '/approvals/my-submissions',
            component: './Approvals/MySubmissions',
          },
        ],
      },
      {
        name: '我的签名',
        path: '/signatures',
        component: './Signatures',
      },
      {
        name: '账号设置',
        path: '/account',
        component: './Account',
      },
      {
        name: '系统设置',
        path: '/settings',
        component: './Settings',
      },
    ],
  },
];
