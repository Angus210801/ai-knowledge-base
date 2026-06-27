# Anthropic: Claude系列 {#anthropic}

Anthropic由前OpenAI成员创立，以AI安全为核心理念，Claude系列是ChatGPT最强有力的竞争者。

---

## 公司概况

| 项目 | 信息 |
|------|------|
| **成立时间** | 2021年 |
| **创始人** | Dario Amodei, Daniela Amodei（兄妹） |
| **总部** | 美国旧金山 |
| **估值** | 超过600亿美元（2025年） |
| **核心理念** | AI安全优先（Constitutional AI） |
| **投资方** | Google, Amazon, Salesforce等 |

---

## Claude系列模型演进

### Claude 1（2023年3月）
- 首个公开发布的Claude模型
- 100K上下文窗口（当时最长）
- 强调安全和有帮助的回答

### Claude 2（2023年7月）
- 上下文扩展到100K
- 支持文件上传分析
- 编程和推理能力提升

### Claude 3系列（2024年3月4日）

#### Claude 3 Opus
- **定位**：旗舰模型
- **特点**：多项基准测试超越GPT-4
- **上下文**：200K

#### Claude 3 Sonnet
- **定位**：平衡性能与成本
- **特点**：速度是Opus的2倍，成本更低

#### Claude 3 Haiku
- **定位**：轻量级
- **特点**：速度极快，成本极低

### Claude 3.5 Sonnet（2024年6月20日）
- 性能超越Claude 3 Opus
- 成本仅为Opus的1/5
- **Artifacts功能**：实时预览代码和设计
- 成为开发者的首选工具

### Claude 3.5 Sonnet升级版（2024年10月22日）
- **Computer Use**：可以操作电脑（移动鼠标、打字、截图）
- **意义**：Agent能力的重大突破

### Claude 3.5 Haiku（2024年10月）
- 比Claude 3 Haiku更便宜、更快

### Claude 3.7 Sonnet（2025年2月）
- **Extended Thinking**：扩展思考能力
- 在复杂推理任务上表现大幅提升

### Claude 4 Opus（2025年5月22日）
- **编程能力**：SWE-bench得分72.5%，行业最强
- **Agent能力**：长时间自主执行复杂任务
- **特点**：在编码和Agent任务上超越所有竞争对手

### Claude 4 Sonnet（2025年5月22日）
- 替代Claude 3.5 Sonnet
- 性能全面提升，成本保持不变

---

## 核心技术特点

### Constitutional AI（宪法AI）
- 不依赖大量人类标注
- 用一组"宪法原则"指导AI行为
- 让AI自我批评和改进
- **意义**：更可扩展的AI对齐方法

### MCP（Model Context Protocol）
- 2024年11月发布
- 为AI连接外部工具和数据提供标准化协议
- 已被广泛采用，成为Agent生态的基础设施

### Computer Use
- AI可以操作电脑完成任务
- 包括移动鼠标、打键盘、截屏等
- **意义**：从对话到行动的跨越

---

## Claude Code

2025年推出的AI编程工具，成为开发者最受欢迎的AI编程助手之一。

### 发展历程
- **2025年2月**：随Claude 3.7 Sonnet发布，研究预览
- **2025年5月**：随Claude 4系列正式发布
- **2025年6月**：成为最流行的AI编程Agent之一

### 核心能力
- **终端原生**：直接在终端中运行，开发者友好
- **代码库理解**：理解整个项目的结构和上下文
- **自主执行**：可自主完成多步骤编程任务
- **MCP集成**：支持MCP工具，可连接GitHub、数据库等
- **Extended Thinking**：支持深度思考模式
- **多文件编辑**：同时修改多个文件

### 典型使用场景
```bash
# 代码审查
claude "审查这个PR的代码质量"

# 功能开发
claude "实现用户认证功能，使用JWT"

# 调试
claude "修复这个内存泄漏问题"

# 重构
claude "将这个函数重构为更清晰的结构"
```

### 与其他工具对比
| 工具 | 形式 | Agent能力 | 代码库理解 | 适用场景 |
|------|------|-----------|------------|----------|
| Claude Code | 终端CLI | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 复杂编程任务 |
| Cursor | AI IDE | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 日常开发 |
| GitHub Copilot | IDE插件 | ⭐⭐ | ⭐⭐⭐ | 代码补全 |
| Windsurf | AI IDE | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 日常开发 |
| Devin | 自主Agent | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 全栈开发 |

### 为什么Claude Code受欢迎？
1. **终端原生**：不离开命令行，开发者体验好
2. **Agent能力**：可以自主执行复杂任务
3. **MCP生态**：可连接各种开发工具
4. **Claude 4后端**：编程能力最强的模型
5. **开源友好**：可定制和扩展

---

## 定价策略

| 模型 | 输入价格 | 输出价格 | 适用场景 |
|------|----------|----------|----------|
| Claude 4 Opus | $15/M | $75/M | 复杂任务，编程 |
| Claude 4 Sonnet | $3/M | $15/M | 日常使用 |
| Claude 3.5 Haiku | $0.25/M | $1.25/M | 低成本，高速 |

---

## 与OpenAI的关键差异

| 维度 | Anthropic (Claude) | OpenAI (GPT) |
|------|-------------------|--------------|
| 安全理念 | AI安全为核心使命 | 安全重要但非首要 |
| 技术路线 | Constitutional AI | RLHF |
| 开放性 | API为主，不开源 | API为主，不开源 |
| 编程能力 | Claude 4 Opus最强 | GPT-5也很强 |
| Agent能力 | Computer Use, MCP | Function Calling |
| 企业文化 | 研究导向 | 产品导向 |

---

> 💡 **相关概念**：[MCP协议](/concepts/mcp) | [AI Agent](/concepts/agent) | [Constitutional AI](/safety/)
