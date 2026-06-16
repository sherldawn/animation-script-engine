# CLAUDE.md — 项目系统指令

## 沟通语言
**所有对话和文档一律使用中文。** 代码注释、变量命名可用英文，但与用户的交流、文件说明、Git提交信息等全部用中文。

## 项目概述
**这是一个数据驱动的动画短片智能创作系统**——拆解98部经典作品，提炼15条规律，结合AI编剧导师，帮用户从零写出能在北美流媒体平台传播的2分钟动画剧本。

核心能力：
- **🎲 智能Roll点引擎**：6维度×66标签组合 + 规律轮盘 + DNA混搭 + 一键对标
- **💬 AI编剧共创对话**：选中方向后进入Chat模式，AI导师引用规律编号逐轮打磨
- **📚 98部作品知识库**：6维筛选、完整剧情、亮点分析、关键词索引

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
| `index.html` | 独立版（JS内联，242KB，双击可用，GitHub Pages入口）— **主要分发版本** |
| `dashboard.html` | 开发版（加载外部JS，需HTTP服务器）— 10个板块：概览/案例/作品库/账号/规律/结构/方向/生成器/创意工坊/批量创意 |
| `server.py` | 可选的本地HTTP服务器（仅用于开发版加载JS文件，端口8888） |
| `CLAUDE.md` | 本文件，系统指令 |

### 其他
- `docs/` — 项目介绍 + 8个MD调研原始文档
- `examples/` — 示例剧本（001-猫之功夫幻想.md, 批量创意20.md）
- `.github/workflows/static.yml` — GitHub Pages自动部署

## 启动方式
```bash
# 方式1：直接打开独立版（推荐，所有功能均可用，含AI生成）
open index.html

# 方式2：启动HTTP服务器打开开发版（修改data/*.js后需要用这种方式）
python3 server.py
open http://localhost:8888/dashboard.html
```

> **注意**：API已改为前端直连OpenRouter（不需要后端代理）。index.html和dashboard.html均可直接调用AI生成，只需设置OpenRouter API Key。

## 故事生成器功能
- **Tag选择器**：6个维度（主角/类型/画风/情感/结构/时长），选2-6个标签
- **智能匹配**：自动从98部作品、15条规律、20个批量创意中匹配最相关的
- **AI生成**：通过OpenRouter调用多种模型（Claude/Gemini/DeepSeek），一次生成3-5个200字故事梗概
- **复制Prompt**：一键复制完整Prompt，可粘贴到任意AI模型使用
- **三大特色**：规律轮盘（每个故事用不同规律）/ DNA混搭（随机混搭参考作品）/ 一键对标
- **共创对话**：选入工坊后进入Chat模式，AI编剧导师逐轮迭代，引用规律编号给建议，更新12项检查清单评分

## 开发约束
- `dashboard.html` 需通过HTTP服务器访问（`file://`会被CORS阻断JS加载）
- `index.html` 可直接双击打开（JS已内联）
- 修改data/*.js后需要同步更新index.html中的内联JS
- JS验证：`node -e "new Function(require('fs').readFileSync('file.js','utf8'))"`
- Python验证：`python3 -c "import py_compile; py_compile.compile('server.py', doraise=True)"`
- Git提交格式：`[板块] 具体内容`（中文）

## 当前阶段
- V3.0方法论完成（98部作品 × 15条规律 × 7种结构 × 7个方向）
- 智能创作系统已上线（Roll点引擎 + AI共创对话 + 知识库）
- 下一步：用生成器创作3-5个完整剧本