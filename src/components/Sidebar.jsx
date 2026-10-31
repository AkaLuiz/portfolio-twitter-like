import { profile, social } from '../data/profile.js'

export const NAV = [
  { id: 'projetos', label: 'projetos' },
  { id: 'habilidades', label: 'habilidades' },
  { id: 'educacao', label: 'educação' },
  { id: 'experiencia', label: 'experiência' },
  { id: 'certificados', label: 'certificados' },
  { id: 'contato', label: 'contato' },
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <div className="avatar" style={profile.avatar ? { backgroundImage: `url(${profile.avatar})` } : undefined} />
        <div className="identity">
          <strong>@{profile.name}</strong>
          <span>{profile.role}</span>
        </div>
        <nav className="nav">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="social">
          {social.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}
