// Renderiza **trechos** em negrito dentro de um texto simples.
export default function Rich({ text }) {
  return text.split('**').map((part, i) => (i % 2 === 1 ? <b key={i}>{part}</b> : part))
}
