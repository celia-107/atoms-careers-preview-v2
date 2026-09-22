import { mascots } from './mascots'

export type ProductTask = {
  id: string
  label: string
  title: string
  description: string
  tasks: string[]
  outcome: string
  sourceJobId: string
  mascot: string
  tint: 'lilac' | 'mint' | 'cream'
}

export type WorkStep = {
  id: string
  number: string
  label: string
  title: string
  description: string
  detail: string
  mascot: string
}

/** Editorial copy is separate from the job service; task links resolve against its current jobs. */
export const careerStory = {
  hero: {
    eyebrow: '01 / 我们是谁',
    title: '让想法，',
    titleAccent: '真正变成产品',
    product: 'Atoms 是一个由多智能体驱动的产品构建平台：从一个想法出发，协助完成研究、设计、开发、部署和迭代，把创意推进成可运行、可继续发展的产品。',
    company: 'DeepWisdom 是一家以多智能体技术为核心、持续把 AI 从研究框架推进到真实产品的公司，代表性产品路径从 MetaGPT、MGX 走向 Atoms。',
    invitation: '我们寻找的不是只会调用 AI 的人，而是能快速理解问题、用 AI 完成真实交付，并对产品质量和最终结果负责的人。',
    jobsAction: '查看开放岗位',
    applyAction: '了解 Atoms',
    byline: 'HUMAN IMAGINATION. AI POSSIBILITY.',
  },
  product: {
    eyebrow: '02 / THE PROBLEM TO SOLVE',
    title: '我们正在解决什么问题',
    description: '从一个想法，到一个真的有人使用的产品，中间隔着很多具体问题。Atoms 希望把这些环节连接起来，让人可以围绕一个目标，组织研究、设计、开发、部署和持续改进。我们关注的不只是“能不能做出 Demo”，而是产品能不能被使用、被验证，并继续产生价值。',
    context: [
      {
        label: '01 / 用户与场景',
        title: '更快理解真实问题',
        description: '没有足够快地理解用户和真实场景，后面的方案就很难真正解决问题。',
      },
      {
        label: '02 / 跨职能协作',
        title: '减少反复交接',
        description: '研究、产品、设计和工程之间反复交接，让一个好想法在推进过程中失去上下文。',
      },
      {
        label: '03 / 真实验证',
        title: '让原型经得起使用',
        description: '原型做出来了，却没有经过真实验证，无法知道它是否真的有用。',
      },
      {
        label: '04 / 持续迭代',
        title: '让反馈回到产品',
        description: '上线之后，反馈没有进入下一轮产品迭代，产品就很难继续产生价值。',
      },
    ],
    closing: '我们关注的不只是“能不能做出 Demo”，而是产品能不能被使用、被验证，并继续产生价值。',
    tasksLabel: '你会参与的真实任务',
    sourceNote: '整理自公开岗位，具体职责以岗位详情为准。',
    taskListLabel: '你会做什么',
    outcomeLabel: '交付的方向',
    jobAction: '查看相关岗位',
    fallbackAction: '查看当前岗位',
    tasks: [
      {
        id: 'core-experience',
        label: '核心产品体验',
        title: '把复杂的 Agent，变成好用的产品',
        description: '与算法、设计一起，把 AI Agent 的编排能力转化为直观的界面和稳定的产品能力。',
        tasks: ['贯穿前端、后端与云端，完成产品能力开发', '与算法、设计配合，打磨用户实际使用的体验', '从部署上线到性能优化，持续维护和迭代'],
        outcome: '可复用的产品能力，以及更顺畅的核心体验。',
        sourceJobId: '7593964671033100563',
        mascot: mascots.snow,
        tint: 'lilac',
      },
      {
        id: 'growth-experiments',
        label: '增长实验',
        title: '把一个增长想法，做成可验证的实验',
        description: '从用户反馈和业务数据出发，选择值得先解决的问题，亲手完成分析、原型、实现和效果验证。',
        tasks: ['定位注册、激活等环节的问题，明确实验指标', '搭建页面、Demo 或工具，推动实验上线', '复盘实际效果，把有效方法沉淀为 Agent 能力'],
        outcome: '能追踪效果、继续迭代的增长产品与工具。',
        sourceJobId: '7682689678470662454',
        mascot: mascots.mint,
        tint: 'mint',
      },
      {
        id: 'seo-agent',
        label: 'SEO Agent',
        title: '让有效的方法，成为可复用的工具',
        description: '面对真实页面、流量与用户，把关键词发现、页面生成、发布校验和效果反馈连起来。',
        tasks: ['搭建页面生成、更新与生命周期管理流程', '将技术 SEO 检查、发布校验和回滚接入流程', '结合收录、流量与转化数据，持续改进 Agent'],
        outcome: '能稳定复用、效果可追踪的 SEO Agent 工具。',
        sourceJobId: '7682688742339184932',
        mascot: mascots.blue,
        tint: 'cream',
      },
    ] satisfies ProductTask[],
  },
  work: {
    eyebrow: '03 / HOW WE WORK',
    title: '我们如何工作',
    description: 'AI 参与每一步，但人对结果负责。',
    caseLabel: '理解问题 → 形成方案 → 快速构建 → 真实验证 → 发布交付 → 持续迭代',
    stepHint: '点击了解每一步',
    steps: [
      {
        id: 'understand',
        number: '01',
        label: '理解问题',
        title: '先弄清楚真实问题',
        description: '先弄清楚用户、场景和真正要解决的问题。',
        detail: '先说清楚：为谁做、解决什么，以及怎样判断它有用。',
        mascot: mascots.pink,
      },
      {
        id: 'shape',
        number: '02',
        label: '形成方案',
        title: '把目标拆成可执行的方案',
        description: '把目标拆成产品流程、页面、数据、接口和验收条件。',
        detail: '人来决定方案、检查实现，并解释关键的产品与工程取舍。',
        mascot: mascots.explorer,
      },
      {
        id: 'build',
        number: '03',
        label: '快速构建',
        title: '借助 AI，做出第一版',
        description: '用 AI 辅助研究、原型、编码、测试和自动化。',
        detail: '让 AI 参与动手，也让人保留对上下文、质量和取舍的判断。',
        mascot: mascots.mint,
      },
      {
        id: 'validate',
        number: '04',
        label: '真实验证',
        title: '通过真实反馈验证结果',
        description: '通过测试、用户反馈、数据和同事评审检查结果。',
        detail: '带着可运行的版本讨论，让具体反馈推动下一次修改。',
        mascot: mascots.orange,
      },
      {
        id: 'deliver',
        number: '05',
        label: '发布交付',
        title: '把结果交到真实用户手里',
        description: '关注部署、稳定性、可维护性和真实使用体验。',
        detail: '交付包括上线，也包括后续维护、效果验证和必要的回滚。',
        mascot: mascots.snow,
      },
      {
        id: 'iterate',
        number: '06',
        label: '持续迭代',
        title: '让产品越做越好',
        description: '保留有效部分，删掉不必要的复杂度，让产品越做越好。',
        detail: '用真实反馈和数据判断下一步，把有效方法沉淀为可复用能力。',
        mascot: mascots.blue,
      },
    ] satisfies WorkStep[],
    vibe: {
      eyebrow: '04 / 我们眼中的 VIBE CODER',
      title: '能和 AI 一起把问题推进到结果',
      description: 'Vibe Coder 不只是“让 AI 写代码”，而是能够和 AI 一起把问题推进到结果的人。',
      points: [
        '能快速理解复杂问题',
        '能用 AI 完成真实交付',
        '会主动验证、复盘和迭代',
        '具备产品意识和工程判断',
        '能把一个想法推进成可使用的产品',
        '愿意跨过岗位边界，与团队一起解决问题',
      ],
      closing: '我们更在意你能不能把问题推进一步，而不只是你熟悉多少工具。',
    },
  },
} as const
