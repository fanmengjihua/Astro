# 部署指南：GitHub + Cloudflare Pages + Workers

本文档详细说明了如何通过 GitHub + Cloudflare Pages + Workers 部署 Rin-Astro 集成项目。

## 前置条件

1. **GitHub 账号**：用于代码托管和 CI/CD
2. **Cloudflare 账号**：用于部署 Pages 和 Workers
3. **git 工具**：用于版本控制和代码推送
4. **Bun**：用于后端开发和部署
5. **Node.js**：用于前端开发和构建

## 步骤 1：创建 GitHub 仓库

1. 登录 GitHub，创建一个新的仓库
2. 仓库名称建议使用 `rin-astro`
3. 选择公开或私有仓库（根据您的需求）
4. 初始化仓库时可以选择添加 `.gitignore` 文件

## 步骤 2：推送代码到 GitHub

```bash
# 进入项目目录
cd rin-astro

# 初始化 git 仓库
git init

# 添加远程仓库
git remote add origin https://github.com/your-username/rin-astro.git

# 创建 .gitignore 文件
cat > .gitignore << EOF
# Dependencies
node_modules/
frontend/node_modules/

# Build outputs
frontend/dist/


# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
logs
*.log

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# IDEs and editors
.vscode/
.idea/
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
EOF

# 添加所有文件
git add .

# 提交代码
git commit -m "Initial commit: Rin-Astro integration project"

# 推送代码到 GitHub
git push -u origin main
```

## 步骤 3：部署前端到 Cloudflare Pages

### 方法 A：通过 Cloudflare 仪表板部署

1. 登录 Cloudflare 仪表板
2. 导航到 **Pages** 页面
3. 点击 **Create a project**
4. 选择 **Connect to Git**
5. 选择您的 `rin-astro` 仓库
6. 配置构建设置：
   - **Production branch**: `main`
   - **Build command**: `npm run build`
   - **Build output directory**: `frontend/dist`
   - **Root directory**: `frontend`
   - **Environment variables**:
     - Add `NODE_VERSION` with value `18` or higher
7. 点击 **Save and Deploy**
8. 等待部署完成，获取 Pages 域名

### 方法 B：通过 Wrangler CLI 部署

```bash
# 进入前端目录
cd frontend

# 安装 Wrangler
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 部署到 Pages
wrangler pages deploy dist --project-name=rin-astro-frontend
```

## 步骤 4：部署后端到 Cloudflare Workers

### 1. 配置后端项目

1. 在根目录检查 `wrangler.toml` 文件（已从 `wrangler.example.toml` 复制）：

```toml
name = "rin-server"
type = "javascript"
workers_dev = true
main = "server/src/_worker.ts"
compatibility_date = "2024-01-01"

[vars]
# 在这里添加环境变量

[[d1_databases]]
binding = "DB"
database_name = "rin-dev-db"
database_id = "YOUR_DATABASE_ID"
```

### 2. 部署到 Workers

```bash
# 在根目录运行

# 安装依赖
bun install

# 部署到 Workers
bun run cf:deploy
```

或者使用 Wrangler CLI：

```bash
# 登录 Cloudflare
wrangler login

# 部署到 Workers
wrangler deploy
```

## 步骤 5：配置数据库（D1）

1. 登录 Cloudflare 仪表板
2. 导航到 **D1** 页面
3. 点击 **Create database**
4. 数据库名称设置为 `rin-dev-db`
5. 复制生成的数据库 ID，更新到 `wrangler.toml` 文件中
6. 运行数据库迁移：

```bash
# 在根目录运行

# 运行迁移脚本
bun run db:gen
```

## 步骤 6：配置环境变量

### 前端环境变量

在 Cloudflare Pages 项目设置中添加以下环境变量：

| 变量名 | 值 | 说明 |
|-------|-----|------|
| `API_BASE_URL` | `https://your-worker-name.workers.dev` | 后端 Workers 域名 |
| `NODE_VERSION` | `18` | Node.js 版本 |

### 后端环境变量

在 Cloudflare Workers 项目设置中添加以下环境变量：

| 变量名 | 值 | 说明 |
|-------|-----|------|
| `SECRET_KEY` | `your-secret-key` | JWT 签名密钥 |
| `DB` | `YOUR_DATABASE_ID` | D1 数据库 ID |
| `ADMIN_EMAIL` | `your-email@example.com` | 管理员邮箱 |

## 步骤 7：更新 API 基础 URL

更新前端的 API 基础 URL，指向部署后的 Workers 域名：

```bash
# 编辑 API 服务文件
cd frontend
nano src/lib/apiService.ts
```

将：
```typescript
const API_BASE_URL = 'http://localhost:11498'; // Rin-dev后端服务端口
```

修改为：
```typescript
const API_BASE_URL = 'https://your-worker-name.workers.dev'; // 部署后的 Workers 域名
```

然后提交并推送更改：

```bash
git add frontend/src/lib/apiService.ts
git commit -m "Update API base URL to deployed Workers"
git push
```

## 步骤 8：测试部署

1. **前端测试**：访问 Cloudflare Pages 生成的域名，检查前端是否正常加载
2. **后端测试**：访问 `https://your-worker-name.workers.dev/posts`，检查是否返回 JSON 数据
3. **完整测试**：在前端页面中浏览博客文章，检查数据是否正确加载和显示

## 步骤 9：设置自定义域名（可选）

### 为前端设置自定义域名

1. 登录 Cloudflare 仪表板
2. 导航到您的 Pages 项目
3. 点击 **Custom domains** 选项卡
4. 点击 **Set up a custom domain**
5. 输入您的自定义域名（例如：`blog.your-domain.com`）
6. 按照提示完成 DNS 配置

### 为后端设置自定义域名

1. 登录 Cloudflare 仪表板
2. 导航到 **Workers & Pages** → **Workers**
3. 选择您的后端 Worker
4. 点击 **Triggers** 选项卡
5. 在 **Custom Domains** 部分点击 **Add Custom Domain**
6. 输入您的自定义域名（例如：`api.your-domain.com`）
7. 按照提示完成 DNS 配置

## 步骤 10：配置 CI/CD（可选）

### 前端 CI/CD

Cloudflare Pages 会自动为您的仓库设置 CI/CD，每次推送到 `main` 分支时都会触发构建和部署。

### 后端 CI/CD

您可以使用 GitHub Actions 为后端设置 CI/CD：

1. 在仓库中创建 `.github/workflows/backend-deploy.yml` 文件：

```yaml
name: Deploy Backend to Cloudflare Workers

on:
  push:
    branches:
      - main
    paths:
      - 'server/**'
      - 'wrangler.toml'
      - 'package.json'

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Set up Bun
        uses: oven-sh/setup-bun@v1
        with:
          bun-version: latest
      
      - name: Install dependencies
        run: bun install
      
      - name: Deploy to Cloudflare Workers
        run: bun run cf:deploy
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
```

2. 在 GitHub 仓库的 **Settings** → **Secrets and variables** → **Actions** 中添加 `CLOUDFLARE_API_TOKEN` 密钥
3. 该密钥需要具有 Workers 部署权限

## 故障排查

### 前端部署问题

1. **构建失败**：检查构建命令和构建输出目录是否正确
2. **页面空白**：检查浏览器控制台是否有错误，可能是 API 调用失败
3. **样式丢失**：确保 Tailwind CSS 配置正确

### 后端部署问题

1. **Worker 部署失败**：检查 `wrangler.toml` 配置是否正确
2. **数据库连接失败**：确保 D1 数据库配置正确，数据库 ID 有效
3. **API 响应错误**：检查 Worker 日志，查看具体错误信息

### API 调用问题

1. **跨域错误**：确保后端 Worker 配置了正确的 CORS 设置
2. **404 错误**：检查 API 路径是否正确，确保后端路由配置正确
3. **500 错误**：检查后端代码是否有错误，查看 Worker 日志

## 监控和维护

1. **Cloudflare Analytics**：使用 Cloudflare 仪表板监控 Pages 和 Workers 的流量和性能
2. **GitHub Actions**：监控 CI/CD 构建状态
3. **定期更新**：定期更新依赖包，确保系统安全
4. **备份数据**：定期备份 D1 数据库中的内容

## 常见问题

### Q: 部署后前端无法获取数据怎么办？

**A**: 检查以下几点：
1. 后端 Worker 是否正常运行
2. API 基础 URL 是否正确配置
3. 后端是否配置了正确的 CORS 设置
4. 数据库是否正确迁移和配置

### Q: 如何回滚部署？

**A**: 
- **前端**：在 Cloudflare Pages 仪表板中，找到要回滚的部署，点击 **Rollback**
- **后端**：在 Cloudflare Workers 仪表板中，点击 **Deployments** 选项卡，选择要回滚到的版本

### Q: 如何增加部署环境（如 staging）？

**A**: 
- **前端**：在 Cloudflare Pages 中创建多个项目，或使用不同分支部署到不同环境
- **后端**：在 Cloudflare Workers 中创建多个环境，或使用不同的 Worker 实例

## 总结

通过以上步骤，您已经成功通过 GitHub + Cloudflare Pages + Workers 部署了 Rin-Astro 集成项目。这种部署方式具有以下优势：

1. **全球分发**：Cloudflare 的全球网络确保您的网站在世界各地都能快速加载
2. **低成本**：Cloudflare Pages 和 Workers 提供免费套餐，适合小型项目
3. **可靠性**：Cloudflare 的基础设施确保高可用性和稳定性
4. **易于扩展**：随着流量增长，可以轻松升级到付费计划
5. **集成 CI/CD**：GitHub + Cloudflare 提供了无缝的持续集成和部署体验

祝您部署成功！
