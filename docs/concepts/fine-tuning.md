# Fine-tuning（微调） {#fine-tuning}

Fine-tuning是让通用大模型适应特定任务的关键技术，通过在特定数据上进一步训练来定制模型。

---

## 什么是Fine-tuning？

**定义**：在预训练的大模型基础上，使用特定任务的数据进行进一步训练，使模型适应特定领域或任务。

**类比**：
- 预训练 = 上大学（广泛知识）
- Fine-tuning = 读研究生（专业领域）

---

## 为什么需要Fine-tuning？

| 场景 | RAG能解决吗？ | 需要Fine-tuning |
|------|--------------|-----------------|
| 访问最新数据 | ✅ | ❌ |
| 特定领域知识 | ✅ | ⚠️ 看情况 |
| 特定风格/语气 | ❌ | ✅ |
| 特定输出格式 | ⚠️ 有限 | ✅ |
| 减少幻觉 | ✅ | ✅ |
| 复杂推理 | ❌ | ✅ |

---

## Fine-tuning方法

### 1. SFT（Supervised Fine-tuning，监督微调）

**原理**：使用"输入-输出"对训练模型

**数据格式**：
```json
{
  "instruction": "将以下英文翻译为中文",
  "input": "Hello, how are you?",
  "output": "你好，你好吗？"
}
```

**特点**：
- 最基本的微调方法
- 需要高质量的标注数据
- 效果直接

### 2. RLHF（Reinforcement Learning from Human Feedback）

**原理**：人类反馈强化学习

**流程**：
1. SFT阶段：用标注数据微调
2. Reward Model训练：人类对输出排序，训练奖励模型
3. PPO优化：用强化学习优化模型

**应用**：
- ChatGPT的核心训练方法
- 让模型更符合人类偏好
- 提高回答的有用性和安全性

### 3. DPO（Direct Preference Optimization）

**原理**：直接偏好优化，简化RLHF

**优势**：
- 不需要训练Reward Model
- 更简单，更稳定
- 效果接近RLHF

**数据格式**：
```json
{
  "prompt": "解释量子计算",
  "chosen": "量子计算利用量子力学原理...",
  "rejected": "量子计算就是很快的计算机..."
}
```

### 4. RFT（Reinforcement Fine-tuning）

**原理**：使用强化学习和自动评分器

**特点**：
- 不需要人类标注偏好
- 使用自动化的grader评分
- 适合有明确评估标准的任务

### 5. LoRA（Low-Rank Adaptation）

**原理**：只训练模型的一小部分参数

**优势**：
- 训练资源需求大幅降低
- 可以在消费级GPU上训练
- 不改变原始模型

**原理图**：
```
原始权重 W (冻结)
     +
ΔW = A × B (训练)
     =
新权重 W' = W + ΔW
```

### 6. QLoRA

**原理**：LoRA + 量化

**优势**：
- 进一步降低内存需求
- 4bit量化 + LoRA
- 可以在单张消费级GPU上微调70B模型

---

## Fine-tuning工具

### OpenAI Fine-tuning API
- 最简单的微调方式
- 上传数据，API自动训练
- 支持GPT-4o等模型

### Hugging Face Transformers
- 最流行的开源微调框架
- 支持各种模型和方法
- 丰富的社区资源

### Axolotl
- 简化微调流程
- 配置文件驱动
- 支持多种微调方法

### Unsloth
- 高效微调框架
- 速度提升2-5倍
- 内存优化

### LLaMA-Factory
- 一站式微调框架
- 支持100+模型
- Web UI界面

---

## Fine-tuning最佳实践

### 1. 数据质量 > 数据数量
- 1000条高质量数据 > 10000条低质量数据
- 确保数据准确、多样、代表

### 2. 选择合适的基础模型
- 通用任务：GPT-4o, Claude, LLaMA
- 编程任务：CodeLLaMA, DeepSeek-Coder
- 中文任务：Qwen, DeepSeek

### 3. 超参数调优
- 学习率：通常1e-5到5e-5
- 训练轮数：1-3轮通常足够
- 批次大小：根据GPU内存调整

### 4. 评估
- 使用独立的测试集
- 人工评估 + 自动评估
- 关注过拟合

### 5. 迭代
- 第一版通常不是最好的
- 根据评估结果调整数据和参数
- 持续改进

---

## Fine-tuning的成本

| 方法 | GPU需求 | 时间 | 成本 |
|------|---------|------|------|
| Full Fine-tuning | 多张A100/H100 | 数小时-数天 | 高 |
| LoRA | 单张A100 | 数小时 | 中 |
| QLoRA | 单张消费级GPU | 数小时 | 低 |
| API Fine-tuning | 无需GPU | 数分钟-数小时 | 按token计费 |

---

## Fine-tuning vs RAG vs Prompt Engineering

| 维度 | Prompt Engineering | RAG | Fine-tuning |
|------|-------------------|-----|-------------|
| 实现难度 | 低 | 中 | 高 |
| 成本 | 低 | 中 | 高 |
| 效果提升 | 有限 | 中等 | 显著 |
| 实时数据 | ❌ | ✅ | ❌ |
| 适用场景 | 通用 | 知识密集 | 特定任务 |

**建议顺序**：先试Prompt Engineering → 不够再用RAG → 仍不够再Fine-tuning

---

## 2025年Fine-tuning趋势

1. **LoRA/QLoRA成为主流**：低成本微调
2. **合成数据训练**：用AI生成训练数据
3. **RLAIF**：AI反馈替代人类反馈
4. **持续学习**：模型不断更新
5. **小模型微调**：8B模型经过微调可匹敌大模型

---

> 💡 **相关概念**：[RAG](/concepts/rag) | [Prompt Engineering](/concepts/prompt-engineering) | [开源模型](/open-source/)
