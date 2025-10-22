import { defineConfig } from '@umijs/max';
import { routes } from './src/config/routes';

export default defineConfig({
  // 插件配置
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},

  // 布局配置
  layout: false,

  // 部署配置
  base: process.env.NODE_ENV === 'production' ? '/umi-admin/' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/umi-admin/' : '/',

  // 路由配置
  routes,

  // 包管理器
  npmClient: 'pnpm',

  // CSS框架
  tailwindcss: {},

  // 国际化配置
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true,
    title: false,
  },

  // 主题配置
  theme: {
    'primary-color': '#1890ff',
  },

  // 代理配置（开发环境）
  proxy: {
    '/api': {
      target: 'http://localhost:8000',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },

  // 构建配置
  mfsu: {
    strategy: 'normal',
  },
});
