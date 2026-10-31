import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { content } from './data/profile.js'

const LANG_KEY = 'lang'
export const LANGS = ['pt', 'en']

function read(key) {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function write(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* armazenamento indisponível: segue sem salvar */
  }
}

// Escolha salva do visitante > idioma do navegador (primeiro da lista que for pt ou en) > inglês.
function detectLang() {
  const saved = read(LANG_KEY)
  if (LANGS.includes(saved)) return saved
  const prefs = navigator.languages?.length ? navigator.languages : [navigator.language]
  for (const l of prefs) {
    const code = String(l || '').toLowerCase().slice(0, 2)
    if (LANGS.includes(code)) return code
  }
  return 'en'
}

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState(detectLang)
  const t = content[lang]

  useEffect(() => {
    document.documentElement.lang = t.htmlLang
    document.title = t.pageTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.metaDescription)
  }, [t])

  const value = useMemo(
    () => ({
      lang,
      t,
      setLang: (l) => {
        write(LANG_KEY, l)
        setLang(l)
      },
    }),
    [lang, t],
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
