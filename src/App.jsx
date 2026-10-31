import { useState } from 'react'
import { profile, skills, hardSkills } from './data/profile.js'
import { useLang } from './i18n.jsx'
import Sidebar from './components/Sidebar.jsx'
import Section from './components/Section.jsx'
import Rich from './components/Rich.jsx'
import ReadingControls from './components/ReadingControls.jsx'
import Typewriter from './components/Typewriter.jsx'
import TechMarquee from './components/TechMarquee.jsx'
import ProjectModal from './components/ProjectModal.jsx'
import BootScreen, { shouldBoot } from './components/BootScreen.jsx'

function Timeline({ items, empty }) {
  if (items.length === 0) return <p className="empty">{empty}</p>
  return (
    <ul className="timeline">
      {items.map((it, i) => (
        <li key={i}>
          <strong>{it.title}</strong>
          <span>{it.place}</span>
          {it.period && <small>{it.period}</small>}
          {it.description && (
            <p>
              <Rich text={it.description} />
            </p>
          )}
        </li>
      ))}
    </ul>
  )
}

function CardGrid({ items, empty }) {
  if (items.length === 0) return <p className="empty">{empty}</p>
  return (
    <ul className="cards">
      {items.map((it, i) => (
        <li key={i} className="card">
          <strong>{it.title}</strong>
          <span>{it.place}</span>
          {it.period && <small>{it.period}</small>}
        </li>
      ))}
    </ul>
  )
}

function Certificates({ items }) {
  const { t } = useLang()
  const [tag, setTag] = useState(null) // null = todos
  const tags = [null, ...new Set(items.flatMap((i) => i.tags || []))]
  const active = tags.includes(tag) ? tag : null // idioma trocado: a tag antiga some
  const shown = active === null ? items : items.filter((i) => i.tags?.includes(active))

  return (
    <>
      <div className="chips" role="group" aria-label={t.ui.filterCerts}>
        {tags.map((tg) => (
          <button
            key={tg ?? 'all'}
            type="button"
            className="chip"
            aria-pressed={active === tg}
            onClick={() => setTag(tg)}
          >
            {tg ?? t.ui.all}
          </button>
        ))}
      </div>
      <CardGrid items={shown} empty={t.ui.noCerts} />
    </>
  )
}

export default function App() {
  const [booting, setBooting] = useState(shouldBoot) // overlay de boot na tela
  const [ready, setReady] = useState(!booting) // site montado (o Typewriter só começa aqui)

  return (
    <>
      {ready && <Site />}
      {booting && <BootScreen onReady={() => setReady(true)} onDone={() => setBooting(false)} />}
    </>
  )
}

function Site() {
  const { t } = useLang()
  const [openProject, setOpenProject] = useState(null)

  return (
    <div className="page">
      <ReadingControls />
      {openProject && <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />}
      <div className="panel">
        <Sidebar />
        <main className="content">
          <a className="hire" href={`mailto:${profile.email}`}>
            {t.ui.hire}
          </a>

          <section className="hero">
            <p className="hero-greeting">{t.hero.greeting}</p>
            <h1>
              <Typewriter text={t.hero.title} />
            </h1>
            <p className="hero-sub">
              <Rich text={t.hero.subtitle} />
            </p>
          </section>

          <TechMarquee />

          <section className="about">
            <div className="about-head">
              <div
                className="avatar-sm"
                style={profile.avatar ? { backgroundImage: `url(${profile.avatar})` } : undefined}
              />
              <span>{profile.name}</span>
            </div>
            <h2>{t.about.title}</h2>
            {t.about.text.map((para, i) => (
              <p key={i}>
                <Rich text={para} />
              </p>
            ))}
          </section>

          <Section id="projetos" title={t.sections.projetos}>
            <div className="projects">
              {t.projects.map((p, i) => {
                // Com descrição: abre o modal. Só com link: abre o site. Sem nada: card parado.
                const Card = p.description ? 'button' : p.url ? 'a' : 'div'
                const props = p.description
                  ? { type: 'button', onClick: () => setOpenProject(p), 'aria-haspopup': 'dialog' }
                  : p.url
                    ? { href: p.url, target: '_blank', rel: 'noreferrer' }
                    : {}
                return (
                  <Card key={i} className="project" {...props}>
                    <div
                      className="project-img"
                      style={
                        p.image
                          ? { backgroundImage: `url(${p.image})`, backgroundPosition: p.position || 'center' }
                          : undefined
                      }
                    />
                    <span className="project-label">{p.title}</span>
                  </Card>
                )
              })}
            </div>
          </Section>

          <Section id="habilidades" title={t.sections.habilidades}>
            <div className="skills">
              {skills.map((s) => (
                <img key={s.name} src={s.icon} alt={s.name} title={s.name} />
              ))}
            </div>
            <div className="hard">
              <strong>{t.ui.hardSkills}</strong>
              <p>{hardSkills}</p>
            </div>
          </Section>

          <Section id="educacao" title={t.sections.educacao}>
            <CardGrid items={t.education} empty={t.ui.soon} />
          </Section>

          <Section id="experiencia" title={t.sections.experiencia}>
            <Timeline items={t.experience} empty={t.ui.soon} />
          </Section>

          <Section id="certificados" title={t.sections.certificados}>
            <Certificates items={t.certificates} />
          </Section>

          <Section id="contato" title={t.sections.contato}>
            <p className="empty">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>
          </Section>
        </main>
      </div>
    </div>
  )
}
