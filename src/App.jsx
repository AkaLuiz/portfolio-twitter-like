import { useState } from 'react'
import {
  profile,
  projects,
  skills,
  hardSkills,
  education,
  experience,
  certificates,
} from './data/profile.js'
import Sidebar from './components/Sidebar.jsx'
import Section from './components/Section.jsx'
import Rich from './components/Rich.jsx'
import ReadingControls from './components/ReadingControls.jsx'
import Typewriter from './components/Typewriter.jsx'
import TechMarquee from './components/TechMarquee.jsx'
import ProjectModal from './components/ProjectModal.jsx'

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
  const [tag, setTag] = useState('Todos')
  const tags = ['Todos', ...new Set(items.flatMap((i) => i.tags || []))]
  const shown = tag === 'Todos' ? items : items.filter((i) => i.tags?.includes(tag))

  return (
    <>
      <div className="chips" role="group" aria-label="Filtrar certificados">
        {tags.map((t) => (
          <button key={t} type="button" className="chip" aria-pressed={tag === t} onClick={() => setTag(t)}>
            {t}
          </button>
        ))}
      </div>
      <CardGrid items={shown} empty="Nenhum certificado nessa categoria." />
    </>
  )
}

export default function App() {
  const [openProject, setOpenProject] = useState(null)

  return (
    <div className="page">
      <ReadingControls />
      {openProject && <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />}
      <div className="panel">
        <Sidebar />
        <main className="content">
          <a className="hire" href={`mailto:${profile.email}`}>
            CONTRATAR
          </a>

          <section className="hero">
            <p className="hero-greeting">{profile.hero.greeting}</p>
            <h1>
              <Typewriter text={profile.hero.title} />
            </h1>
            <p className="hero-sub">
              <Rich text={profile.hero.subtitle} />
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
            <h2>{profile.about.title}</h2>
            {profile.about.text.map((t, i) => (
              <p key={i}>
                <Rich text={t} />
              </p>
            ))}
          </section>

          <Section id="projetos" title="PROJETOS">
            <div className="projects">
              {projects.map((p, i) => {
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

          <Section id="habilidades" title="HABILIDADES">
            <div className="skills">
              {skills.map((s) => (
                <img key={s.name} src={s.icon} alt={s.name} title={s.name} />
              ))}
            </div>
            <div className="hard">
              <strong>Hard Skills</strong>
              <p>{hardSkills}</p>
            </div>
          </Section>

          <Section id="educacao" title="EDUCAÇÃO">
            <CardGrid items={education} empty="Em breve." />
          </Section>

          <Section id="experiencia" title="EXPERIÊNCIA">
            <Timeline items={experience} empty="Em breve." />
          </Section>

          <Section id="certificados" title="CERTIFICADOS">
            <Certificates items={certificates} />
          </Section>

          <Section id="contato" title="CONTATO">
            <p className="empty">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>
          </Section>
        </main>
      </div>
    </div>
  )
}
