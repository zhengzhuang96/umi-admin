# Umi Admin

基于 Umi Max + Antd + Valtio + Tailwind CSS 构建的现代化 React 管理后台框架。

## 技术栈

- **Umi Max** - 企业级 React 应用框架
- **Antd** - UI 组件库
- **Valtio** - 轻量级状态管理
- **Tailwind CSS** - 原子化 CSS 框架

## 功能特性

### 🎯 核心功能
- ✅ 用户登录系统（假数据验证）
- ✅ 自定义布局结构
- ✅ 封装请求库
- ✅ 响应式设计

### 🎨 布局特点
- 顶部导航栏：左边 Logo 区域，右边用户信息下拉菜单
- 侧边菜单：紧贴顶部导航栏，没有间距
- 内容区域：只有内容区域可以滚动
- 禁用 Umi 默认布局，使用自定义布局

### 📱 移动端响应式
- 汉堡菜单按钮（移动端显示）
- 侧边菜单从左侧滑入
- 半透明遮罩层
- 点击菜单项自动关闭菜单
- 菜单项完全顶到头，没有边距

## 项目结构

```
umi-admin/
├── src/
│   ├── layouts/          # 布局组件
│   │   └── BasicLayout/
│   │       ├── components/
│   │       │   ├── Header/    # 顶部导航（含汉堡菜单）
│   │       │   └── Sidebar/   # 侧边菜单（含移动端遮罩层）
│   │       └── index.tsx
│   ├── pages/            # 页面组件
│   │   ├── Login/        # 登录页
│   │   ├── Dashboard/    # 仪表盘
│   │   ├── Users/        # 用户管理
│   │   └── Settings/     # 系统设置
│   ├── services/         # API 服务
│   │   └── api.ts        # 请求库封装
│   ├── stores/           # 状态管理
│   │   └── layout.ts     # 布局状态
│   └── app.tsx          # 应用配置
├── .umirc.ts            # Umi 配置（已禁用默认布局）
├── tailwind.config.js   # Tailwind 配置
├── tailwind.css         # Tailwind 样式
├── .gitignore           # Git 忽略文件
└── package.json         # 项目依赖
```

## 快速开始

### 安装依赖

```bash
pnpm install
# 或
npm install
```

### 启动开发服务器

```bash
pnpm start
# 或
npm run dev
```

应用将在 http://localhost:8000 启动

### 构建生产版本

```bash
pnpm build
# 或
npm run build
```

## GitHub Pages 部署

项目已配置 GitHub Actions 自动部署到 GitHub Pages。

### 部署步骤

1. 在 GitHub 仓库设置中启用 GitHub Pages（选择 GitHub Actions 作为源）
2. 推送代码到 `main` 分支
3. GitHub Actions 会自动构建并部署
4. 访问：`https://[你的用户名].github.io/umi-admin/`

详细部署说明请查看 [DEPLOY.md](./DEPLOY.md)

## 使用说明

### 登录系统
- 访问 http://localhost:8000 自动跳转到登录页
- 测试账号：`admin` / `admin`

### 移动端测试
- 将浏览器窗口拖动到 768px 以下宽度
- 观察汉堡菜单按钮和响应式布局

### 功能测试
1. 登录系统
2. 测试侧边菜单导航
3. 测试移动端响应式
4. 测试用户下拉菜单

## 开发指南

### 添加新页面
1. 在 `src/pages/` 目录下创建新页面
2. 在侧边菜单中添加菜单项
3. 更新路由配置

### 自定义样式
- 使用 Tailwind CSS 类名
- 自定义样式文件位于各组件目录下的 `.less` 文件

### 状态管理
- 使用 Valtio 进行状态管理
- 状态文件位于 `src/stores/` 目录

## 技术细节

### 布局实现
- 使用 Antd Layout 组件
- 自定义 Header 和 Sidebar 组件
- 禁用 Umi 默认布局

### 响应式设计
- 移动端断点：768px
- 汉堡菜单按钮只在移动端显示
- 侧边菜单在移动端默认隐藏

### 请求封装
- 统一的 HTTP 请求封装
- 请求/响应拦截器
- 模拟登录 API

## 许可证

MIT License
