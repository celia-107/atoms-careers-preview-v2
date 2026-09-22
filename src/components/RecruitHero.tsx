import { careerStory } from '../data/careerStory'
import { BrandVisual } from './BrandVisual'

export function RecruitHero({ onApply }: { onApply: () => void }) {
  const content = careerStory.hero
  return <section className="recruit-hero brand-hero section-shell" aria-labelledby="hero-title">
    <div className="recruit-hero-copy">
      <p className="eyebrow"><span className="status-dot" /> {content.eyebrow}</p>
      <h1 id="hero-title">{content.title}<br /><span>{content.titleAccent}</span></h1>
      <div className="recruit-intro">
        <p className="recruit-product">{content.product}</p>
        <p className="recruit-invitation">{content.invitation}</p>
      </div>
      <div className="recruit-actions"><a href="#jobs" className="button button-dark">{content.jobsAction} <span aria-hidden="true">↗</span></a><button type="button" onClick={onApply} className="recruit-secondary">{content.applyAction} <span aria-hidden="true">↗</span></button></div>
      <p className="recruit-byline">{content.byline}</p>
    </div>
    <BrandVisual />
    <div className="recruit-hero-foot"><div><span>01</span> 理解真实问题</div><div><span>02</span> 借助 AI 交付</div><div><span>03</span> 主动验证迭代</div><a href="#product">往下了解 <span aria-hidden="true">↓</span></a></div>
  </section>
}
