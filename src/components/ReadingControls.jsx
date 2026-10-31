import { useEffect, useState } from 'react'

const SIZE_KEY = 'font-scale'
const FONT_KEY = 'font-family'
const THEME_KEY = 'theme'
const MIN = 85
const MAX = 135
const DEFAULT_SIZE = 100

const FONTS = [
  { id: 'padrao', label: 'Padrão' },
  { id: 'serif', label: 'Serifada' },
  { id: 'mono', label: 'Código' },
  { id: 'legivel', label: 'Alta legibilidade' },
]

function read(key) {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function write(key, value) {
  try {
    localStorage.setItem(key, String(value))
  } catch {
    /* armazenamento indisponível: segue sem salvar */
  }
}

export default function ReadingControls() {
  const [scale, setScale] = useState(() => {
    const v = Number(read(SIZE_KEY))
    return v >= MIN && v <= MAX ? v : DEFAULT_SIZE
  })
  const [font, setFont] = useState(() => {
    const v = read(FONT_KEY)
    return FONTS.some((f) => f.id === v) ? v : 'padrao'
  })

  const [theme, setTheme] = useState(() => (read(THEME_KEY) === 'light' ? 'light' : 'dark'))

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    write(THEME_KEY, theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.style.fontSize = `${scale}%`
    write(SIZE_KEY, scale)
  }, [scale])

  useEffect(() => {
    document.documentElement.dataset.font = font
    write(FONT_KEY, font)
  }, [font])

  return (
    <div className="font-control">
      <div className="font-picker" role="radiogroup" aria-label="Fonte do site">
        {FONTS.map((f) => (
          <button
            key={f.id}
            type="button"
            role="radio"
            aria-checked={font === f.id}
            aria-label={f.label}
            title={f.label}
            className={`font-opt fa-${f.id}${font === f.id ? ' active' : ''}`}
            onClick={() => setFont(f.id)}
          >
            A
          </button>
        ))}
      </div>
      <div className="size-row">
      <button
        type="button"
        className="theme-btn"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
        title={theme === 'dark' ? 'Modo claro' : 'Modo escuro'}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
      <button type="button" onClick={() => setScale(DEFAULT_SIZE)} aria-label="Restaurar tamanho padrão">
        <span className="fc-small">A</span>
      </button>
      <input
        type="range"
        min={MIN}
        max={MAX}
        step={5}
        value={scale}
        onChange={(e) => setScale(Number(e.target.value))}
        aria-label="Tamanho da fonte"
      />
      <span className="fc-big" aria-hidden="true">
        A
      </span>
      </div>
    </div>
  )
}
