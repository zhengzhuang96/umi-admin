// 应用常量定义

// 存储键名
export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER_INFO: 'user_info',
  THEME: 'theme',
  LANGUAGE: 'language',
  SETTINGS: 'settings',
} as const;

// 路由路径
export const ROUTE_PATHS = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  DOCUMENTS: '/documents',
  DOCUMENTS_ALL: '/documents/all',
  DOCUMENTS_BATCH: '/documents/batch',
  TEMPLATES: '/templates',
  APPROVALS: '/approvals',
  APPROVALS_MY: '/approvals/my-approvals',
  APPROVALS_SUBMISSIONS: '/approvals/my-submissions',
  SIGNATURES: '/signatures',
  ACCOUNT: '/account',
} as const;

// 权限常量
export const PERMISSIONS = {
  // 文档权限
  DOCUMENT_READ: 'document:read',
  DOCUMENT_WRITE: 'document:write',
  DOCUMENT_DELETE: 'document:delete',

  // 模板权限
  TEMPLATE_READ: 'template:read',
  TEMPLATE_WRITE: 'template:write',
  TEMPLATE_DELETE: 'template:delete',

  // 审批权限
  APPROVAL_READ: 'approval:read',
  APPROVAL_WRITE: 'approval:write',
  APPROVAL_DELETE: 'approval:delete',

  // 系统权限
  SYSTEM_ADMIN: 'system:admin',
  SYSTEM_SETTINGS: 'system:settings',
} as const;

// 用户角色
export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  GUEST: 'guest',
} as const;

// 响应状态码
export const RESPONSE_CODES = {
  SUCCESS: 200,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
} as const;

// 主题模式
export const THEME_MODES = {
  LIGHT: 'light',
  DARK: 'dark',
  AUTO: 'auto',
} as const;

// 语言配置
export const LANGUAGES = {
  ZH_CN: 'zh-CN',
  EN_US: 'en-US',
} as const;

// 分页配置
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: ['10', '20', '50', '100'],
} as const;

// 日期格式
export const DATE_FORMATS = {
  DATE: 'YYYY-MM-DD',
  DATETIME: 'YYYY-MM-DD HH:mm:ss',
  TIME: 'HH:mm:ss',
} as const;

// 文件类型
export const FILE_TYPES = {
  IMAGE: ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'],
  DOCUMENT: ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt'],
  VIDEO: ['mp4', 'avi', 'mov', 'wmv', 'flv'],
  AUDIO: ['mp3', 'wav', 'ogg', 'aac'],
} as const;

// 文件大小限制 (单位: MB)
export const FILE_SIZE_LIMITS = {
  IMAGE: 10,
  DOCUMENT: 50,
  VIDEO: 100,
  AUDIO: 20,
} as const;
