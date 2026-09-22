import { useState, type CSSProperties } from 'react'
import { mascots } from '../data/mascots'

const companions = [
  { name: 'pink', className: 'tech-companion-idea' },
  { name: 'mint', className: 'tech-companion-build' },
] as const

/** A reversible visual treatment of the original artwork, independent of job data. */
export function TechMascotScene() {
  const [holographic, setHolographic] = useState(true)
  const [paused, setPaused] = useState(false)

  return <div className={`tech-scene${holographic ? ' is-holographic' : ''}${paused ? ' is-paused' : ''}`}>
    <div className="tech-world" role="img" aria-label="淡蓝色眼镜蛋仔与粉色、薄荷色伙伴，在柔和的全息光环中一起创造">
      <div className="tech-ambient" />
      <div className="tech-grid" />
      <svg className="tech-orbits" viewBox="0 0 900 430" fill="none" aria-hidden="true">
        <ellipse cx="450" cy="302" rx="346" ry="75" />
        <ellipse cx="450" cy="302" rx="282" ry="50" />
        <path className="tech-orbit-path" d="M124 292C194 394 705 417 794 283" />
        <path className="tech-orbit-arc" d="M251 234C228 100 364 34 467 58C569 83 640 179 615 257" />
        <circle cx="159" cy="341" r="4" /><circle cx="748" cy="268" r="4" />
        <circle className="tech-orbit-beacon" cx="539" cy="91" r="5" />
      </svg>
      <div className="tech-disc" />
      <div className="tech-disc tech-disc-inner" />
      <div className="tech-note tech-note-idea" aria-hidden="true"><span>01 / IMAGINE</span><strong>一个想法，无限可能。</strong><div className="tech-note-lines"><i /><i /><i /></div></div>
      <div className="tech-note tech-note-build" aria-hidden="true"><span>02 / CREATE</span><strong>与 AI，一起创造。</strong><div className="tech-mini-nodes"><i /><b /><i /><b /><i /></div></div>
      {companions.map(companion => <div key={companion.name} className={`tech-companion ${companion.className}`} aria-hidden="true"><img src={mascots[companion.name]} alt="" width="512" height="512" /></div>)}
      <div className="tech-lead" style={{ '--mascot-mask': `url("${mascots.blue}")` } as CSSProperties} aria-hidden="true">
        <img src={mascots.blue} alt="" width="512" height="512" fetchPriority="high" />
        <div className="tech-material" />
        <div className="tech-scan" />
      </div>
      <span className="tech-float-tag" aria-hidden="true"><i /> HUMAN × AI</span>
      <span className="tech-caption" aria-hidden="true">让好奇心，连接下一种可能。</span>
    </div>
    <div className="tech-controls">
      <div className="tech-mode" role="group" aria-label="蛋仔视觉风格">
        <button type="button" aria-pressed={!holographic} onClick={() => setHolographic(false)}>原色</button>
        <button type="button" aria-pressed={holographic} onClick={() => setHolographic(true)}><span aria-hidden="true">✧</span> 全息</button>
      </div>
      <button className="tech-motion" type="button" onClick={() => setPaused(!paused)} aria-pressed={paused} aria-label={paused ? '播放首屏动画' : '暂停首屏动画'}><span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span><span>{paused ? '播放动画' : '暂停动画'}</span></button>
    </div>
  </div>
}
