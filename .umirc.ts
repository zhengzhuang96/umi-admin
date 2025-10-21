import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: false,
  routes: [
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
          name: '仪表盘',
          path: '/dashboard',
          component: './Dashboard',
        },
        {
          name: '用户管理',
          path: '/users',
          component: './Users',
        },
        {
          name: '系统设置',
          path: '/settings',
          component: './Settings',
        },
      ],
    },
  ],
  npmClient: 'pnpm',
  tailwindcss: {},
});
