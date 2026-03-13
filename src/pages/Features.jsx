import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Features.css'

const navLinks = [
  { label: 'Features', path: '/features' },
  { label: 'About',    path: '/about'    },
  { label: 'Showcase', path: '/showcase' },
  { label: 'Contact',  path: '/contact'  },
]

const features = [
  {
    id: 'live',
    emoji: '🏏',
    tag: 'Core',
    title: 'Live Ball-by-Ball Scoring',
    desc: 'Log every delivery in seconds. Real-time run rates, required rates, partnership tracker, wagonwheel, and full fall-of-wickets — all updating live as you play.',
    bullets: ['Ball-by-ball entry', 'Live RRR calculator', 'Partnership tracker', 'Fall of wickets log'],
    accent: '#f0c840',
  },
  {
    id: 'formats',
    emoji: '🎮',
    tag: 'Game Modes',
    title: '6 Game Formats',
    desc: 'Hundrum (100-ball), Overum (custom overs), Solo challenges, Team vs Team, Ghost Mode battles, and tournament brackets. Every variant your mohalla plays.',
    bullets: ['Hundrum · 100-ball format', 'Overum · set your own overs', 'Solo challenge mode', 'Team vs Team + tournaments'],
    accent: '#60c8f0',
  },
  {
    id: 'ai',
    emoji: '🤖',
    tag: 'AI',
    title: 'AI Match Reports',
    desc: "After every match GullyStat writes a full broadcast-style report — star performers, momentum shifts, turning points, and man of the match. Share it instantly.",
    bullets: ['Auto-generated after every match', 'Star performer highlights', 'Momentum shift analysis', 'One-tap share as image'],
    accent: '#a78bfa',
  },
  {
    id: 'stats',
    emoji: '📊',
    tag: 'Analytics',
    title: 'Deep Player Stats',
    desc: 'Career averages, strike rates, economy, milestones, and form graphs — tracked separately per format. Watch your journey from gully rookie to mohalla legend.',
    bullets: ['Batting + bowling averages', 'Format-split career stats', 'Milestone tracking (50s, 100s)', 'Form graph over last 10 matches'],
    accent: '#34d399',
  },
  {
    id: 'ghost',
    emoji: '👻',
    tag: 'Ghost Mode',
    title: 'Ghost Profile',
    desc: 'Play in the shadows. Build a reputation without revealing your identity. Appear on leaderboards as "???" — then reveal yourself when the time is right.',
    bullets: ['Anonymous identity', 'Leaderboard slot shows "???"', 'Reveal yourself anytime', 'Build the mystery'],
    accent: '#f87171',
  },
  {
    id: 'social',
    emoji: '🏆',
    tag: 'Social',
    title: 'Leaderboards & H2H',
    desc: 'Mohalla-level leaderboards, head-to-head records, rivalry scores. Know exactly who you own and who owns you — with receipts.',
    bullets: ['Mohalla leaderboards', 'Head-to-head records', 'Rivalry tracking', 'Season & all-time rankings'],
    accent: '#fbbf24',
  },
]

const formatCards = [
  { name: 'Hundrum', tag: '100-BALL',    color: '#3b82f6', desc: 'No overs, just 100 balls. Every delivery counts. Explosive, chaotic, addictive.' },
  { name: 'Overum',  tag: 'CUSTOM OVERS',color: '#f0c840', desc: 'You set the rules. 5 overs, 10, 20 — your match, your terms.' },
  { name: 'Solo',    tag: 'CHALLENGE',   color: '#34d399', desc: 'Set a target, bat alone against a ghost score. No team needed.' },
  { name: 'Ghost',   tag: 'ANONYMOUS',   color: '#a78bfa', desc: 'Your stats are real. Your identity is hidden. Be the phantom of the mohalla.' },
]

/* ── Bubble wave SVG: circles rising from the bottom of the previous section's bg
   parentBg  = colour of the section ABOVE (the landing page bg = #07110a)
   childBg   = colour of this section  (#0d1420 deep navy)
   The circles are filled with childBg so they "cut into" the parentBg strip ── */
function BubbleTransition({ parentBg = '#07110a', childBg = '#0d1420' }) {
  // 11 circles across full width
  const count = 11
  return (
    <div className="bubble-transition" style={{ background: parentBg }}>
      <svg
        viewBox={`0 0 ${count * 100} 100`}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', width: '100%', height: '100%' }}
      >
        {/* fill the bottom half so the bg below is solid */}
        <rect x="0" y="50" width={count * 100} height="50" fill={childBg} />
        {/* circles: each sits centred in its column, bottom-aligned at y=50 */}
        {Array.from({ length: count }).map((_, i) => (
          <circle
            key={i}
            cx={i * 100 + 50}
            cy={50}
            r={52}
            fill={childBg}
          />
        ))}
      </svg>
    </div>
  )
}

/* between Features Explorer section and Formats section */
function BubbleTransitionMid({ parentBg = '#0d1420', childBg = '#110a1e' }) {
  const count = 11
  return (
    <div className="bubble-transition" style={{ background: parentBg }}>
      <svg
        viewBox={`0 0 ${count * 100} 100`}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', width: '100%', height: '100%' }}
      >
        <rect x="0" y="50" width={count * 100} height="50" fill={childBg} />
        {Array.from({ length: count }).map((_, i) => (
          <circle key={i} cx={i * 100 + 50} cy={50} r={52} fill={childBg} />
        ))}
      </svg>
    </div>
  )
}

export default function Features() {
  const navigate   = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [active,   setActive]   = useState('live')
  const feat = features.find(f => f.id === active)

  return (
    <>
      {/* ── BG LAYERS (same dark green as landing, so the top bubble merges perfectly) ── */}
      <div className="bg-layer bg-base"    />
      <div className="bg-layer bg-grad"    />
      <div className="bg-layer bg-dots"    />
      <div className="bg-layer bg-vignette"/>
      <div className="bg-layer bg-noise"   />

      {/* ── NAVBAR ── */}
      <nav className="top-nav">
        <div className="nav-inner">
          <div className="nav-brand" onClick={() => { navigate('/'); setMenuOpen(false) }}>
            <img src={logo} alt="GullyStat" className="nav-logo" />
            <span className="nav-name">GullyStat</span>
          </div>
          <div className="nav-links">
            {navLinks.map(l => (
              <button key={l.label}
                className={'nav-link' + (l.path === '/features' ? ' nav-link-active' : '')}
                onClick={() => navigate(l.path)}>
                {l.label}
              </button>
            ))}
          </div>
          <div className="nav-cta-desktop">
            <button className="nav-login"  onClick={() => navigate('/login')}>Login</button>
            <button className="nav-launch" onClick={() => navigate('/dashboard')}>Launch App</button>
          </div>
          <button
            className={'nav-burger' + (menuOpen ? ' nav-burger-open' : '')}
            onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
        <div className={'nav-mobile-menu' + (menuOpen ? ' nav-mobile-open' : '')}>
          {navLinks.map(l => (
            <button key={l.label} className="nav-mobile-link"
              onClick={() => { navigate(l.path); setMenuOpen(false) }}>{l.label}</button>
          ))}
          <div className="nav-mobile-divider" />
          <button className="nav-mobile-login"  onClick={() => { navigate('/login');     setMenuOpen(false) }}>Login</button>
          <button className="nav-mobile-launch" onClick={() => { navigate('/dashboard'); setMenuOpen(false) }}>🏏 Launch App</button>
        </div>
      </nav>

      {/* ════════════════════════════════════════════════
          TOP HERO STRIP — same bg as landing (#07110a)
          so the bubble transition feels like one page
      ════════════════════════════════════════════════ */}
      <div className="ft-hero-strip">
        <div className="ft-hero-strip-inner">
          <div className="ft-header-badge">
            <span className="badge-dot" />
            Everything you need
          </div>
          <h1 className="ft-hero-title">
            Built for gully.
            <span className="ft-hero-accent"> Packed with pro.</span>
          </h1>
          <p className="ft-hero-sub">
            Every feature designed for how gully cricket is actually played —
            loud, local, and legendary.
          </p>
          {/* Decorative cricket field lines */}
          <div className="ft-hero-deco" aria-hidden>
            <span className="ft-deco-tag">🏏 LIVE</span>
            <span className="ft-deco-tag">📊 STATS</span>
            <span className="ft-deco-tag">👻 GHOST</span>
            <span className="ft-deco-tag">🏆 BOARDS</span>
            <span className="ft-deco-tag">🤖 AI</span>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════
          BUBBLE WAVE — hero → features
      ════════════════════════════════ */}
      <BubbleTransition parentBg="#07110a" childBg="#0d1420" />

      {/* ════════════════════════════════
          SECTION: FEATURES EXPLORER
          bg: #0d1420 deep navy
      ════════════════════════════════ */}
      <div className="ft-section ft-section-navy">
        <div className="ft-section-inner">
          <div className="ft-section-eyebrow">Core Features</div>
          <h2 className="ft-section-heading">What GullyStat gives you</h2>

          <div className="ft-explorer">
            {/* Tab sidebar */}
            <div className="ft-tabs">
              {features.map(f => (
                <button
                  key={f.id}
                  className={'ft-tab' + (active === f.id ? ' ft-tab-on' : '')}
                  onClick={() => setActive(f.id)}
                  style={active === f.id ? { '--ac': f.accent } : {}}
                >
                  <span className="ft-tab-em">{f.emoji}</span>
                  <span className="ft-tab-name">{f.title}</span>
                </button>
              ))}
            </div>

            {/* Detail pane */}
            <div className="ft-detail" style={{ '--ac': feat.accent }}>
              <div className="ft-detail-eyebrow">
                <span className="ft-detail-tag">{feat.tag}</span>
              </div>
              <div className="ft-detail-top">
                <span className="ft-detail-em">{feat.emoji}</span>
                <h2 className="ft-detail-title">{feat.title}</h2>
              </div>
              <p className="ft-detail-desc">{feat.desc}</p>
              <ul className="ft-bullets">
                {feat.bullets.map((b, i) => (
                  <li key={i} className="ft-bullet">
                    <span className="ft-bullet-dot" style={{ background: feat.accent, boxShadow: `0 0 6px ${feat.accent}` }} />
                    {b}
                  </li>
                ))}
              </ul>
              <button className="ft-detail-cta"
                style={{ color: feat.accent, borderColor: feat.accent + '44', background: feat.accent + '12' }}
                onClick={() => navigate('/dashboard')}>
                Try it now →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════
          BUBBLE WAVE — features → formats
      ════════════════════════════════ */}
      <BubbleTransitionMid parentBg="#0d1420" childBg="#110a1e" />

      {/* ════════════════════════════════
          SECTION: FORMATS GRID
          bg: #110a1e deep purple-dark
      ════════════════════════════════ */}
      <div className="ft-section ft-section-deep">
        <div className="ft-section-inner">
          <div className="ft-section-eyebrow">Game Modes</div>
          <h2 className="ft-section-heading">Play your way</h2>
          <div className="ft-format-grid">
            {formatCards.map((f, i) => (
              <div key={i} className="ft-format-card" style={{ '--fc': f.color }}>
                <div className="ft-format-pill"
                  style={{ color: f.color, background: f.color + '1a', border: `1px solid ${f.color}44` }}>
                  {f.name}
                </div>
                <div className="ft-format-tag">{f.tag}</div>
                <p className="ft-format-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════
          BUBBLE WAVE — formats → CTA
      ════════════════════════════════ */}
      <BubbleTransitionMid parentBg="#110a1e" childBg="#030d07" />

      {/* ════════════════════════════════
          SECTION: CTA
          bg: #030d07 deepest green
      ════════════════════════════════ */}
      <div className="ft-section ft-section-darkest">
        <div className="ft-cta-inner">
          <h2 className="ft-cta-title">Ready to track your legacy?</h2>
          <p className="ft-cta-sub">Free to start. No setup. Just cricket.</p>
          <div className="ft-cta-btns">
            <button className="btn-main"    onClick={() => navigate('/dashboard')}>🏏 Start Tracking</button>
            <button className="btn-outline" onClick={() => navigate('/')}>← Back Home</button>
          </div>
        </div>
      </div>
    </>
  )
}