# Prompt Engineering（提示词工程） {#prompt-engineering}

Prompt Engineering是与AI大模型交互的基础技能，掌握它可以大幅提升AI的输出质量。

---

## 什么是Prompt Engineering？

**定义**：设计和优化输入给AI模型的提示词（Prompt），以获得更好输出的技术和方法论。

**为什么重要**：
- 同样的模型，不同的Prompt可以产生天壤之别的输出
- 好的Prompt可以让小模型胜过大模型
- 是使用AI的基础技能

---

## 核心技术

### 1. Zero-shot Prompting（零样本提示）
直接提问，不提供示例：
```
将以下文本分类为正面或负面情感：
"这家餐厅的服务很好，食物也很美味。"
```

### 2. Few-shot Prompting（少样本提示）
提供几个示例：
```
将文本分类为正面或负面情感。

文本："电影太无聊了" → 负面
文本："景色很美" → 正面
文本："服务态度差" → 负面

文本："食物很新鲜" →
```

### 3. Chain-of-Thought (CoT)（思维链）
让模型展示推理过程：
```
问题：小明有5个苹果，给了小红2个，又买了3个，现在有几个？

让我们一步步思考：
1. 小明开始有5个苹果
2. 给了小红2个，剩下5-2=3个
3. 又买了3个，现在有3+3=6个

答案：6个
```

### 4. Tree-of-Thought (ToT)（思维树）
探索多条推理路径：
- 同时考虑多个可能的解决方案
- 评估每条路径的可行性
- 选择最优路径

### 5. Self-Consistency（自洽性）
多次生成，取多数结果：
- 提高答案的可靠性
- 减少随机性的影响

### 6. ReAct（推理+行动）
结合推理和工具调用：
```
Thought: 我需要查找2025年的AI新闻
Action: search("2025 AI news")
Observation: [搜索结果]
Thought: 根据搜索结果...
```

---

## Prompt设计原则

### 1. 明确（Be Specific）
❌ "写一篇关于AI的文章"
✅ "写一篇800字的文章，介绍2025年AI Agent的发展，面向非技术读者，使用中文"

### 2. 提供上下文
```
你是一位资深的Python开发者，专注于Web开发。
请帮我优化以下FastAPI代码的性能...
```

### 3. 使用分隔符
```
请根据以下文档回答问题：

"""
{文档内容}
"""

问题：{问题}
```

### 4. 指定输出格式
```
请以JSON格式输出：
{
  "summary": "摘要",
  "key_points": ["要点1", "要点2"],
  "sentiment": "positive/negative/neutral"
}
```

### 5. 迭代优化
- 第一次的Prompt通常不是最好的
- 根据输出结果不断调整
- 记录有效的Prompt模板

---

## 高级技巧

### 1. Role Prompting（角色扮演）
```
你是一位经验丰富的数据科学家，擅长使用Python进行数据分析。
请帮我分析以下数据集...
```

### 2. System Prompt（系统提示）
为模型设定长期行为：
```
你是一个专业的代码审查助手。
- 始终用中文回答
- 关注代码的安全性和性能
- 给出具体的改进建议
```

### 3. XML标签结构化
```xml
<instructions>
请根据以下规则处理数据：
1. 清洗缺失值
2. 标准化数值
</instructions>

<data>
{数据内容}
</data>
```

### 4. 元提示（Meta-prompting）
让AI帮助优化Prompt：
```
我有以下Prompt，但输出质量不理想：
"{原始Prompt}"

请帮我改进这个Prompt，使其输出更准确、更结构化。
```

---

## Prompt Engineering在不同场景的应用

### 编程
```
请用Python编写一个函数，要求：
- 输入：字符串列表
- 输出：按长度排序的列表
- 使用类型注解
- 包含docstring
- 编写对应的单元测试
```

### 数据分析
```
分析以下销售数据，要求：
1. 计算每月的增长率
2. 识别异常值
3. 给出预测建议
4. 用Markdown表格展示结果
```

### 写作
```
请以专业的口吻撰写一封商务邮件：
- 收件人：客户
- 目的：延期交付通知
- 语气：诚恳、专业
- 长度：200字左右
```

---

## 常见错误

| 错误 | 改进 |
|------|------|
| 太模糊 | 添加具体要求和约束 |
| 没有示例 | 提供1-3个示例 |
| 没有指定格式 | 明确输出格式 |
| 一次问太多 | 分步骤提问 |
| 没有迭代 | 根据结果优化Prompt |

---

## Prompt Engineering工具

| 工具 | 功能 |
|------|------|
| OpenAI Playground | 测试和调试Prompt |
| Anthropic Console | Claude的Prompt工作台 |
| PromptPerfect | 自动优化Prompt |
| LangSmith | Prompt版本管理和评估 |

---

## 学习资源

1. **OpenAI Prompt Engineering Guide**：官方指南
2. **Anthropic Prompt Engineering**：Claude的最佳实践
3. **DAIR.AI Prompt Engineering Guide**：社区综合指南
4. **Learn Prompting**：互动学习平台

---

> 💡 **相关概念**：[RAG](/concepts/rag) | [Fine-tuning](/concepts/fine-tuning) | [Function Calling](/concepts/function-calling)
