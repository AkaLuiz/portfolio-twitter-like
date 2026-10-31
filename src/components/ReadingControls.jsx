import { useEffect, useState } from 'react'
import { LANGS, useLang } from '../i18n.jsx'

const SIZE_KEY = 'font-scale'
const FONT_KEY = 'font-family'
const THEME_KEY = 'theme'
const MIN = 85
const MAX = 135
const DEFAULT_SIZE = 100

const FONT_IDS = ['padrao', 'serif', 'mono', 'legivel']

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
  const { lang, setLang, t } = useLang()
  const ui = t.ui
  const [scale, setScale] = useState(() => {
    const v = Number(read(SIZE_KEY))
    return v >= MIN && v <= MAX ? v : DEFAULT_SIZE
  })
  const [font, setFont] = useState(() => {
    const v = read(FONT_KEY)
    return FONT_IDS.includes(v) ? v : 'padrao'
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
      <div className="font-picker" role="radiogroup" aria-label={ui.readingFont}>
        {FONT_IDS.map((id) => (
          <button
            key={id}
            type="button"
            role="radio"
            aria-checked={font === id}
            aria-label={ui.fonts[id]}
            title={ui.fonts[id]}
            className={`font-opt fa-${id}${font === id ? ' active' : ''}`}
            onClick={() => setFont(id)}
          >
            A
          </button>
        ))}
      </div>
      <div className="font-picker lang-picker" role="radiogroup" aria-label={ui.language}>
        {LANGS.map((l) => (
          <button
            key={l}
            type="button"
            role="radio"
            aria-checked={lang === l}
            className={`font-opt lang-opt${lang === l ? ' active' : ''}`}
            onClick={() => setLang(l)}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="size-row">
      <button
        type="button"
        className="theme-btn"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label={theme === 'dark' ? ui.lightOn : ui.darkOn}
        title={theme === 'dark' ? ui.lightTitle : ui.darkTitle}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
      <button type="button" onClick={() => setScale(DEFAULT_SIZE)} aria-label={ui.resetSize}>
        <span className="fc-small">A</span>
      </button>
      <input
        type="range"
        min={MIN}
        max={MAX}
        step={5}
        value={scale}
        onChange={(e) => setScale(Number(e.target.value))}
        aria-label={ui.fontSize}
      />
      <span className="fc-big" aria-hidden="true">
        A
      </span>
      </div>
    </div>
  )
}
