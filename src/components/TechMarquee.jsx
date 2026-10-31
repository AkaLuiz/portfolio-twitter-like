import { skills } from '../data/profile.js'

export default function TechMarquee() {
  // A lista aparece duas vezes para o loop emendar sem pulo (a animação anda -50%).
  const items = [...skills, ...skills]
  return (
    <div className="marquee" aria-label="Tecnologias">
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
