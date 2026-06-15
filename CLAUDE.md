# CLAUDE.md — 项目系统指令

## 沟通语言
**所有对话和文档一律使用中文。** 代码注释、变量命名可用英文，但与用户的交流、文件说明、Git提交信息等全部用中文。

## 项目概述
**目标**：创作时长2分钟以下、适合北美口味、动画形式、流媒体平台传播的短片内容。

## 文件架构（Single Source of Truth）

### 数据文件 (`data/`)
| 文件 | 内容 | 条目数 |
|------|------|--------|
| `tags-registry.js` | 6类标签定义（type/artStyle/technique/texture/source/dialogue） | 66个标签 |
| `works.js` | 作品库（13个维度） | 98部 |
| `config.js` | 叙事结构(7种) + 创作方向(7个) + 创意工坊(001# V1-V4) | — |
| `batch-ideas.js` | 批量创意 | 20个 |
| `research.js` | 项目概况 + 案例分析 + 头部账号 + 电影节洞察 | — |
| `rules.js` | V3.0规律(15条) + 公式 + 检查清单(12项) | — |
| `generator-config.js` | 故事生成器配置：主角类型/情感基调/时长 + 关键词映射 | — |

### 核心文件
| 文件 | 说明 |
|------|------|
| `dashboard.html` | 仪表盘UI（10个板块：概览/案例/作品库/账号/规律/结构/方向/生成器/创意工坊/批量创意） |
| `dashboard-standalone.html` | 独立版本（内联JS，可双击打开，无需服务器） |
| `server.py` | 本地服务器（静态文件 + OpenRouter API代理），端口8888 |
| `CLAUDE.md` | 本文件，系统指令 |

### 其他
- `存档/` — 8个MD源文件（调研过程中产出的原始文档）
- `剧本/` — 剧本文件（001-火锅毛肚大战.md, 批量创意20.md）

## 启动方式
```bash
# 方式1：直接打开（推荐，所有功能均可用，含AI生成）
open dashboard.html
# 或双击 dashboard-standalone.html（JS已内联）

# 方式2：启动服务器（可选，不再是必需）
python3 server.py
open http://localhost:8888/dashboard.html
```

> **注意**：API已改为前端直连OpenRouter（不再需要server.py代理）。dashboard.html和standalone版本均可直接调用AI生成，只需设置OpenRouter API Key。

## 故事生成器功能
- **Tag选择器**：6个维度（主角/类型/画风/情感/结构/时长），选2-6个标签
- **智能匹配**：自动从98部作品、15条规律、20个批量创意中匹配最相关的
- **AI生成**：通过OpenRouter调用多种模型（Claude/GPT/Gemini/DeepSeek），一次生成3-5个200字故事梗概
- **复制Prompt**：一键复制完整Prompt，可粘贴到任意AI模型使用
- **三大特色**：规律轮盘（每个故事用不同规律）/ DNA混搭（随机混搭参考作品）/ 一键对标
- **共创对话**：选入工坊后进入Chat模式，AI编剧导师逐轮迭代

## 开发约束
- `dashboard.html` 需通过HTTP服务器访问（`file://`会被CORS阻断JS加载）
- `dashboard-standalone.html` 可直接双击打开（JS已内联）
- JS验证：`node -e "new Function(require('fs').readFileSync('file.js','utf8'))"`
- Python验证：`python3 -c "import py_compile; py_compile.compile('server.py', doraise=True)"`
- Git提交格式：`[板块] 具体内容`（中文）

## 当前阶段
- V3.0方法论完成（98部作品 × 15条规律 × 7种结构 × 7个方向）
- 故事生成器已上线（Tag选择 → AI生成 → 共创对话）
- 下一步：用生成器创作3-5个完整剧本