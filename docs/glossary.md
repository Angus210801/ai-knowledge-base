# 术语表 {#glossary}

AI大模型领域的关键术语解释。

---

## A

### Agent（智能体）
能够自主感知环境、制定计划、执行行动来完成目标的AI系统。详见[AI Agent](/concepts/agent)。

### Agentic AI（智能体AI）
能够自主感知、决策、行动的AI系统范式，是AI发展的新阶段。

### Alignment（对齐）
确保AI系统的目标和行为与人类价值观和意图一致的研究领域。

### AGI（Artificial General Intelligence，通用人工智能）
具有人类水平智能的AI系统，能够执行任何人类可以完成的智力任务。

### ASI（Artificial Superintelligence，超级人工智能）
超越人类智能的AI系统。

### Autoregressive（自回归）
逐个token生成文本的方式，每次根据前面的token预测下一个token。

### A2A（Agent-to-Agent）
Google提出的Agent间通信协议，让不同Agent可以协作完成任务。

---

## B

### Benchmark（基准测试）
评估AI模型性能的标准化测试，如MMLU、HumanEval、MATH等。

### Benchmark（基准测试）
评估AI模型性能的标准化测试，如MMLU、HumanEval、MATH等。

### BF16（Brain Float 16）
一种16位浮点数格式，兼顾精度和范围，广泛用于AI训练。

---

## C

### Chain-of-Thought (CoT)（思维链）
让AI展示推理过程的技术，通过逐步思考提高答案质量。

### ChatBot（聊天机器人）
基于AI的对话系统，如ChatGPT、Claude等。

### Constitutional AI（宪法AI）
Anthropic提出的AI安全方法，用一组原则指导AI行为。

### Context Window（上下文窗口）
模型一次能处理的最大token数量。

### CUDA
NVIDIA的GPU编程平台，是AI计算的事实标准。

### Computer Use（电脑操作）
Anthropic推出的AI操作电脑能力，包括移动鼠标、打字、截屏等。

---

## D

### DPO（Direct Preference Optimization）
直接偏好优化，简化版的RLHF方法。

### Distillation（蒸馏）
用大模型（教师）训练小模型（学生）的技术。

### DeepSeek
中国AI公司，以低成本训练出世界级模型，DeepSeek R1/R2是开源推理模型标杆。

---

## E

### Embedding（嵌入/向量化）
将文本、图像等转换为向量表示的技术。

### Emergent Ability（涌现能力）
模型规模增大后突然出现的能力。

---

## F

### Fine-tuning（微调）
在预训练模型基础上用特定数据进一步训练。

### FP16/FP32
16位/32位浮点数精度。

### Function Calling（函数调用）
让AI调用外部函数/API的能力。

### Flash Attention
高效注意力实现技术，减少内存访问和计算量。

---

## G

### GGUF
llama.cpp使用的模型格式，支持多种量化级别。

### GPU（Graphics Processing Unit）
图形处理单元，AI计算的核心硬件。

### GPT-5
OpenAI于2025年发布的统一推理与通用能力的旗舰模型。

### Grok
xAI（Elon Musk）开发的AI模型，与X平台深度整合。

---

## H

### Hallucination（幻觉）
AI自信地生成虚假或不存在信息的现象。

### HBM（High Bandwidth Memory）
高带宽内存，GPU使用的高速显存。

### Hugging Face
AI界的GitHub，开源模型和数据集的核心平台。

### Hybrid Reasoning（混合推理）
模型同时支持快速回答和深度推理的能力，如Claude 3.7 Sonnet。

### Hook（钩子）
Agent执行过程中的生命周期回调函数，在特定时机触发。详见[进阶概念](/concepts/extended-concepts#hook)。

### HITL（Human-in-the-Loop，人机协作）
在AI流程中加入人工审核和干预的模式。

---

## I

### Inference（推理）
使用训练好的模型进行预测或生成的过程。

### InfiniBand
高速网络技术，用于GPU集群互联。

### INT4/INT8
4位/8位整数量化格式，用于模型压缩和加速推理。

---

## K

### KV Cache
存储注意力计算中Key和Value的技术，用于加速推理。

### Kling
快手开发的AI视频生成模型，中国最强视频生成工具。

---

## L

### LLaMA
Meta的开源大语言模型系列。

### LLaMA
Meta的开源大语言模型系列。

### LoRA（Low-Rank Adaptation）
低秩适配，高效微调方法，只训练少量参数。

### LLM（Large Language Model）
大语言模型。

### LM Studio
本地运行LLM的GUI工具。

### Lunar Lake
Intel的移动端处理器，内置NPU用于AI推理。

---

## M

### MCP（Model Context Protocol）
Anthropic提出的AI工具连接标准协议。

### Memory（记忆）
Agent保持上下文和学习的能力，包括短期、长期、工作、情景、语义记忆。详见[进阶概念](/concepts/extended-concepts#memory)。

### Mixture of Experts (MoE)
混合专家架构，总参数大但每次只激活部分参数。

### MMLU
大规模多任务语言理解基准测试。

### Model Router（模型路由器）
根据任务自动选择最合适的模型的系统。

### Multi-Agent（多智能体）
多个Agent协作完成任务的模式。

### Multimodal（多模态）
能处理多种类型信息（文本、图像、音频、视频）的AI。

### Midjourney
AI图像生成工具，以艺术风格著称。

### Moonshot AI（月之暗面）
中国AI公司，Kimi智能助手开发商，以超长上下文著称。

---

## N

### Neural Network（神经网络）
受生物神经元启发的计算模型。

### NVIDIA
全球最大的AI芯片公司。

### NVLink
NVIDIA的GPU高速互联技术。

### Ollama
本地运行LLM的工具，类似Docker的体验。

---

## P

### Parameter（参数）
模型中可学习的权重值。

### PPO（Proximal Policy Optimization）
近端策略优化，RLHF中使用的强化学习算法。

### Pre-training（预训练）
在大规模数据上训练基础模型的过程。

### Prompt（提示）
输入给AI模型的文本。

### Prompt Engineering（提示工程）
设计和优化提示词的技术。

---

## Q

### QLoRA
量化+LoRA的组合，进一步降低微调资源需求。

### Quantization（量化）
将模型参数从高精度转为低精度的技术。

### Qwen（通义千问）
阿里巴巴开发的大语言模型系列，中文能力出色。

---

## R

### RAG（Retrieval-Augmented Generation）
检索增强生成，让AI基于检索到的信息回答问题。

### Reranking（重排序）
对初步检索结果重新排序，提高相关性的技术。

### Reasoning（推理）
AI进行深度思考和逻辑推理的能力。

### Reinforcement Learning（强化学习）
通过奖励信号训练AI的方法。

### RLHF（Reinforcement Learning from Human Feedback）
人类反馈强化学习。

### Runway
AI视频生成工具，商业化最早的视频生成平台。

---

## S

### Scaling Law（缩放定律）
模型性能与规模的幂律关系。

### SFT（Supervised Fine-tuning）
监督微调。

### Skill（技能）
Agent的可复用能力单元，封装了完成特定任务所需的指令、工具和知识。详见[进阶概念](/concepts/extended-concepts#skill)。

### softmax
将数值转换为概率分布的函数。

### Sora
OpenAI的AI视频生成模型。

### SSE（Server-Sent Events）
服务器推送事件，MCP使用的传输方式。

### Stable Diffusion
Stability AI的开源图像生成模型。

### Streaming（流式输出）
逐token返回结果，而非等待完整响应的技术。

### Structured Output（结构化输出）
让模型输出特定格式（如JSON）的技术。

### Synthetic Data（合成数据）
用AI生成的训练数据。

---

## T

### Token
文本处理的基本单位，可以是一个字、词或子词。

### Token/s
每秒处理的token数，衡量推理速度。

### Tool（工具）
Agent可以调用的外部功能，是Agent与外界交互的基本单元。详见[进阶概念](/concepts/extended-concepts#tool)。

### Transformer
2017年Google提出的架构，现代AI大模型的基础。

### TPU（Tensor Processing Unit）
Google的AI专用芯片。

### TTFT（Time to First Token）
首个token的生成延迟。

### Test-Time Compute（测试时计算）
在推理时使用更多计算资源来提升答案质量的技术。

---

## V

### Vector Database（向量数据库）
存储和检索向量的数据库。

### vLLM
最流行的LLM推理引擎。

### Veo
Google的AI视频生成模型。

### Vibe Coding（氛围编程）
用自然语言描述需求，让AI生成代码的编程方式。

### Vector Database（向量数据库）
专门存储和检索向量的数据库。

---

## W

### Weights（权重）
模型的参数值。

### Windsurf
Codeium开发的AI IDE，以Cascade智能体著称。

### Workflow（工作流）
多个步骤组成的Agent执行流程，实现复杂的多步骤任务。详见[进阶概念](/concepts/extended-concepts#workflow)。

### World Model（世界模型）
理解物理世界规律的AI模型。

---

## 其他重要术语

### SWE-bench
评估AI编程能力的基准测试，基于真实GitHub issue。

### AIME
美国数学邀请赛，用于评估AI数学推理能力。

### GPQA
研究生级别问答基准，用于评估AI科学推理能力。

### ARC-AGI
抽象推理基准，用于评估AI通用智能水平。

### LMArena
大模型竞技场，用户投票评估模型能力的平台。

---

> 💡 如果有术语遗漏，欢迎补充！
