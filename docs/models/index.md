# 大模型全景 {#models-overview}

截至2026年6月，全球已有数百个大语言模型。以下是最主流的模型对比。

<script setup>
import models from '../data/models.json'

const topModels = models.filter(m => 
  ['gpt-5', 'claude-4-opus', 'gemini-2-5-pro', 'llama-4-scout', 'deepseek-r1', 'mistral-large', 'qwen3', 'grok-3'].includes(m.id)
)

const compareColumns = [
  { key: 'name', label: '模型' },
  { key: 'company', label: '公司' },
  { key: 'releaseDate', label: '最新版本' },
  { key: 'contextWindow', label: '上下文' },
  { key: 'openSource', label: '开源' },
  { key: 'multimodal', label: '多模态' }
]

const compareData = topModels.map(m => ({
  name: m.name,
  company: m.company,
  releaseDate: m.releaseDate,
  contextWindow: m.contextWindow || '—',
  openSource: m.openSource,
  multimodal: m.multimodal
}))

const totalCount = models.length
const openSourceCount = models.filter(m => m.openSource).length
const companyCount = [...new Set(models.map(m => m.company))].length
</script>

---

## 主流模型快速对比

> 📊 数据驱动 · 共收录 **{{ totalCount }}** 个模型 · **{{ openSourceCount }}** 个开源 · 覆盖 **{{ companyCount }}** 家公司

<CompareTable 
  :columns="compareColumns"
  :data="compareData"
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
