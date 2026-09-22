import type { Job } from '../types/jobs'

export const JOB_FUNCTIONS = ['全部岗位', '研发', '产品', '设计', '运营', '其他'] as const
export const JOB_LOCATIONS = ['全部地点', '深圳', '厦门'] as const
export const JOB_EMPLOYMENT_TYPES = ['全部类型', '全职', '实习'] as const

export type JobFunction = Exclude<(typeof JOB_FUNCTIONS)[number], '全部岗位'>

/** 将招聘系统的团队字段归一为页面筛选维度，不改写岗位原始 department。 */
export function getJobFunction(job: Pick<Job, 'title' | 'department'>): JobFunction {
  const text = `${job.department} ${job.title}`.toLowerCase()
  if (/(工程|研发|算法|运维|基础设施|质量|harness|engineering|developer|开发)/i.test(text)) return '研发'
  if (/(设计|design|ui|ux)/i.test(text)) return '设计'
  if (/(产品|product)/i.test(text)) return '产品'
  if (/(运营|增长|内容|用户|社区|广告|投放|acquisition|partnership|growth|content|marketing|operation|social)/i.test(text)) return '运营'
  return '其他'
}
