# Rin-Astro 集成项目

这是一个将 Astro 前端与 Rin-dev 后端集成的项目，实现了前后端分离的博客系统架构。

## 项目结构

```
rin-astro/
├── frontend/       # Astro 前端项目
├── server/         # 后端服务代码
├── scripts/        # 工具脚本
├── docs/           # 文档
├── package.json    # 统一的包配置
├── wrangler.toml   # Cloudflare Workers 配置
└── README.md       # 项目说明文档
```

## 技术栈

### 前端 (frontend/)
- **Astro**: 现代静态站点生成框架
- **TypeScript**: 类型安全的 JavaScript 超集
- **React**: 用于交互式组件
- **Tailwind CSS**: 实用优先的 CSS 框架

### 后端 (backend/)
- **Elysia**: 轻量级、快速的 Node.js 框架
- **Drizzle ORM**: TypeScript ORM 工具
- **Cloudflare Workers**: 边缘计算平台
- **Bun**: 现代 JavaScript 运行时

## 启动指南

### 1. 安装依赖

```bash
# 前端依赖
cd frontend
npm install

# 后端依赖（在根目录）
bun install
```

### 2. 启动后端服务

```bash
# 在根目录运行
bun dev
```

后端服务将在 `http://localhost:11498` 上运行。

### 3. 启动前端服务

```bash
# 在根目录运行
bun run dev:frontend
```

前端服务将在 `http://localhost:4321` 上运行。

## 构建与部署

### 构建前端

```bash
# 在根目录运行
bun run build:frontend
```

构建产物将生成在 `frontend/dist` 目录中。

### 部署后端

```bash
# 在根目录运行
bun run cf:deploy
```

## 核心功能

1. **博客文章管理**: 通过 Rin-dev 后端管理博客文章，包括创建、编辑、删除等操作
2. **前端渲染**: Astro 前端从 Rin-dev API 获取数据并渲染页面
3. **SEO 优化**: 利用 Astro 的静态生成能力，确保博客的 SEO 友好性
4. **响应式设计**: 适配不同设备尺寸的响应式布局
5. **用户认证**: Rin-dev 后端提供用户登录和鉴权功能

## API 接口

### GET /posts
- **功能**: 获取博客文章列表
- **返回格式**: JSON
- **参数**:
  - `page`: 页码 (默认: 1)
  - `limit`: 每页数量 (默认: 20)

### GET /posts/:slug
- **功能**: 获取单篇博客文章
- **返回格式**: JSON
- **参数**:
  - `slug`: 文章的唯一标识符

## 注意事项

1. **后端依赖**: 前端需要后端服务运行才能正常获取数据
2. **API 配置**: 前端的 API 基础 URL 配置在 `frontend/src/lib/apiService.ts` 文件中
3. **数据结构**: 确保后端返回的数据结构与前端期望的格式一致
4. **环境变量**: 后端可能需要配置相应的环境变量，参考 `.env.example` 文件

## 开发流程

1. 在 Rin-dev 后端中创建和管理博客文章
2. Astro 前端通过 API 获取最新的文章数据
3. 构建前端项目生成静态文件
4. 部署静态文件到 CDN 或静态托管服务

## 故障排查

### 前端无法获取数据
- 检查后端服务是否正在运行
- 验证 API 基础 URL 是否正确配置
- 确认后端 API 接口是否正常响应

### 构建失败
- 检查依赖是否正确安装
- 验证代码中是否有语法错误
- 确保后端服务可访问（构建时需要获取数据）

## 许可证

MIT License
