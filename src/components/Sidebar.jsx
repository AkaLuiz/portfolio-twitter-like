import { profile, social } from '../data/profile.js'
import { useLang } from '../i18n.jsx'

export default function Sidebar() {
  const { t } = useLang()
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <div className="avatar" style={profile.avatar ? { backgroundImage: `url(${profile.avatar})` } : undefined} />
        <div className="identity">
          <strong>@{profile.name}</strong>
          <span>{t.role}</span>
        </div>
        <nav className="nav">
          {t.nav.map((n) => (
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
