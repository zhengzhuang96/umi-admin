// 应用配置
export default {
  // 应用名称
  name: 'Umi Admin',

  // 应用描述
  description: '基于 Umi Max 的企业级管理后台',

  // 版权信息
  copyright: '© 2024 Umi Admin Team',

  // 默认布局配置
  layout: {
    // 是否固定头部
    fixedHeader: true,
    // 是否固定侧边栏
    fixedSidebar: true,
    // 主题色
    primaryColor: '#1890ff',
    // 导航模式: side | top | mix
    navMode: 'side',
  },

  // 请求配置
  request: {
    // 请求超时时间
    timeout: 10000,
    // 请求基础URL
    baseURL: process.env.NODE_ENV === 'production'
      ? 'https://api.example.com'
      : 'http://localhost:8000',
    // 是否开启请求日志
    enableLog: process.env.NODE_ENV === 'development',
  },

  // 权限配置
  access: {
    // 权限模式: simple | complex
    mode: 'simple',
    // 默认权限
    defaultAccess: ['user'],
  },

  // 国际化配置
  locale: {
    // 默认语言
    default: 'zh-CN',
    // 支持的语言
    languages: [
      { key: 'zh-CN', label: '简体中文' },
      { key: 'en-US', label: 'English' },
    ],
  },

  // 主题配置
  theme: {
    // 主题模式: light | dark
    mode: 'light',
    // 紧凑模式
    compact: false,
  },

  // 功能开关
  features: {
    // 是否开启水印
    watermark: false,
    // 是否开启错误边界
    errorBoundary: true,
    // 是否开启性能监控
    performance: true,
    // 是否开启页面缓存
    keepAlive: true,
  },
};
