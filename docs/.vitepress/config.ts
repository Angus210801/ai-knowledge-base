import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI大模型知识库',
  description: '2022-2026 全球AI大模型发展全景',
  lang: 'zh-CN',
  lastUpdated: true,
  
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'AI Knowledge Base',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '时间线', link: '/timeline/' },
      { text: '大模型', link: '/models/' },
      { text: '核心概念', link: '/concepts/' },
      { text: '基础设施', link: '/infrastructure/' },
      { text: '关键人物', link: '/people/' },
      {
        text: '更多',
        items: [
          { text: '开源生态', link: '/open-source/' },
          { text: '应用场景', link: '/applications/' },
          { text: 'AI安全', link: '/safety/' },
          { text: '术语表', link: '/glossary' },
        ]
      }
    ],

    sidebar: {
      '/timeline/': [
        {
          text: 'AI发展时间线',
          items: [
            { text: '2022-2026 全景', link: '/timeline/' }
          ]
        }
      ],
      '/models/': [
        {
          text: '大模型总览',
          items: [
            { text: '模型对比概览', link: '/models/' },
            { text: 'OpenAI: GPT系列', link: '/models/openai' },
            { text: 'Anthropic: Claude系列', link: '/models/anthropic' },
            { text: 'Google: Gemini系列', link: '/models/google' },
            { text: 'Meta: LLaMA系列', link: '/models/meta' },
            { text: 'Mistral', link: '/models/mistral' },
            { text: 'DeepSeek', link: '/models/deepseek' },
            { text: '中国大模型', link: '/models/chinese-models' },
            { text: '其他重要模型', link: '/models/others' },
          ]
        }
      ],
      '/concepts/': [
        {
          text: '核心概念',
          items: [
            { text: '概念总览', link: '/concepts/' },
            { text: 'AI Agent', link: '/concepts/agent' },
            { text: 'MCP协议', link: '/concepts/mcp' },
            { text: 'RAG', link: '/concepts/rag' },
            { text: 'Prompt Engineering', link: '/concepts/prompt-engineering' },
            { text: 'Fine-tuning', link: '/concepts/fine-tuning' },
            { text: 'Function Calling', link: '/concepts/function-calling' },
            { text: '多模态', link: '/concepts/multi-modal' },
            { text: '推理能力', link: '/concepts/reasoning' },
            { text: 'AI编程', link: '/concepts/ai-coding' },
            { text: '进阶概念（Hook/Skill/Tool等）', link: '/concepts/extended-concepts' },
          ]
        }
      ],
      '/infrastructure/': [
        {
          text: '基础设施',
          items: [
            { text: '基础设施总览', link: '/infrastructure/' },
            { text: 'NVIDIA GPU帝国', link: '/infrastructure/nvidia' },
            { text: 'AI芯片全景', link: '/infrastructure/chips' },
            { text: '训练基础设施', link: '/infrastructure/training' },
            { text: '推理优化', link: '/infrastructure/inference' },
            { text: '云AI平台', link: '/infrastructure/cloud' },
          ]
        }
      ],
      '/people/': [
        {
          text: '关键人物与机构',
          items: [
            { text: 'AI关键人物', link: '/people/' },
            { text: '重要机构与实验室', link: '/people/organizations' },
          ]
        }
      ],
      '/open-source/': [
        {
          text: '开源AI生态',
          items: [
            { text: '开源运动总览', link: '/open-source/' },
            { text: '框架与工具', link: '/open-source/frameworks' },
            { text: '生态系统', link: '/open-source/ecosystem' },
          ]
        }
      ],
      '/applications/': [
        {
          text: 'AI应用场景',
          items: [
            { text: '应用总览', link: '/applications/' },
            { text: '对话式AI', link: '/applications/chatbots' },
            { text: 'AI编程助手', link: '/applications/coding' },
            { text: '创意生成', link: '/applications/creative' },
            { text: '企业AI', link: '/applications/enterprise' },
          ]
        }
      ],
      '/safety/': [
        {
          text: 'AI安全与伦理',
          items: [
            { text: '安全与伦理', link: '/safety/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],

    footer: {
      message: 'AI大模型知识库 - 持续更新中',
      copyright: 'Built with VitePress'
    },

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3],
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})
