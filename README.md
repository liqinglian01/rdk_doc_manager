# RDK DOC

[English](./README_EN.md) | 简体中文

基于 Docusaurus 的 RDK 多语言文档中心门户，仅承载首页聚合能力，不在本仓承载业务文档内容。

## 特性

- 📝 **多语言支持**：中文（zh-Hans）和英文（en）双语切换
- 🧭 **纯文档中心入口**：首页聚合所有文档站点，统一分类导航
- 🗂️ **单一配置管理**：分类与文档入口统一在 `src/data/sites.js` 中维护，支持快速新增/删除
- 🌐 **外链聚合**：所有卡片均可配置为外部文档地址，支持统一入口跳转
- 🚀 **GitHub Pages**：支持 GitHub Pages 部署

## 快速开始

### 环境要求

- Node.js >= 18.0

### 安装依赖

```bash
npm install
```

### 开发模式

启动中文门户：
```bash
npm run start
```
访问链接：http://localhost:3000/rdk_doc_manage1/

启动英文门户：
```bash
npm run start:en
```
访问链接：http://localhost:3000/rdk_doc_manage1/en/

启动中文文档（不带文件监听）：
```bash
npm run start:no-watch
```
访问链接：http://localhost:3000/rdk_doc_manage1/

启动英文文档（不带文件监听）：
```bash
npm run start:no-watch:en
```
访问链接：http://localhost:3000/rdk_doc_manage1/en/

启动指定端口：
```bash
npm run start:port
```
访问链接：http://localhost:3001/rdk_doc_manage1/

## 构建与部署

### 构建生产版本

```bash
npm run build
```

### 本地预览构建结果

```bash
npm run serve
```

访问链接：
- 中文门户：http://localhost:3000/rdk_doc_manage1/
- 英文门户：http://localhost:3000/rdk_doc_manage1/en/

### GitHub Pages 部署

```bash
npm run deploy
```

## 项目结构

```
.
├── i18n/                 # 多语言翻译文件
├── src/
│   ├── components/       # React 组件
│   ├── data/             # 文档中心分类与入口配置
│   ├── pages/            # 页面组件
│   └── theme/            # Docusaurus 主题组件
├── static/               # 静态资源
├── docusaurus.config.js  # Docusaurus 配置
└── package.json
```

## 核心功能说明

### 文档中心统一维护

文档中心首页的分类和卡片入口统一维护在 `src/data/sites.js`：

- `DOC_CENTER_CONFIG.categories`：管理分类（新增/删除分类）
- `DOC_CENTER_CONFIG.entries`：管理文档入口（新增/删除卡片）
- 中文、英文文案在同一配置对象中分别维护，避免多处重复修改

### 纯门户模式说明

本仓已关闭所有本地 docs 插件路由，仅保留门户首页能力。  
文档内容应部署在独立文档站点，并通过 `src/data/sites.js` 维护外链聚合入口。

当前仓库已移除本地中文/英文文档正文目录（包括 `docs/`、各子文档目录及 `i18n/en` 下 docs 内容翻译）。

## 常用命令

| 命令 | 说明 |
|------|------|
| `npm run clear` | 清除 Docusaurus 缓存 |
| `npm run swizzle` | 自定义主题组件 |
| `npm run write-translations` | 提取翻译内容 |

## 技术栈

- **Docusaurus**: 3.7.0
- **React**: 18.x

