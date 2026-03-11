import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// Glitch canvas logic
setTimeout(() => {
  const canvas = document.getElementById('bg-canvas')
  if (!canvas) return
  
  const ctx = canvas.getContext('2d')
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$GS'
  const colors = ['#0a2a0a', '#0d3d0d', '#1B5E20', '#0a1a0a']
  const cW = 10, cH = 16
  let letters = [], cols = 0, rows = 0

  function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    cols = Math.ceil(canvas.width / cW)
    rows = Math.ceil(canvas.height / cH)
    letters = Array.from({ length: cols * rows }, () => ({
      char: chars[Math.floor(Math.random() * chars.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.6 + 0.1
    }))
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = `${cH}px monospace`
    ctx.textBaseline = 'top'
    
    // Randomly update a few letters for the "glitch" effect
    const n = Math.max(1, Math.floor(letters.length * 0.03))
    for (let i = 0; i < n; i++) {
      const idx = Math.floor(Math.random() * letters.length)
      if (letters[idx]) {
        letters[idx].char = chars[Math.floor(Math.random() * chars.length)]
        letters[idx].color = colors[Math.floor(Math.random() * colors.length)]
        letters[idx].opacity = Math.random() * 0.6 + 0.1
      }
    }

    letters.forEach((l, i) => {
      ctx.globalAlpha = l.opacity
      ctx.fillStyle = l.color
      ctx.fillText(l.char, (i % cols) * cW, Math.floor(i / cols) * cH)
    })
    ctx.globalAlpha = 1
  }

  resize()
  window.addEventListener('resize', resize)
  setInterval(draw, 60)
}, 100)