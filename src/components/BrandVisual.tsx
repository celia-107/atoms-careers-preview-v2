import { useId, useState } from 'react'

// The four silhouettes come from public/brand/atoms-logo.svg. This is an
// illustrative material study; the official navigation logo stays unchanged.
const markPaths = [
  'M3.32306 12.0443C3.37943 11.2398 4.88577 10.69 6.68761 10.8164C8.48946 10.9428 9.90442 11.6974 9.84807 12.5019C9.7917 13.3064 8.28536 13.8561 6.48351 13.7298C4.68167 13.6034 3.26671 12.8488 3.32306 12.0443Z',
  'M9.98062 7.43223C10.4043 5.56328 11.63 4.24839 12.7181 4.49532C13.8063 4.74226 14.3449 6.45756 13.9212 8.32651C13.4974 10.1954 12.2718 11.5103 11.1837 11.2634C10.0955 11.0165 9.5569 9.30118 9.98062 7.43223Z',
  'M0.753489 3.69218C2.03859 1.06308 4.52097 -0.363429 6.29796 0.505986C8.07494 1.37541 8.47372 4.21151 7.18864 6.8406C5.90354 9.4697 3.42116 10.8962 1.64416 10.0268C-0.132813 9.15736 -0.531592 6.32126 0.753489 3.69218Z',
  'M8.24037 0.174442C8.5148 -0.23554 9.73672 0.101818 10.9696 0.927869C12.2025 1.7539 12.9795 2.75583 12.7052 3.16585C12.4307 3.57584 11.2087 3.2386 9.97581 2.41254C8.74292 1.58648 7.96593 0.584427 8.24037 0.174442Z',
]

export function BrandVisual() {
  const [paused, setPaused] = useState(false)
  const id = useId().replace(/:/g, '')
  const ref = (name: string) => `url(#${id}-${name})`

  return <figure className={`brand-visual${paused ? ' is-paused' : ''}`}>
    <div className="brand-visual-light" aria-hidden="true" />
    <span className="brand-visual-index" aria-hidden="true">A FIELD OF POSSIBILITIES</span>
    <svg className="brand-sculpture" viewBox="0 0 640 560" role="img" aria-labelledby={`${id}-title`}>
      <title id={`${id}-title`}>Atoms 创作场：由品牌标识延展的四个银蓝色形态，在柔和光线中汇聚。</title>
      <defs>
        <linearGradient id={`${id}-silver`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f8fafc" /><stop offset=".19" stopColor="#d9e1ed" />
          <stop offset=".42" stopColor="#a0b1c9" /><stop offset=".6" stopColor="#6f829e" />
          <stop offset=".78" stopColor="#c3cddd" /><stop offset="1" stopColor="#f2f1f7" />
        </linearGradient>
        <linearGradient id={`${id}-edge`} x1="0" y1="0" x2="0.8" y2="1">
          <stop stopColor="#fff" /><stop offset=".4" stopColor="#e8edf4" /><stop offset="1" stopColor="#a6afbd" />
        </linearGradient>
        <linearGradient id={`${id}-depth`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#bbc4d1" /><stop offset="1" stopColor="#6c7890" />
        </linearGradient>
        <radialGradient id={`${id}-sheen`} cx=".25" cy=".12" r=".9">
          <stop stopColor="#fff" stopOpacity=".75" /><stop offset=".48" stopColor="#eef3ff" stopOpacity=".1" /><stop offset="1" stopColor="#7180a3" stopOpacity=".15" />
        </radialGradient>
        <filter id={`${id}-shadow`} x="-50%" y="-40%" width="220%" height="210%">
          <feDropShadow dx="0.2" dy="0.6" stdDeviation="0.5" floodColor="#59677d" floodOpacity=".16" />
        </filter>
        <filter id={`${id}-blur`}><feGaussianBlur stdDeviation="12" /></filter>
      </defs>
      <g className="brand-field-lines" fill="none" stroke="#d9dce2" strokeWidth=".75">
        <ellipse cx="326" cy="286" rx="271" ry="171" transform="rotate(-28 326 286)" />
        <path d="M75 417C184 449 430 445 567 332" strokeDasharray="2 7" />
      </g>
      <ellipse cx="335" cy="457" rx="142" ry="12" fill="#8490a5" opacity=".09" filter={ref('blur')} />
      <g className="brand-form">
        <g transform="translate(155 93) scale(23)">
          <g filter={ref('shadow')}>
            {markPaths.map((d, index) => <g key={d}>
              <path d={d} transform="translate(.14 .2)" fill={ref('depth')} />
              <path d={d} fill={ref('silver')} stroke={ref('edge')} strokeWidth=".035" />
              <path d={d} fill={ref('sheen')} opacity={index === 2 ? 1 : .8} />
            </g>)}
          </g>
        </g>
      </g>
      <g fill="#9cabc0"><circle cx="87" cy="371" r="2.5" /><circle cx="558" cy="175" r="2.5" /></g>
      <g stroke="#b4bdca" strokeWidth="1"><path d="M95 115h12m-6-6v12M527 427h12m-6-6v12" /></g>
    </svg>
    <figcaption className="brand-visual-caption"><span>想法</span><i aria-hidden="true" /><span>构建</span><i aria-hidden="true" /><span>交付</span></figcaption>
    <button className="brand-motion" type="button" aria-label={paused ? '播放品牌动画' : '暂停品牌动画'} aria-pressed={paused} onClick={() => setPaused(!paused)}><svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">{paused ? <path d="M4 2.5 11 7 4 11.5Z" fill="currentColor" /> : <path d="M5 3v8M9 3v8" fill="none" stroke="currentColor" strokeWidth="1.5" />}</svg></button>
  </figure>
}
