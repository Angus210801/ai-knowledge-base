# 核心概念总览 {#concepts}

AI大模型时代涌现了许多新概念和技术。理解这些概念是掌握AI发展的关键。

---

## 概念地图

```
AI大模型
├── 基础技术
│   ├── Transformer（2017）
│   ├── Tokenization（分词）
│   ├── 预训练（Pre-training）
│   ├── 微调（Fine-tuning）
│   └── RLHF / DPO
├── 核心能力
│   ├── 多模态（Multimodal）
│   ├── 推理（Reasoning）
│   ├── 长上下文（Long Context）
│   └── Embedding（向量化）
├── 应用范式
│   ├── Prompt Engineering
│   ├── Context Engineering（上下文工程）
│   ├── RAG（检索增强生成）
│   ├── Function Calling（工具调用）
│   └── AI Agent（智能体）
├── Agent生态
│   ├── Hook（生命周期钩子）
│   ├── Skill（技能）
│   ├── Tool（工具）
│   ├── Memory（记忆）
│   ├── Workflow（工作流）
│   └── Multi-Agent（多智能体）
├── 基础设施
│   ├── MoE（混合专家）
│   ├── 量化（Quantization）
│   ├── 向量数据库
│   └── 分布式训练
├── 生态协议
│   ├── MCP（Model Context Protocol）
│   └── A2A（Agent-to-Agent）
└── 安全与评估
    ├── Guardrails（护栏）
    ├── Grounding（事实锚定）
    ├── Human-in-the-Loop（人机协作）
    └── Evaluation（评估基准）
```

---

## 快速导航

### 核心概念

| 概念 | 一句话解释 | 重要性 |
|------|------------|--------|
| [Agent](/concepts/agent) | 能自主完成任务的AI | ⭐⭐⭐⭐⭐ |
| [MCP](/concepts/mcp) | AI连接工具的标准协议 | ⭐⭐⭐⭐⭐ |
| [RAG](/concepts/rag) | 让AI基于真实数据回答 | ⭐⭐⭐⭐⭐ |
| [Prompt Engineering](/concepts/prompt-engineering) | 如何与AI有效沟通 | ⭐⭐⭐⭐ |
| [Fine-tuning](/concepts/fine-tuning) | 让模型适应特定任务 | ⭐⭐⭐⭐ |
| [Function Calling](/concepts/function-calling) | 让AI调用外部工具 | ⭐⭐⭐⭐ |
| [多模态](/concepts/multi-modal) | 文本+图像+视频+音频 | ⭐⭐⭐⭐ |
| [推理能力](/concepts/reasoning) | AI的深度思考能力 | ⭐⭐⭐⭐⭐ |
| [AI编程](/concepts/ai-coding) | AI辅助写代码 | ⭐⭐⭐⭐⭐ |

### 进阶概念

| 概念 | 一句话解释 | 重要性 |
|------|------------|--------|
| [Hook](/concepts/extended-concepts#hook) | Agent生命周期回调 | ⭐⭐⭐⭐ |
| [Skill](/concepts/extended-concepts#skill) | Agent可复用能力 | ⭐⭐⭐⭐ |
| [Tool](/concepts/extended-concepts#tool) | Agent可调用的外部功能 | ⭐⭐⭐⭐ |
| [Memory](/concepts/extended-concepts#memory) | Agent保持上下文的能力 | ⭐⭐⭐⭐ |
| [Workflow](/concepts/extended-concepts#workflow) | 多步骤Agent流程 | ⭐⭐⭐⭐ |
| [Embedding](/concepts/extended-concepts#embedding) | 文本转向量 | ⭐⭐⭐⭐⭐ |
| [Guardrails](/concepts/extended-concepts#guardrails) | AI安全限制 | ⭐⭐⭐⭐ |
| [Multi-Agent](/concepts/extended-concepts#multi-agent) | 多Agent协作 | ⭐⭐⭐⭐ |
| [Context Engineering](/concepts/extended-concepts#context-engineering) | 设计AI上下文系统 | ⭐⭐⭐⭐ |
| [全部进阶概念](/concepts/extended-concepts) | 更多概念速查 | ⭐⭐⭐ |

---

## 学习路径建议

### 入门（1-2天）
1. 先读[时间线](/timeline/)了解全貌
2. 理解[Prompt Engineering](/concepts/prompt-engineering) - 与AI沟通的基础
3. 了解[RAG](/concepts/rag) - 让AI更可靠

### 进阶（3-5天）
4. 深入[Agent](/concepts/agent) - AI的未来形态
5. 学习[Function Calling](/concepts/function-calling) - Agent的基础
6. 理解[MCP](/concepts/mcp) - Agent生态的协议

### 高级（1周+）
7. 研究[Fine-tuning](/concepts/fine-tuning) - 定制自己的模型
8. 探索[推理能力](/concepts/reasoning) - AI的深度思考
9. 实践[AI编程](/concepts/ai-coding) - 用AI提升开发效率

---

> 💡 建议按顺序阅读，每个概念都建立在前一个的基础上。
