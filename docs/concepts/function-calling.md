# Function Calling（函数调用/工具使用） {#function-calling}

Function Calling是让AI大模型与外部世界交互的关键技术，是AI Agent的基础能力。

---

## 什么是Function Calling？

**定义**：让AI模型能够调用外部函数/API来获取信息或执行操作。

**核心思想**：AI不应该只"说话"，还应该能"做事"。

**例子**：
```
用户：今天北京天气怎么样？

AI思考：我需要调用天气API
AI调用：get_weather(city="北京")
API返回：{"temp": 25, "condition": "晴"}
AI回答：今天北京天气晴朗，气温25°C。
```

---

## 为什么需要Function Calling？

### 问题：纯文本AI的局限

| 问题 | 说明 |
|------|------|
| 无法获取实时信息 | 知识有截止日期 |
| 无法执行操作 | 只能生成文本 |
| 无法访问私有数据 | 不知道你的数据库 |
| 无法精确计算 | 数学可能出错 |

### Function Calling如何解决？

让AI能够：
- **获取信息**：调用搜索、数据库、API
- **执行操作**：发送邮件、创建文件、控制设备
- **精确计算**：调用计算器、代码执行器

---

## Function Calling的工作原理

### 流程

```
1. 用户提问
      ↓
2. AI判断需要调用哪个函数
      ↓
3. AI生成函数调用参数（JSON格式）
      ↓
4. 系统执行函数
      ↓
5. 将结果返回给AI
      ↓
6. AI基于结果生成回答
```

### 示例

#### 1. 定义函数
```json
{
  "name": "get_weather",
  "description": "获取指定城市的天气信息",
  "parameters": {
    "type": "object",
    "properties": {
      "city": {
        "type": "string",
        "description": "城市名称"
      }
    },
    "required": ["city"]
  }
}
```

#### 2. AI生成调用
```json
{
  "name": "get_weather",
  "arguments": {
    "city": "北京"
  }
}
```

#### 3. 执行并返回
```json
{
  "temperature": 25,
  "condition": "晴",
  "humidity": 45
}
```

#### 4. AI生成回答
"今天北京天气晴朗，气温25°C，湿度45%。"

---

## 各平台的Function Calling

### OpenAI Function Calling
```python
import openai

tools = [{
    "type": "function",
    "function": {
        "name": "get_weather",
        "description": "获取天气",
        "parameters": {
            "type": "object",
            "properties": {
                "city": {"type": "string"}
            }
        }
    }
}]

response = openai.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "北京天气？"}],
    tools=tools
)
```

### Anthropic Tool Use
```python
import anthropic

client = anthropic.Anthropic()

tools = [{
    "name": "get_weather",
    "description": "获取天气",
    "input_schema": {
        "type": "object",
        "properties": {
            "city": {"type": "string"}
        }
    }
}]

response = client.messages.create(
    model="claude-4-sonnet-20250522",
    messages=[{"role": "user", "content": "北京天气？"}],
    tools=tools
)
```

### Google Gemini Function Calling
```python
import google.generativeai as genai

tools = [{
    "function_declarations": [{
        "name": "get_weather",
        "description": "获取天气",
        "parameters": {
            "type": "object",
            "properties": {
                "city": {"type": "string"}
            }
        }
    }]
}]
```

---

## Function Calling vs MCP

| 维度 | Function Calling | MCP |
|------|------------------|-----|
| 定义方式 | 各平台不同 | 统一标准 |
| 工具发现 | 手动定义 | 自动发现 |
| 双向通信 | ❌ 单向 | ✅ 双向 |
| 生态 | 碎片化 | 统一 |
| 复杂度 | 低 | 中 |

**关系**：MCP建立在Function Calling之上，提供了更高级的标准化。

---

## Function Calling的最佳实践

### 1. 函数定义要清晰
```json
// ❌ 不好
{
  "name": "search",
  "description": "搜索"
}

// ✅ 好
{
  "name": "search_products",
  "description": "在产品数据库中搜索商品，支持按名称、类别、价格范围筛选",
  "parameters": {
    "query": {
      "type": "string",
      "description": "搜索关键词"
    },
    "category": {
      "type": "string",
      "description": "商品类别",
      "enum": ["electronics", "clothing", "food"]
    }
  }
}
```

### 2. 参数要有限制
- 使用enum限制可选值
- 使用required标记必填参数
- 提供默认值

### 3. 错误处理
- 函数可能失败
- 返回有意义的错误信息
- AI可以理解错误并重试

### 4. 安全性
- 验证AI生成的参数
- 限制函数的权限
- 记录所有调用

---

## Function Calling的应用场景

| 场景 | 函数示例 |
|------|----------|
| 信息查询 | 搜索、数据库查询、API调用 |
| 数据操作 | 创建记录、更新数据 |
| 文件操作 | 读写文件、生成报告 |
| 通信 | 发送邮件、消息通知 |
| 计算 | 数学计算、数据分析 |
| 控制 | 设备控制、系统管理 |

---

## 2025年趋势

1. **并行调用**：同时调用多个函数
2. **流式调用**：实时获取函数结果
3. **自动工具选择**：AI自动判断使用哪个工具
4. **MCP标准化**：Function Calling的统一标准
5. **安全增强**：更完善的权限控制

---

> 💡 **相关概念**：[AI Agent](/concepts/agent) | [MCP协议](/concepts/mcp) | [Prompt Engineering](/concepts/prompt-engineering)
