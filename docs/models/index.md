# 大模型全景 {#models-overview}

截至2026年6月，全球已有数百个大语言模型。以下是最主流的模型对比。

---

## 主流模型快速对比

<CompareTable 
  :columns="[
    { key: 'name', label: '模型' },
    { key: 'company', label: '公司' },
    { key: 'release', label: '最新版本' },
    { key: 'context', label: '上下文' },
    { key: 'openSource', label: '开源' },
    { key: 'multimodal', label: '多模态' },
    { key: 'highlight', label: '核心亮点' }
  ]"
  :data="[
    { name: 'GPT-5', company: 'OpenAI', release: '2025', context: '256K', openSource: false, multimodal: true, highlight: '综合能力最强' },
    { name: 'Claude 4 Opus', company: 'Anthropic', release: '2025.05', context: '200K', openSource: false, multimodal: true, highlight: '编程与Agent最强' },
    { name: 'Gemini 2.5 Pro', company: 'Google', release: '2025.03', context: '2M', openSource: false, multimodal: true, highlight: '超长上下文，推理强' },
    { name: 'LLaMA 4 Scout', company: 'Meta', release: '2025.04', context: '10M', openSource: true, multimodal: true, highlight: '开源最强，超长上下文' },
    { name: 'DeepSeek-R1', company: 'DeepSeek', release: '2025.01', context: '128K', openSource: true, multimodal: false, highlight: '开源推理模型标杆' },
    { name: 'Mistral Large', company: 'Mistral AI', release: '2024', context: '128K', openSource: false, multimodal: true, highlight: '欧洲最强模型' },
    { name: 'Qwen3', company: '阿里巴巴', release: '2025', context: '128K', openSource: true, multimodal: true, highlight: '中文能力出色' },
    { name: 'Grok-3', company: 'xAI', release: '2025', context: '128K', openSource: false, multimodal: true, highlight: 'X平台整合' }
  ]"
/>

---

## 模型分类

### 按能力类型

| 类型 | 代表模型 | 特点 |
|------|----------|------|
| **通用模型** | GPT-5, Claude 4, Gemini 2.5 | 综合能力最强，适用各种任务 |
| **推理模型** | o3, DeepSeek-R1, Gemini 2.5 Pro | 深度思考，擅长数学和编程 |
| **轻量模型** | GPT-4o mini, Claude Haiku, Gemini Flash | 速度快、成本低 |
| **开源模型** | LLaMA 4, DeepSeek-R1, Qwen3 | 可本地部署，可定制 |

### 按部署方式

| 方式 | 优势 | 代表 |
|------|------|------|
| **API调用** | 无需维护，即开即用 | OpenAI API, Anthropic API |
| **云平台** | 企业级服务，合规保障 | Azure AI, AWS Bedrock |
| **本地部署** | 数据隐私，可定制 | Ollama + LLaMA/DeepSeek |

---

## 如何选择模型？

| 场景 | 推荐模型 | 原因 |
|------|----------|------|
| 日常对话 | Claude 4 Sonnet, GPT-4o | 性价比高，响应快 |
| 编程开发 | Claude 4 Opus, Claude Code | 编程能力最强 |
| 数学推理 | o3, DeepSeek-R1 | 推理深度最好 |
| 长文档处理 | Gemini 2.5 Pro | 200万token上下文 |
| 本地部署 | DeepSeek-R1, LLaMA 4 | 开源，资源需求适中 |
| 中文场景 | Qwen3, DeepSeek | 中文训练数据充分 |
| 预算有限 | GPT-4o mini, Claude Haiku | 极低成本 |

---

> 💡 点击侧边栏查看各模型的详细解析
