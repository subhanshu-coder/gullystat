import { useState, useEffect, useCallback } from 'react'
import './ClickEffect.css'

/*
  ClickEffect — global overlay
  Drop this once inside App.jsx (outside <Routes>) and it works on every page.

  On every click it spawns a burst of:
  - A large score number (+1, +4, +6, W!, etc) that floats up
  - A ring pulse at the click point
  - Small satellite dots that scatter outward
*/

const CRICKET_LABELS = ['+1', '+2', '+4', '+6', 'W!', 'OUT!', 'FOUR!', 'SIX!', 'NB', 'WD', '★', '🏏']
const COLORS = ['#f0c840', '#f8d860', '#34d399', '#60c8f0', '#a78bfa', '#f87171', '#fbbf24']

let _id = 0
const uid = () => ++_id

export default function ClickEffect() {
  const [sparks, setSparks] = useState([])

  const handleClick = useCallback((e) => {
    // Don't fire on interactive elements
    const tag = e.target.tagName.toLowerCase()
    if (['button', 'a', 'input', 'textarea', 'select'].includes(tag)) {
      // Still fire but use a softer label
    }

    const x = e.clientX
    const y = e.clientY
    const color = COLORS[Math.floor(Math.random() * COLORS.length)]
    const label = CRICKET_LABELS[Math.floor(Math.random() * CRICKET_LABELS.length)]
    const id = uid()

    // Main floating number
    const main = {
      id,
      type: 'number',
      x, y,
      label,
      color,
      dx: (Math.random() - 0.5) * 30,   // slight horizontal drift
      dy: -(60 + Math.random() * 50),    // float upward
    }

    // Ring pulse
    const ring = {
      id: uid(),
      type: 'ring',
      x, y,
      color,
    }

    // 5 satellite dots scattering outward
    const dots = Array.from({ length: 5 }, (_, i) => {
      const angle = (i / 5) * Math.PI * 2 + Math.random() * 0.4
      const dist  = 35 + Math.random() * 45
      return {
        id: uid(),
        type: 'dot',
        x, y,
        dx: Math.cos(angle) * dist,
        dy: Math.sin(angle) * dist,
        color,
        size: 3 + Math.random() * 4,
      }
    })

    setSparks(prev => [...prev, main, ring, ...dots])

    // Clean up after animation finishes (900ms)
    const ids = [main.id, ring.id, ...dots.map(d => d.id)]
    setTimeout(() => {
      setSparks(prev => prev.filter(s => !ids.includes(s.id)))
    }, 900)
  }, [])

  useEffect(() => {
    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [handleClick])

  return (
    <div className="click-overlay" aria-hidden="true">
      {sparks.map(s => {
        if (s.type === 'number') return (
          <span
            key={s.id}
            className="click-number"
            style={{
              left: s.x,
              top:  s.y,
              color: s.color,
              '--dx': `${s.dx}px`,
              '--dy': `${s.dy}px`,
              textShadow: `0 0 12px ${s.color}88, 0 0 28px ${s.color}44`,
            }}
          >
            {s.label}
          </span>
        )

        if (s.type === 'ring') return (
          <span
            key={s.id}
            className="click-ring"
            style={{
              left: s.x,
              top:  s.y,
              borderColor: s.color,
              boxShadow: `0 0 8px ${s.color}66`,
            }}
          />
        )

        if (s.type === 'dot') return (
          <span
            key={s.id}
            className="click-dot"
            style={{
              left: s.x,
              top:  s.y,
              width:  s.size,
              height: s.size,
              background: s.color,
              '--dx': `${s.dx}px`,
              '--dy': `${s.dy}px`,
              boxShadow: `0 0 6px ${s.color}`,
            }}
          />
        )

        return null
      })}
    </div>
  )
}