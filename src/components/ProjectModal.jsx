import { useEffect, useRef } from 'react'
import Rich from './Rich.jsx'
import { useLang } from '../i18n.jsx'

export default function ProjectModal({ project, onClose }) {
  const { t } = useLang()
  const closeRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden' // trava a rolagem do fundo
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} type="button" className="modal-close" onClick={onClose} aria-label={t.ui.close}>
          ✕
        </button>
        {project.image && (
          <div
            className="modal-img"
            style={{ backgroundImage: `url(${project.image})`, backgroundPosition: project.position || 'center' }}
          />
        )}
        <div className="modal-body">
          <h3 id="modal-title">{project.title}</h3>
          {project.description.map((t, i) => (
            <p key={i}>
              <Rich text={t} />
            </p>
          ))}
          {project.url && (
            <a className="modal-link" href={project.url} target="_blank" rel="noreferrer">
              {project.linkLabel || t.ui.visit(project.url.replace(/^https?:\/\//, ''))} ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
