# Google: Gemini系列 {#google}

Google是Transformer架构的发明者（2017年"Attention Is All You Need"论文），在AI领域有深厚积累。Gemini系列是其旗舰大模型。

---

## 公司概况

| 项目 | 信息 |
|------|------|
| **AI部门** | Google DeepMind（2023年合并） |
| **负责人** | Demis Hassabis（DeepMind CEO） |
| **核心优势** | Transformer发明者、TPU自研芯片、海量数据 |
| **核心产品** | Gemini, Bard→Gemini App, Google AI Studio |

---

## Gemini系列模型演进

### PaLM 2（2023年5月）
- Gemini的前身
- 驱动Bard聊天机器人
- 支持100+语言

### Gemini 1.0（2023年12月6日）

#### Gemini Ultra
- 最强版本，超越GPT-4在多项基准测试
- 首个在MMLU测试中超越人类专家的模型

#### Gemini Pro
- 平衡性能与成本
- 驱动Bard

#### Gemini Nano
- 端侧模型，运行在手机上
- Pixel 8 Pro首发

**核心特点**：原生多模态，从一开始就在文本、图像、音频、视频上联合训练

### Gemini 1.5 Pro（2024年2月15日）
- **上下文窗口**：100万token（后扩展到200万）
- **意义**：
  - 可以处理整本《指环王》
  - 可以分析数小时的视频
  - 超长上下文理解能力
- **架构**：MoE（Mixture of Experts）

### Gemini 1.5 Flash（2024年5月）
- 轻量级版本
- 速度极快，成本极低
- 适合大批量处理

### Gemini 2.0 Flash（2024年12月11日）
- 原生工具使用能力
- 支持多模态输出（图像、音频生成）
- Agent功能（Deep Research, Project Astra, Jules）

### Gemini 2.5 Pro（2025年3月25日）
- **推理能力**：引入"思考"能力
- **上下文**：100万token
- **特点**：
  - 在多项推理基准测试中领先
  - 编程能力大幅提升
  - LMArena排名第一

### Gemini 2.5 Flash（2025年5月）
- 性价比极高的推理模型
- 适合需要快速推理的场景

---

## 核心技术特点

### 原生多模态
- 不是"文本模型+视觉编码器"的组合
- 从训练开始就在所有模态上联合学习
- 对图像和视频的理解更深入

### 超长上下文
- 100万-200万token的上下文窗口
- 行业最长，远超竞争对手
- 可以处理整本书或长视频

### TPU自研芯片
- Google有自己的AI芯片（TPU）
- 不依赖NVIDIA
- 训练成本更有优势

### Agent能力
- **Project Astra**：通用AI助手
- **Deep Research**：自动深度研究
- **Jules**：AI编程助手
- **Mariner**：浏览器Agent

---

## 与竞争对手对比

| 维度 | Google Gemini | OpenAI GPT | Anthropic Claude |
|------|---------------|------------|------------------|
| 上下文长度 | 200万（最长） | 256K | 200K |
| 多模态 | 原生（最强） | 原生 | 基础 |
| 推理能力 | 2.5 Pro很强 | o3-pro最强 | Claude 4强 |
| 编程能力 | 良好 | 很强 | 最强 |
| 开源 | 不开源 | 不开源 | 不开源 |
| 价格 | 较低 | 中等 | 较高 |

---

## 定价策略

| 模型 | 输入价格 | 输出价格 |
|------|----------|----------|
| Gemini 2.5 Pro | $1.25/M | $10/M |
| Gemini 2.5 Flash | $0.15/M | $0.6/M |
| Gemini 1.5 Pro | $1.25/M | $5/M |

---

> 💡 **相关概念**：[多模态](/concepts/multi-modal) | [推理能力](/concepts/reasoning) | [AI Agent](/concepts/agent)
