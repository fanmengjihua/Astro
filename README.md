# 呷味道-JiaWeiDao

一個基於 Astro 構建的美食配方博客網站，專注於分享商用食譜和烹飪技巧。

## 📋 功能特性

- 🎨 高度可自定義（顏色、字體、選單、社交連結、SEO 標籤等）
- 👥 多作者支援
- 📚 作者頁面
- 👤 作者個人頁面
- 🔍 中文搜尋功能（使用 FuseJS）
- 🏷️ 標籤和分類支援
- 📲 文章社交分享選項
- 🔗 相關文章推薦
- ⚡ 超快速度（95+ Google PageSpeed 分數）
- 📝 支援 Markdown / MDX 撰寫內容
- 📬 聯絡表單支援
- 🌅 支援 OG 圖片
- � MDX 組件自動匯入
- 📝 支援草稿頁面和文章
- 🚀 使用 Tailwind CSS 框架構建
- � 完全響應式設計（桌面、平板、智慧型手機）
- 🔍 SEO 友善
- 🔐 後台管理系統（登入、註冊、密碼重置）
- 📤 圖片上傳和圖床支援

## 📦 安裝

下載專案後，需要安裝一些前置需求。你可以查看 `package.json` 檔案來了解包含的腳本。

### ⚙️ 安裝前置需求（每台機器只需一次）

- **Node.js 安裝：** [安裝 Node.js](https://nodejs.org/zh-tw/download/) [建議使用 LTS 版本]

### 🖥️ 本地設置

成功安裝依賴後，使用任何 IDE 開啟此專案（建議使用 [VS Code](https://code.visualstudio.com/)），然後開啟 IDE 的內部終端機（VS Code 快捷鍵 `Ctrl/Cmd+\``）

- 安裝依賴

```bash
npm install
```

- 本地運行

```bash
npm run dev
```

運行後，它會在預設瀏覽器中開啟專案預覽，監聽原始檔案的變更，並在儲存變更時重新載入瀏覽器。

## 🏗️ 生產構建

完成所有自定義後，你可以運行以下指令建立生產構建：

```bash
npm run build
```

構建完成後，靜態檔案會輸出到 `dist` 目錄。

## 🚀 部署

### Vercel 部署（推薦，支援 API）

1. 將程式碼推送到 GitHub
2. 在 [Vercel](https://vercel.com/) 匯入專案
3. Vercel 會自動偵測 Astro 框架並配置構建設置
4. 點擊 Deploy

### Cloudflare Pages 部署（靜態網站）

⚠️ **注意：** Cloudflare Pages 只支援靜態網站，API 功能（登入、註冊、圖片上傳）將無法使用。

1. 登入 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 進入 **Workers & Pages** → **Pages**
3. 點擊 **Create a project**
4. 選擇 **Connect to Git**
5. 選擇你的 GitHub 倉庫
6. 配置構建設置：
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
7. 點擊 **Save and Deploy**

### GitHub Pages 部署（靜態網站）

⚠️ **注意：** GitHub Pages 只支援靜態網站，API 功能將無法使用。

1. 將程式碼推送到 GitHub
2. 在倉庫設置中啟用 GitHub Pages
3. 選擇 `dist` 目錄作為來源
4. 保存設置

## 📁 專案結構

```
JiaWeiDao/
├── public/                 # 靜態資源（圖片、字體等）
│   └── images/
├── src/
│   ├── components/         # 可重用組件
│   ├── config/           # 配置檔案
│   │   ├── config.json   # 網站配置
│   │   └── categoryMapping.json  # 分類映射
│   ├── content/          # Markdown 內容
│   │   ├── authors/     # 作者資料
│   │   ├── contact/     # 聯絡頁面
│   │   ├── pages/       # 頁面內容
│   │   └── posts/       # 文章內容
│   ├── layouts/          # 頁面佈局
│   ├── lib/             # 工具函數庫
│   ├── pages/           # 路由頁面
│   │   ├── api/        # API 端點（僅支援 Vercel/Netlify）
│   │   ├── admin.astro  # 後台管理頁面
│   │   ├── blog/       # 文章頁面
│   │   └── authors/     # 作者頁面
│   └── types/           # TypeScript 類型定義
├── astro.config.mjs       # Astro 配置檔案
└── package.json          # 專案依賴和腳本
```

## ⚙️ 配置說明

### 網站配置 (`src/config/config.json`)

```json
{
  "site": {
    "title": "呷味道-JiaWeiDao",
    "base_url": "https://your-domain.com",
    "base_path": "/",
    "trailing_slash": false,
    "favicon": "/images/jiaweidao.png",
    "logo": "/images/logo.svg",
    "logo_text": "呷味道-JiaWeiDao"
  },
  "contactinfo": {
    "email": "sellingdreamccc@gmail.com"
  }
}
```

### 分類配置 (`src/config/categoryMapping.json`)

將英文分類 slug 映射到繁體中文顯示名稱。

### 作者配置

在 `src/content/authors/` 目錄中創建 Markdown 檔案：

```markdown
---
title: 作者名稱
meta_title: ""
image: /images/author-image.jpg
description: 作者簡介
social:
  facebook: https://facebook.com/author
  x: https://x.com/author
  instagram: https://instagram.com/author
  youtube: https://youtube.com/channel/xxx
---

作者詳細介紹內容...
```

### 文章配置

在 `src/content/posts/` 目錄中創建 Markdown 檔案：

```markdown
---
title: 文章標題
meta_title: ""
description: SEO 描述
date: 2025-01-01T00:00:00Z
youtube: "YouTube 影片 ID"
image: /images/posts/image.jpg 或 https://圖床URL
categories: ["靈魂醬料"]
authors: ["JiaWeiDao"]
tags: ["標籤1", "標籤2"]
draft: false
views: 0
---

> 引用正文內容

文章正文內容...
```

## � 後台管理系統

訪問 `/admin` 進入後台管理系統。

### 功能

- ✅ 登入/註冊/密碼重置
- ✅ 文章創建和管理
- ✅ 作者創建和管理
- ✅ 本地圖片上傳（僅 Vercel/Netlify）
- ✅ 圖床圖片 URL 引用（支援所有部署平台）

### 使用說明

1. **使用圖床圖片**（推薦用於 GitHub Pages/Cloudflare Pages）：
   - 在"封面圖 URL（圖床圖片）"輸入框中貼上圖床圖片連結
   - 系統會優先使用這個 URL

2. **使用本地圖片**（僅 Vercel/Netlify）：
   - 留空 URL 輸入框
   - 使用"封面圖（上傳本地圖片）"上傳本地檔案

## 🌐 分類

網站預設包含以下分類：

- 靈魂醬料
- 經典餅類
- 炸烤滷味
- 飽肚主食
- 甜點冰品

## � 搜尋功能

網站內建中文搜尋功能，支援：
- 標題部分匹配
- 分類搜尋
- 內容搜尋
- 最小 1 個字元即可搜尋

## 📱 響應式設計

網站完全響應式，支援：
- 🖥️ 桌面電腦
- 💻 平板電腦
- 📱 智慧型手機

## 🐞 回報問題

我們使用 GitHub Issues 作為此專案的官方錯誤追蹤器。請搜尋[現有問題](https://github.com/your-username/JiaWeiDao/issues)。可能已經有人回報了相同的問題。

如果你的問題或想法尚未得到解決，歡迎[開啟新問題](https://github.com/your-username/JiaWeiDao/issues)。

## 📄 授權

Copyright (c) 2025 - Present, Designed & Developed by JiaWeiDao

**程式碼授權：** 使用 [MIT](https://opensource.org/licenses/MIT) 授權發布。

**圖片授權：** 圖片僅供展示用途。它們有自己的授權，我們沒有權限分享這些圖片。

## � 聯絡方式

- 📧 Email: sellingdreamccc@gmail.com
- 🌐 Website: https://your-domain.com

## 🙏 致謝

感謝使用此專案！如果你覺得這個專案有幫助，請給它一個 ⭐️ Star！

---

**Made with ❤️ by JiaWeiDao**
