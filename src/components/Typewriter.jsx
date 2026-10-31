import { useEffect, useState } from 'react'

const reduced = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Typewriter({ text, speed = 70, delay = 400 }) {
  const [n, setN] = useState(() => (reduced() ? text.length : 0))

  useEffect(() => {
    if (n >= text.length) return
    const id = setTimeout(() => setN(n + 1), n === 0 ? delay : speed)
    return () => clearTimeout(id)
  }, [n, text, speed, delay])

  // O trecho ainda não digitado fica invisível, mas ocupa espaço (evita o layout pular).
  return (
    <span aria-label={text}>
      <span aria-hidden="true">
        {text.slice(0, n)}
        <span className="caret" />
        <span className="ghost">{text.slice(n)}</span>
      </span>
    </span>
  )
}
