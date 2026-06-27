# Mistral AI {#mistral}

Mistral AI是欧洲最有希望的AI创业公司，以高效的开源模型闻名。

---

## 公司概况

| 项目 | 信息 |
|------|------|
| **成立时间** | 2023年5月 |
| **创始人** | Arthur Mensch, Guillaume Lample, Timothée Lacroix（前Meta/Google） |
| **总部** | 法国巴黎 |
| **估值** | 超过60亿美元（2024年） |
| **理念** | 高效、开源、欧洲AI主权 |

---

## 模型演进

### Mistral 7B（2023年9月）
- **参数**：7.3B
- **特点**：
  - 性能超越LLaMA 2 13B
  - 引入Sliding Window Attention
  - 开源（Apache 2.0）
- **意义**：证明了小模型也能很强

### Mixtral 8x7B（2023年12月）
- **架构**：MoE（8个专家，每次激活2个）
- **总参数**：46.7B（激活12.9B）
- **特点**：
  - 性能媲美GPT-3.5
  - 推理速度极快
  - 开源
- **意义**：MoE架构在开源模型中的成功应用

### Mistral Large（2024年2月）
- **参数**：未公开（估计数百B）
- **特点**：
  - 性能接近GPT-4
  - 支持多语言
  - 闭源（API only）

### Mistral Medium / Small / Tiny
- 多个尺寸满足不同需求
- 性价比优秀

### Mixtral 8x22B（2024年4月）
- 更大的MoE模型
- 开源

### Mistral Large 2（2024年7月）
- 123B参数
- 128K上下文
- 编程和多语言能力大幅提升

### Codestral（2024年5月）
- 专门针对编程优化
- 支持80+编程语言

### Mistral Small 3（2025年1月）
- 24B参数
- 开源
- 性能超越同尺寸模型

---

## 核心技术特点

### MoE（Mixture of Experts）
- Mistral是MoE架构的先驱之一
- 总参数大，激活参数小
- 兼顾性能和效率

### Sliding Window Attention
- 更高效的注意力机制
- 降低计算复杂度

### 欧洲AI战略
- 法国政府支持
- 欧洲AI主权的代表
- 强调数据隐私和合规

---

## 与竞争对手对比

| 维度 | Mistral | LLaMA | GPT |
|------|---------|-------|-----|
| 总部 | 法国 | 美国 | 美国 |
| 开源 | 部分开源 | 完全开源 | 闭源 |
| 效率 | 极高 | 高 | 中等 |
| 生态 | 较小 | 最大 | 最大 |

---

> 💡 **相关概念**：[MoE架构](/infrastructure/training) | [开源AI](/open-source/)
