# 云AI平台 {#cloud}

云服务商提供了便捷的AI模型访问和部署能力，是企业使用AI的主要方式。

---

## 主要云AI平台

### Microsoft Azure AI

| 项目 | 信息 |
|------|------|
| **核心服务** | Azure OpenAI Service |
| **模型** | GPT-4o, GPT-5, DALL-E 3, Whisper |
| **特点** | 唯一提供OpenAI模型的企业级服务 |

**核心产品**：
- **Azure OpenAI Service**：企业级OpenAI API
- **Azure AI Studio**：AI开发平台
- **Azure AI Search**：向量搜索
- **Azure AI Content Safety**：内容安全

**优势**：
- OpenAI独家合作
- 企业级安全合规
- 与Microsoft 365整合

---

### AWS Bedrock

| 项目 | 信息 |
|------|------|
| **核心服务** | Amazon Bedrock |
| **模型** | Claude, LLaMA, Mistral, Titan, Cohere |
| **特点** | 多模型选择 |

**核心产品**：
- **Amazon Bedrock**：多模型API
- **SageMaker**：ML平台
- **Amazon Q**：AI助手

**优势**：
- 多模型可选
- 与AWS生态整合
- 成本优化工具

---

### Google Cloud Vertex AI

| 项目 | 信息 |
|------|------|
| **核心服务** | Vertex AI |
| **模型** | Gemini, PaLM, 市场模型 |
| **特点** | 原生Gemini支持 |

**核心产品**：
- **Vertex AI Studio**：AI开发平台
- **Gemini API**：Google模型访问
- **Model Garden**：模型市场

**优势**：
- Gemini原生支持
- TPU成本优势
- 数据分析整合

---

## 平台对比

| 维度 | Azure | AWS | GCP |
|------|-------|-----|-----|
| OpenAI模型 | ✅ 独家 | ❌ | ❌ |
| Claude模型 | ❌ | ✅ | ❌ |
| Gemini模型 | ❌ | ❌ | ✅ |
| 开源模型 | ✅ | ✅ | ✅ |
| 企业合规 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| 生态整合 | Microsoft | AWS | Google |

---

## 模型即服务（MaaS）

### API调用方式
```python
# Azure OpenAI
import openai
client = openai.AzureOpenAI(
    api_key="...",
    api_version="2024-02-01",
    azure_endpoint="..."
)

# Anthropic
import anthropic
client = anthropic.Anthropic(api_key="...")

# Google
import google.generativeai as genai
genai.configure(api_key="...")
```

### 定价模式
- **按token计费**：最常见
- **按请求计费**：固定价格/请求
- **预留实例**：预付费折扣
- **专用实例**：独占GPU

---

## 企业AI部署选项

| 选项 | 控制 | 成本 | 复杂度 |
|------|------|------|--------|
| API调用 | 低 | 按需 | 低 |
| 云部署 | 中 | 中等 | 中 |
| 私有云 | 高 | 高 | 高 |
| 本地部署 | 最高 | 最高 | 最高 |

---

## 2025年云AI趋势

1. **多模型策略**：企业使用多个模型
2. **成本优化**：智能路由，选择最便宜的模型
3. **安全合规**：数据驻留，隐私保护
4. **边缘AI**：更多推理在边缘完成
5. **AI原生应用**：云平台原生支持AI

---

> 💡 **相关概念**：[NVIDIA GPU](/infrastructure/nvidia) | [推理优化](/infrastructure/inference)
