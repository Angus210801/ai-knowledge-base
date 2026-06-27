# 框架与工具 {#frameworks}

---

## 深度学习框架

### PyTorch
| 项目 | 信息 |
|------|------|
| **公司** | Meta |
| **地位** | AI研究和生产的标准框架 |
| **特点** | 动态图、Python优先、社区最大 |

**为什么统治AI**：
- 灵活性高
- 社区最大
- 几乎所有论文都用PyTorch
- 与Hugging Face深度整合

### JAX
| 项目 | 信息 |
|------|------|
| **公司** | Google |
| **特点** | 函数式编程、自动微分、XLA编译 |
| **用户** | Google DeepMind, Cohere |

### TensorFlow
| 项目 | 信息 |
|------|------|
| **公司** | Google |
| **地位** | 曾经的王者，现在PyTorch更流行 |
| **特点** | 生产部署成熟 |

---

## LLM框架

### Hugging Face Transformers
- **地位**：LLM的标准库
- **模型**：500,000+ 模型
- **功能**：训练、推理、微调
- **支持**：PyTorch, JAX, TensorFlow

### LangChain
- **功能**：LLM应用开发框架
- **特点**：链式调用、Agent、RAG
- **生态**：LangSmith, LangGraph

### LlamaIndex
- **功能**：数据框架
- **特点**：RAG优化
- **数据源**：支持200+数据连接器

---

## Agent框架

| 框架 | 特点 | 适用场景 |
|------|------|----------|
| **LangGraph** | 图状态机 | 复杂工作流 |
| **CrewAI** | 多Agent协作 | 团队任务 |
| **AutoGen** | 多Agent对话 | 研究 |
| **Semantic Kernel** | Microsoft | 企业集成 |

---

## 训练框架

| 框架 | 公司 | 特点 |
|------|------|------|
| **DeepSpeed** | Microsoft | ZeRO优化 |
| **Megatron-LM** | NVIDIA | 大规模训练 |
| **FSDP** | PyTorch | 原生分布式 |
| **ColossalAI** | HPC-AI | 易用 |

---

## 推理框架

| 框架 | 特点 | 适用 |
|------|------|------|
| **vLLM** | PagedAttention | 生产部署 |
| **TensorRT-LLM** | NVIDIA优化 | 高性能 |
| **llama.cpp** | C++实现 | 本地推理 |
| **Ollama** | 简化使用 | 个人使用 |
| **TGI** | Hugging Face | 生产部署 |

---

## 微调框架

| 框架 | 特点 |
|------|------|
| **LLaMA-Factory** | 一站式微调 |
| **Axolotl** | 配置驱动 |
| **Unsloth** | 高效微调 |
| **TRL** | RLHF训练 |

---

## 评估工具

| 工具 | 功能 |
|------|------|
| **lm-evaluation-harness** | 标准评估 |
| **OpenCompass** | 中文评估 |
| **LangSmith** | LLM应用评估 |

---

> 💡 **相关概念**：[开源生态](/open-source/ecosystem) | [训练基础设施](/infrastructure/training)
