# GitHub Pages 部署指南

## 部署步骤

### 1. 启用 GitHub Pages

1. 进入 GitHub 仓库设置
2. 在左侧菜单中找到 "Pages"
3. 在 "Source" 部分选择 "GitHub Actions"

### 2. 推送代码触发部署

将代码推送到 `master` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。

```bash
git add .
git commit -m "feat: deploy to GitHub Pages"
git push origin master
```

### 3. 查看部署状态

1. 进入仓库的 "Actions" 标签页
2. 查看 "Deploy to GitHub Pages" 工作流状态
3. 部署完成后，访问：`https://[你的用户名].github.io/umi-admin/`

## 配置说明

### Umi 配置

项目已配置为支持 GitHub Pages：

```typescript
// .umirc.ts
base: process.env.NODE_ENV === 'production' ? '/umi-admin/' : '/',
publicPath: process.env.NODE_ENV === 'production' ? '/umi-admin/' : '/',
```

### GitHub Actions 工作流

工作流文件位于 `.github/workflows/deploy.yml`，包含以下步骤：

1. **检出代码** - 获取最新代码
2. **设置 Node.js** - 配置 Node.js 18 环境
3. **安装依赖** - 使用 pnpm 安装依赖
4. **构建项目** - 运行 `pnpm build`
5. **配置 Pages** - 设置 GitHub Pages
6. **上传产物** - 上传 dist 目录
7. **部署** - 部署到 GitHub Pages

## 注意事项

1. **仓库名称**：确保仓库名称为 `umi-admin`，否则需要修改 `.umirc.ts` 中的 base 和 publicPath 配置
2. **首次部署**：首次部署可能需要手动在仓库设置中启用 GitHub Pages
3. **自定义域名**：如需使用自定义域名，请在 GitHub Pages 设置中配置

## 故障排除

### 构建失败
- 检查 Node.js 版本兼容性
- 查看 GitHub Actions 日志中的错误信息

### 页面空白
- 检查 base 和 publicPath 配置是否正确
- 确认路由配置是否正确

### 资源加载失败
- 检查 publicPath 配置
- 确认静态资源路径是否正确
