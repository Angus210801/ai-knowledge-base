# AI发展时间线 {#timeline}

从2022年11月ChatGPT发布到2026年，AI领域经历了前所未有的爆发式发展。以下是最关键的里程碑事件。

<script setup>
import timelineData from '../data/timeline.json'

const highSignificance = timelineData.filter(e => e.significance === 'high')
const years = {}
timelineData.forEach(e => {
  const y = e.date.substring(0, 4)
  if (!years[y]) years[y] = []
  years[y].push(e)
})
</script>

---

## 里程碑事件总览

> 📊 数据驱动 · 共收录 **{{ timelineData.length }}** 个事件 · 其中 **{{ highSignificance.length }}** 个高影响力事件

<Timeline :items="highSignificance" />

---

## 2022：ChatGPT改变一切

<span class="year-marker">2022</span>

### 11月30日 - ChatGPT发布
- **发布方**：OpenAI
- **意义**：基于GPT-3.5的对话式AI，上线5天用户突破100万，2个月突破1亿
- **影响**：开启了生成式AI的大众化时代，让普通人第一次真正体验到AI的能力

### 12月 - Stability AI发布Stable Diffusion 2.0
- 开源图像生成模型，推动了AI艺术创作的爆发

---

## 2023：百模大战元年

<span class="year-marker">2023</span>

### 2月 - Meta发布LLaMA
- **参数规模**：7B/13B/33B/65B
- **意义**：虽然最初仅限研究用途，但模型权重很快被泄露，催生了整个开源LLM生态
- **影响**：Alpaca、Vicuna等大量基于LLaMA的微调模型涌现

### 2月 - Microsoft发布New Bing
- 将GPT-4集成到搜索引擎，AI搜索时代开启

### 3月14日 - GPT-4发布
- **发布方**：OpenAI
- **关键能力**：多模态（支持图像输入）、更强推理、更长上下文（8K/32K）
- **影响**：树立了大模型能力的新标杆，被广泛集成到各类产品中

### 3月 - Anthropic发布Claude
- **特点**：强调AI安全，采用Constitutional AI方法
- **定位**：ChatGPT的主要竞争对手

### 3月 - Google发布PaLM 2
- 为后续Gemini奠定基础

### 7月 - Meta发布LLaMA 2
- **许可**：开源商用许可
- **参数**：7B/13B/70B
- **意义**：首个允许商用的高质量开源大模型，加速了开源AI发展

### 7月 - 中国百模大战
- 百度文心一言、阿里通义千问、智谱GLM、百川智能等数十家中国公司密集发布大模型
- 被称为"百模大战"

### 9月 - ChatGPT多模态升级
- 支持语音对话和图像理解

### 11月 - OpenAI董事会危机
- Sam Altman被解雇后又复职，暴露了AI安全与商业化之间的张力

### 12月 - Google发布Gemini 1.0
- **版本**：Ultra/Pro/Nano
- **特点**：原生多模态，从一开始就在文本、图像、音频、视频上训练

### 12月 - Mistral发布Mixtral 8x7B
- 开源MoE（Mixture of Experts）模型，性能媲美GPT-3.5

---

## 2024：Agent与推理的崛起

<span class="year-marker">2024</span>

### 2月 - Google发布Gemini 1.5 Pro
- **上下文窗口**：100万token（后扩展到200万）
- **意义**：超长上下文能力，可以处理整本书或数小时的视频

### 2月15日 - OpenAI发布Sora
- 文本生成视频模型，最长60秒
- 展示了AI理解物理世界的能力

### 3月 - Anthropic发布Claude 3系列
- **版本**：Opus/Sonnet/Haiku
- **特点**：Claude 3 Opus在多项基准测试中超越GPT-4

### 4月 - Meta发布LLaMA 3
- **参数**：8B/70B（后推出405B）
- **特点**：大幅提升多语言能力

### 5月13日 - OpenAI发布GPT-4o
- **"o"代表"omni"（全能）
- **特点**：原生多模态，支持文本/图像/音频的实时对话
- **定价**：比GPT-4 Turbo便宜50%

### 6月 - Anthropic发布Claude 3.5 Sonnet
- 性能超越Claude 3 Opus，同时成本更低
- Artifacts功能允许实时预览代码和设计

### 7月 - OpenAI发布GPT-4o mini
- 替代GPT-3.5 Turbo，性价比大幅提升

### 8月 - xAI发布Grok-2
- Elon Musk的AI公司，与X平台深度整合

### 9月 - OpenAI发布o1
- **意义**：首个"推理模型"，在数学和编程任务上表现突出
- **特点**：使用"思维链"进行深度推理，回答前会"思考"

### 9月 - Meta发布LLaMA 3.2
- 引入多模态能力和轻量级模型（1B/3B）

### 10月 - Anthropic发布Claude 3.5 Sonnet升级版
- 引入"Computer Use"功能，可以操作电脑

### 10月 - 发布Claude 3.5 Haiku
- 轻量级模型，速度极快

### 11月 - Anthropic发布MCP（Model Context Protocol）
- **意义**：为AI模型连接外部工具和数据源提供标准化协议
- **影响**：成为AI Agent生态的重要基础设施

### 12月 - Google发布Gemini 2.0 Flash
- 引入原生工具使用能力

### 12月 - OpenAI发布o3和o3 mini
- 推理能力进一步提升

---

## 2025：DeepSeek震撼与Agent爆发

<span class="year-marker">2025</span>

2025年是AI发展的分水岭年份。DeepSeek的崛起证明了高效训练的可行性，Agent生态全面爆发，推理模型成为新范式。

### 1月 - DeepSeek震撼全球

#### 1月20日 - DeepSeek R1发布
- **发布方**：中国AI公司深度求索（DeepSeek）
- **架构**：671B参数MoE模型（37B激活），基于DeepSeek V3
- **训练方法**：大规模强化学习（RL），无需大量SFT数据
- **性能**：在AIME 2024数学竞赛中得分79.8%，与OpenAI o1持平
- **训练成本**：仅约557万美元（GPT-4估计1亿美元+）
- **开源**：MIT许可，完全开源
- **影响**：
  - 1月27日NVIDIA股价暴跌17%，市值蒸发近6000亿美元
  - 引发"AI是否需要这么多GPU"的全球讨论
  - 证明中国在AI领域有真正的原始创新能力
  - 开源推理模型首次匹敌最强闭源模型
- **蒸馏版本**：1.5B/7B/8B/14B/32B/70B，可在消费级硬件运行
- **意义**：2025年最重要的AI事件，改变了行业格局

#### 1月 - DeepSeek应用登顶App Store
- 超越ChatGPT成为下载量最高的AI应用
- 全球媒体广泛报道

### 2月 - Anthropic回应

#### 2月24日 - Claude 3.7 Sonnet发布
- **Extended Thinking**：扩展思考功能，可自主决定思考深度
- **编程能力**：SWE-bench得分62.3%，行业领先
- **特点**：首个混合推理模型（快速回答+深度思考可切换）
- **Claude Code发布**：终端AI编程工具进入研究预览

### 3月 - Google与OpenAI发力

#### 3月25日 - Gemini 2.5 Pro发布
- **推理能力**：引入"思考"能力，LMArena排名第一
- **上下文**：100万token
- **编程**：在WebDev Arena排名第一
- **特点**：Google最强模型，综合能力大幅提升

#### 3月 - OpenAI发布GPT-4.5（研究预览）
- **定位**："最后的非推理模型"
- **特点**：知识面更广，情感理解更强
- **上下文**：256K token
- **但**：推理深度不如o系列

### 4月 - Meta开源新王

#### 4月5日 - LLaMA 4发布

##### LLaMA 4 Scout
- **架构**：109B总参数，17B激活，16专家MoE
- **上下文**：1000万token！（行业最长）
- **特点**：可在单张H100 GPU上运行
- **性能**：超越LLaMA 3.3 70B

##### LLaMA 4 Maverick
- **架构**：400B总参数，17B激活，128专家MoE
- **上下文**：100万token
- **性能**：媲美GPT-4o和Gemini 2.0

##### LLaMA 4 Behemoth（预览）
- **参数**：2万亿（训练中）
- **定位**：最强开源模型

### 5月 - Claude 4与编程革命

#### 5月22日 - Anthropic发布Claude 4系列

##### Claude 4 Opus
- **编程能力**：SWE-bench得分72.5%，行业最强
- **Agent能力**：可自主执行数小时的复杂任务
- **特点**：在编码和Agent任务上超越所有竞争对手
- **定价**：$15/M input, $75/M output

##### Claude Sonnet 4
- **定位**：替代Claude 3.5 Sonnet
- **编程**：SWE-bench得分72.7%
- **特点**：性能全面提升，成本不变
- **Extended Thinking**：支持扩展思考

#### 5月 - Claude Code正式发布
- 从研究预览转为正式版
- 支持MCP工具集成
- 成为开发者最受欢迎的AI编程工具之一

#### 5月 - Google发布Gemini 2.5 Flash
- **定位**：性价比极高的推理模型
- **特点**：速度快，成本低，支持思考

### 6月 - 推理模型巅峰

#### 6月10日 - OpenAI发布o3-pro
- **定位**：OpenAI最强推理模型
- **性能**：在数学、编程、科学推理上全面领先
- **定价**：$20/M input, $80/M output
- **特点**：回答前进行深度思考，准确率极高

#### 6月 - OpenAI发布o4-mini
- **定位**：轻量级推理模型
- **特点**：o3的高效版本，成本更低

#### 6月 - DeepSeek R2发布
- 推理能力继续提升
- 多模态能力增强
- 训练效率进一步优化

### 2025年关键趋势

#### Agent生态全面爆发
- **MCP协议**：被几乎所有主流AI工具采纳（Claude, Cursor, Windsurf, VS Code Copilot, Cline等）
- **Agent框架**：LangGraph、CrewAI、AutoGen成熟
- **编程Agent**：Claude Code、Cursor Agent、Devin成为主流
- **Browser Agent**：AI可以操作浏览器完成任务

#### 推理成为新范式
- o1/o3/DeepSeek-R1开创的推理模型成为标配
- 所有主流模型都加入了"思考"能力
- 推理成本持续下降

#### 开源追赶闭源
- DeepSeek R1证明开源可匹敌最强闭源
- LLaMA 4继续推动开源生态
- 开源推理模型可用

#### AI编程工具战争
- Claude Code vs Cursor vs Windsurf vs Devin
- 编程效率提升5-10倍
- Agent编程成为新范式

---

## 2026：Agent时代全面到来

<span class="year-marker">2026</span>

### 2026年上半年关键进展

#### 模型能力持续突破
- **GPT-5**（2025年底-2026年初）：OpenAI统一GPT和o系列的旗舰模型，256K上下文，原生多模态+深度推理
- **Gemini 2.5 Pro更新**：推理能力持续优化，200万token上下文
- **Claude 4系列更新**：编程和Agent能力持续领先
- **开源模型**：DeepSeek、Qwen、LLaMA持续缩小与闭源差距

#### Agent成为主流工作方式
- AI Agent能够自主完成复杂的多步骤任务
- 企业开始大规模采用Agent自动化工作流
- MCP协议成为事实标准，生态超过数千个Server
- 多Agent协作成为可能

#### AI编程成为标配
- 超过50%的开发者使用AI编程工具
- Agent编程（Claude Code等）成为主流
- AI能够自主完成从需求到部署的全流程
- 编程效率提升10倍+

#### 企业AI大规模落地
- RAG技术成熟，企业知识库广泛应用
- AI客服、AI销售、AI运营成为常态
- 企业AI投资回报率清晰

#### AI安全与监管
- 欧盟AI Act全面实施
- 美国AI法规逐步完善
- 中国AI监管框架成熟
- AI安全研究投入增加

#### 基础设施
- NVIDIA Blackwell架构普及
- AI数据中心大规模建设（Stargate项目等）
- 推理成本持续下降
- 端侧AI能力增强

### 2026年的AI格局

| 领域 | 状态 |
|------|------|
| 模型能力 | 接近人类专家水平 |
| Agent | 能自主完成复杂任务 |
| 编程 | AI成为开发者的标配工具 |
| 企业应用 | 大规模落地 |
| 开源 | 与闭源差距持续缩小 |
| 安全 | 监管框架逐步完善 |
| 芯片 | 竞争加剧，效率提升 |

### 未来展望
- AGI讨论更加热烈
- AI对就业市场的影响开始显现
- AI安全成为核心议题
- 人机协作成为新范式

---

## 关键趋势总结

1. **模型能力指数级增长**：从GPT-3.5到GPT-5，能力提升数十倍
2. **开源追赶闭源**：DeepSeek-R1等开源模型已接近闭源模型水平
3. **从聊天到Agent**：AI从被动回答问题到主动完成任务
4. **多模态成为标配**：文本、图像、视频、音频的统一理解
5. **推理能力突破**：o1/o3/DeepSeek-R1等推理模型的出现
6. **中国AI崛起**：DeepSeek等中国公司的突破性进展
7. **芯片成为战略资源**：NVIDIA GPU成为AI发展的关键瓶颈

---

<DataSource lastUpdated="2026-06-27" source="https://github.com/Angus210801/ai-knowledge-base" />

> 💡 **下一步**：了解[主流大模型的详细对比](/models/)，或深入学习[AI核心概念](/concepts/)
