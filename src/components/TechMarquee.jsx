import { skills } from '../data/profile.js'
import { useLang } from '../i18n.jsx'

export default function TechMarquee() {
  const { t } = useLang()
  // A lista aparece duas vezes para o loop emendar sem pulo (a animação anda -50%).
  const items = [...skills, ...skills]
  return (
    <div className="marquee" aria-label={t.ui.technologies}>
      <div className="marquee-track">
        {items.map((s, i) => (
          <span key={i} className="tech" aria-hidden={i >= skills.length}>
            <img src={s.icon} alt={i < skills.length ? s.name : ''} />
            {s.name}
          </span>
        ))}
      </div>
    </div>
  )
}
