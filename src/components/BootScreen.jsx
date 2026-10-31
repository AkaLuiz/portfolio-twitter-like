import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n.jsx'

// Linhas do "boot": [texto, status]. Status vazio = linha informativa; 'OK' vira [ OK ] verde.
const LINES = {
  pt: [
    ['LuizOS 1.0 — inicializando kernel...', ''],
    ['Carregando módulos do sistema', 'OK'],
    ['Montando sistema de arquivos /portfolio', 'OK'],
    ['Iniciando serviços: java, spring, react', 'OK'],
    ['Conectando ao docker daemon', 'OK'],
    ['Carregando projetos e experiência', 'OK'],
    ['Aplicando tema e fontes', 'OK'],
    ['Todos os serviços iniciados. Bem-vindo, visitante.', ''],
  ],
  en: [
    ['LuizOS 1.0 — booting kernel...', ''],
    ['Loading system modules', 'OK'],
    ['Mounting filesystem /portfolio', 'OK'],
    ['Starting services: java, spring, react', 'OK'],
    ['Connecting to docker daemon', 'OK'],
    ['Loading projects and experience', 'OK'],
    ['Applying theme and fonts', 'OK'],
    ['All services started. Welcome, visitor.', ''],
  ],
}

const FLASH_MS = 700
const SPIN_MS = 1500
const LINE_MS = 330
const HOLD_MS = 500
const FADE_MS = 500

export function shouldBoot() {
  try {
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  } catch {
    return true
  }
}

// onReady: o site pode montar (por baixo do overlay). onDone: overlay saiu da tela.
export default function BootScreen({ onReady, onDone }) {
  const { lang } = useLang()
  const lines = LINES[lang]
  const [phase, setPhase] = useState('flash') // flash -> spin -> term -> out
  const [shown, setShown] = useState(0)
  const logRef = useRef(null)
  const cbs = useRef({ onReady, onDone })
  cbs.current = { onReady, onDone }

  const finish = () => setPhase('out')

  useEffect(() => {
    if (phase === 'flash') {
      const id = setTimeout(() => setPhase('spin'), FLASH_MS)
      return () => clearTimeout(id)
    }
    if (phase === 'spin') {
      const id = setTimeout(() => setPhase('term'), SPIN_MS)
      return () => clearTimeout(id)
    }
    if (phase === 'term') {
      const id = setTimeout(
        shown >= lines.length ? finish : () => setShown((n) => n + 1),
        shown >= lines.length ? HOLD_MS : LINE_MS,
      )
      return () => clearTimeout(id)
    }
    if (phase === 'out') {
      cbs.current.onReady()
      const id = setTimeout(() => cbs.current.onDone(), FADE_MS)
      return () => clearTimeout(id)
    }
  }, [phase, shown, lines.length])

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight })
  }, [shown])

  useEffect(() => {
    const skip = (e) => e.key !== 'Tab' && finish()
    window.addEventListener('keydown', skip)
    return () => window.removeEventListener('keydown', skip)
  }, [])

  return (
    <div className={`boot boot-${phase}`} onClick={finish} role="status" aria-label="Loading">
      {phase === 'spin' && (
        <div className="boot-spinner" aria-hidden="true">
          <div className="boot-ring" />
          <div className="boot-ring boot-ring-2" />
          <div className="boot-core" />
          <span className="boot-brand">LuizOS</span>
        </div>
      )}
      {(phase === 'term' || phase === 'out') && (
        <div className="boot-term" ref={logRef} aria-hidden="true">
          {lines.slice(0, shown).map(([text, status], i) => (
            <p key={i}>
              {status && <span className="boot-ok">[ {status} ]</span>} {text}
            </p>
          ))}
          {shown < lines.length && <span className="boot-caret" />}
        </div>
      )}
      <button type="button" className="boot-skip" onClick={finish}>
        {lang === 'pt' ? 'pular ▸' : 'skip ▸'}
      </button>
    </div>
  )
}
