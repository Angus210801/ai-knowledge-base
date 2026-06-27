# MCP（Model Context Protocol） {#mcp}

MCP是Anthropic于2024年11月发布的开放协议，旨在为AI模型连接外部工具和数据源提供标准化方式。它是AI Agent生态最重要的基础设施之一。

---

## 什么是MCP？

**全称**：Model Context Protocol（模型上下文协议）

**一句话定义**：MCP是一个开放标准，让AI模型能够安全地连接到各种数据源和工具，就像USB为外设提供了统一接口一样。

**发布方**：Anthropic（2024年11月25日）

---

## 为什么需要MCP？

### 问题：AI的"信息孤岛"

在MCP之前，每个AI模型都有自己连接外部工具的方式：

```
ChatGPT → OpenAI Plugins → 只能在ChatGPT用
Claude → Anthropic Tools → 只能在Claude用
Gemini → Google Extensions → 只能在Gemini用
```

**问题**：
- 每个平台都要重新开发工具
- 开发者需要为每个AI写不同的集成代码
- 没有统一标准，生态碎片化

### 解决：MCP提供统一标准

```
任意AI模型 ←→ MCP协议 ←→ 任意工具/数据源
```

**好处**：
- 开发一次，所有AI都能用
- 统一的安全和权限模型
- 促进工具生态繁荣

---

## MCP的工作原理

### 架构

```
┌─────────────┐     MCP协议      ┌──────────────┐
│   AI模型    │ ←──────────────→ │  MCP Server  │
│  (Host)     │                  │  (工具提供方) │
└─────────────┘                  └──────────────┘
                                      ↓
                                 ┌──────────────┐
                                 │  外部资源     │
                                 │  (数据库/API/ │
                                 │   文件系统)   │
                                 └──────────────┘
```

### 核心组件

#### 1. MCP Host（宿主）
- AI应用（如Claude Desktop, Claude Code, Cursor）
- 负责发起请求

#### 2. MCP Server（服务器）
- 提供工具和数据
- 一个Server可以提供多个工具
- 例如：GitHub Server, 数据库Server, 文件系统Server

#### 3. MCP Client（客户端）
- 在Host中运行
- 与Server通信

### 通信方式

MCP使用JSON-RPC 2.0协议，支持多种传输方式：
- **stdio**：本地进程通信
- **SSE**：HTTP Server-Sent Events
- **Streamable HTTP**：新的流式HTTP传输

---

## MCP提供的能力

### 1. Tools（工具）
让AI调用外部功能：
```
搜索工具：search("AI news")
代码执行：execute_code("print('hello')")
API调用：call_api("github", "get_repos")
```

### 2. Resources（资源）
让AI访问外部数据：
- 文件内容
- 数据库记录
- API响应

### 3. Prompts（提示模板）
预定义的提示词模板：
- 代码审查模板
- 文档生成模板
- 数据分析模板

### 4. Sampling（采样）
让Server请求Host的AI能力：
- 实现Agent间的协作

---

## MCP的实际应用

### 开发工具
| Server | 功能 |
|--------|------|
| GitHub | 操作仓库、PR、Issue |
| Git | 版本控制操作 |
| File System | 读写文件 |
| Database | 查询数据库 |
| Docker | 容器管理 |

### 生产力工具
| Server | 功能 |
|--------|------|
| Slack | 发送/读取消息 |
| Google Drive | 文件管理 |
| Notion | 笔记管理 |
| Linear | 项目管理 |

### 数据分析
| Server | 功能 |
|--------|------|
| PostgreSQL | 数据库查询 |
| SQLite | 本地数据库 |
| CSV | 数据文件处理 |

---

## MCP的生态发展（2025-2026）

### 支持MCP的AI应用

| 应用 | 类型 | 发布方 | 支持时间 |
|------|------|--------|----------|
| Claude Desktop | 桌面应用 | Anthropic | 2024.11（首发） |
| Claude Code | 编程工具 | Anthropic | 2025.02 |
| Cursor | AI IDE | Cursor Inc. | 2025.01 |
| Windsurf | AI IDE | Codeium | 2025.02 |
| VS Code (Copilot) | IDE | Microsoft | 2025.03 |
| Cline | VS Code插件 | 开源社区 | 2024.12 |
| Zed | 编辑器 | Zed Industries | 2025 |
| Continue | IDE插件 | Continue.dev | 2025 |
| Sourcegraph Cody | 代码搜索 | Sourcegraph | 2025 |

### MCP Server生态（2025-2026）

#### 规模
- **官方Server**：GitHub, GitLab, Google, Slack, Linear, Notion, Stripe等50+
- **社区Server**：数千个开源Server
- **企业Server**：大量公司内部MCP Server
- **总数量**：超过5000个可用Server（2026年中）

#### 主要类别

| 类别 | 代表Server | 数量 |
|------|------------|------|
| 代码管理 | GitHub, GitLab, Bitbucket | 10+ |
| 数据库 | PostgreSQL, MySQL, MongoDB, Redis | 20+ |
| 云服务 | AWS, Azure, GCP | 15+ |
| 通信 | Slack, Discord, Teams | 10+ |
| 项目管理 | Linear, Jira, Asana, Notion | 15+ |
| 设计 | Figma, Canva | 5+ |
| 支付 | Stripe, PayPal | 5+ |
| 分析 | Mixpanel, Amplitude, PostHog | 10+ |

### MCP的行业影响

#### 2025年
- 成为AI工具连接的事实标准
- 主流AI应用全部支持
- 企业开始内部开发MCP Server
- 开源社区贡献大量Server

#### 2026年
- 生态超过5000个Server
- 企业大规模采用
- 安全和权限模型成熟
- A2A（Agent-to-Agent）协议出现

---

## MCP与其他协议对比

| 维度 | MCP | OpenAI Plugins | Function Calling |
|------|-----|----------------|------------------|
| 标准化 | ✅ 开放标准 | ❌ 封闭 | ⚠️ 各家不同 |
| 跨平台 | ✅ | ❌ 仅ChatGPT | ⚠️ 需适配 |
| 双向通信 | ✅ | ❌ | ❌ |
| 生态 | 快速增长 | 已衰落 | 最广泛 |

---

## 如何使用MCP

### 作为用户
1. 在Claude Desktop中配置MCP Server
2. 或在Cursor/Claude Code中添加
3. AI就可以使用这些工具

### 作为开发者
1. 使用MCP SDK开发Server
2. 发布到MCP生态
3. 所有支持MCP的AI都能使用

### 示例：创建一个简单的MCP Server

```python
from mcp import Server, Tool

server = Server("my-server")

@server.tool()
def search_database(query: str) -> str:
    """搜索数据库"""
    # 实现搜索逻辑
    return results

server.run()
```

---

## MCP的未来

1. **更广泛的采用**：所有主流AI都将支持MCP
2. **更丰富的生态**：更多高质量的MCP Server
3. **标准化推进**：可能成为行业标准
4. **安全增强**：更完善的权限和安全模型
5. **Agent协作**：通过MCP实现Agent间的互操作

---

## 总结

MCP就像AI时代的"USB接口"：
- **USB**：让电脑连接各种外设
- **MCP**：让AI连接各种工具和数据

它是AI Agent生态最重要的基础设施，正在快速成为行业标准。

---

> 💡 **相关概念**：[AI Agent](/concepts/agent) | [Function Calling](/concepts/function-calling) | [Claude Code](/models/anthropic)
