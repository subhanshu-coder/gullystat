import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Landing.css'

const features = [
  {
    id: 'live', emoji: '🏏', tag: 'Core',
    title: 'Live Ball-by-Ball Scoring',
    desc: 'Log every delivery in seconds. Real-time run rates, required rates, partnership tracker, wagonwheel, and full fall-of-wickets — all updating live as you play.',
    bullets: ['Ball-by-ball entry', 'Live RRR calculator', 'Partnership tracker', 'Fall of wickets log'],
    accent: '#f0c840',
  },
  {
    id: 'formats', emoji: '🎮', tag: 'Game Modes',
    title: '6 Game Formats',
    desc: 'Hundrum (100-ball), Overum (custom overs), Solo challenges, Team vs Team, Ghost Mode battles, and tournament brackets. Every variant your mohalla plays.',
    bullets: ['Hundrum · 100-ball format', 'Overum · set your own overs', 'Solo challenge mode', 'Team vs Team + tournaments'],
    accent: '#60c8f0',
  },
  {
    id: 'ai', emoji: '🤖', tag: 'AI',
    title: 'AI Match Reports',
    desc: 'After every match GullyStat writes a full broadcast-style report — star performers, momentum shifts, turning points, and man of the match. Share it instantly.',
    bullets: ['Auto-generated after every match', 'Star performer highlights', 'Momentum shift analysis', 'One-tap share as image'],
    accent: '#a78bfa',
  },
  {
    id: 'stats', emoji: '📊', tag: 'Analytics',
    title: 'Deep Player Stats',
    desc: 'Career averages, strike rates, economy, milestones, and form graphs — tracked separately per format. Watch your journey from gully rookie to mohalla legend.',
    bullets: ['Batting + bowling averages', 'Format-split career stats', 'Milestone tracking (50s, 100s)', 'Form graph over last 10 matches'],
    accent: '#34d399',
  },
  {
    id: 'ghost', emoji: '👻', tag: 'Ghost Mode',
    title: 'Ghost Profile',
    desc: 'Play in the shadows. Build a reputation without revealing your identity. Appear on leaderboards as "???" — then reveal yourself when the time is right.',
    bullets: ['Anonymous identity', 'Leaderboard slot shows "???"', 'Reveal yourself anytime', 'Build the mystery'],
    accent: '#f87171',
  },
  {
    id: 'social', emoji: '🏆', tag: 'Social',
    title: 'Leaderboards & H2H',
    desc: 'Mohalla-level leaderboards, head-to-head records, rivalry scores. Know exactly who you own and who owns you — with receipts.',
    bullets: ['Mohalla leaderboards', 'Head-to-head records', 'Rivalry tracking', 'Season & all-time rankings'],
    accent: '#fbbf24',
  },
]

/* ── Continuous Bubble Wave ──
   topColor    = section ABOVE  (shows in gaps between circles — so make circles touch!)
   bottomColor = section BELOW  (fills circles + solid bottom)
── */
function BubbleWave({ topColor, bottomColor, speed = '7s' }) {
  // Make R exactly half of STEP so circles TOUCH each other — no gap, no topColor peeking through
  const N = 12, STEP = 120, R = 60
  // CY = R means circle tops are exactly at y=0 (top of viewBox)
  // CY > R means they poke up by (CY - R) units — we want them mostly below midline
  const CY = 72, VBW = N * STEP

  const Tile = () => (
    <svg viewBox={`0 0 ${VBW} 100`} preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg" className="bw-svg">
      {/* Solid fill from circle centres down — guarantees no gap at bottom */}
      <rect x="-1" y={CY} width={VBW + 2} height={100 - CY + 1} fill={bottomColor} />
      {/* Circles poking upward */}
      {Array.from({ length: N }, (_, i) => (
        <circle key={i} cx={i * STEP + STEP / 2} cy={CY} r={R} fill={bottomColor} />
      ))}
    </svg>
  )

  return (
    <div className="bw-wrap" style={{ background: topColor }}>
      <div className="bw-track" style={{ animationDuration: speed }}>
        <Tile /><Tile />
      </div>
    </div>
  )
}

/* ── Phone Mockup ── */
const balls   = ['4', 'W', '1', '6', '1', '2']
const batters = [
  { name: 'Rahul S',  star: true,  r: 67, b: 44, sr: 152 },
  { name: 'Suresh K', star: false, r: 38, b: 22, sr: 172 },
]
const statsA = [
  { v: '9', l: 'Fours', gold: true }, { v: '5', l: 'Sixes', gold: true },
  { v: '8', l: 'Wkts',  red: true  }, { v: '48', l: "P'ship" },
]
const statsB = [
  { v: '9.3', l: 'Run Rate' }, { v: '30.7', l: 'Req Rate', red: true }, { v: '152', l: 'Str Rate' },
]
const comms   = [
  { ball: '6', type: 's', text: '18.4 — Rahul smashes over long-on! Massive six!' },
  { ball: 'W', type: 'w', text: '17.2 — Caught at mid-off! Arjun out for 28' },
  { ball: '4', type: 'f', text: '17.1 — Driven through covers, races away!' },
]
const summary = [{ l: "P'ship", v: '48 runs' }, { l: 'Bndrys', v: '9×4  5×6' }, { l: 'Econ', v: 'Vikram 6.0' }]
const bc = b => b === 'W' ? 'pb pb-w' : b === '6' ? 'pb pb-s' : b === '4' ? 'pb pb-f' : 'pb pb-n'
const cc = t => t === 's' ? 'ct ct-s' : t === 'w' ? 'ct ct-w' : 'ct ct-f'

function PhoneMockup() {
  return (
    <div className="phone">
      <div className="phone-shell">
        <div className="ph-btn ph-vol1" /><div className="ph-btn ph-vol2" /><div className="ph-btn ph-pwr" />
        <div className="phone-screen">
          <div className="ph-island" />
          <div className="ph-status">
            <span className="ph-time">9:41</span>
            <div className="ph-icons">
              <svg width="11" height="8" viewBox="0 0 12 8" fill="none">
                <rect x="0" y="4" width="2" height="4" rx="0.5" fill="rgba(242,237,228,0.55)" />
                <rect x="3" y="2.5" width="2" height="5.5" rx="0.5" fill="rgba(242,237,228,0.65)" />
                <rect x="6" y="1" width="2" height="7" rx="0.5" fill="rgba(242,237,228,0.80)" />
                <rect x="9" y="0" width="2" height="8" rx="0.5" fill="rgba(242,237,228,1)" />
              </svg>
              <div className="ph-batt"><div className="ph-batt-fill" /><div className="ph-batt-tip" /></div>
            </div>
          </div>
          <div className="ph-header">
            <div className="ph-header-left">
              <span className="ph-appname">GullyStat</span>
              <span className="ph-appsub">Live Match</span>
            </div>
            <div className="ph-live-pill"><span className="ph-live-dot" /><span>LIVE</span></div>
          </div>
          <div className="ph-block">
            <div className="ph-lbl">📋 Scorecard · Overum 20</div>
            <div className="ph-teams">
              <div className="ph-team">
                <span className="ph-tname">Team A</span>
                <span className="ph-runs">187<em>/6</em></span>
                <span className="ph-ov">20.0 ov · CRR 7.7</span>
              </div>
              <div className="ph-vs-col"><span className="ph-vs">VS</span></div>
              <div className="ph-team ph-team-r">
                <span className="ph-tname">Team B</span>
                <span className="ph-runs ph-batting">142<em>/8</em></span>
                <span className="ph-ov">18.3 ov · batting</span>
              </div>
            </div>
            <div className="ph-chase">⚡ Need 46 off 9 · RRR 30.67</div>
          </div>
          <div className="ph-row2">
            <div className="ph-block ph-batting-block">
              <div className="ph-lbl">🏏 Batting</div>
              {batters.map((p, i) => (
                <div key={i} className="ph-batter">
                  <span className="ph-bname">{p.name}{p.star && <span className="ph-star"> ★</span>}</span>
                  <div className="ph-bstats">
                    <span className="ph-brun">{p.r}</span>
                    <span className="ph-bball">({p.b})</span>
                    <span className="ph-bsr">SR {p.sr}</span>
                  </div>
                </div>
              ))}
              <div className="ph-divider" />
              <div className="ph-batter">
                <span className="ph-bname ph-bowler">Vikram P <span className="ph-bowl-tag">bowl</span></span>
                <div className="ph-bstats"><span className="ph-brun">2</span><span className="ph-bball">/18 (3)</span></div>
              </div>
            </div>
            <div className="ph-right-col">
              <div className="ph-block ph-balls-block">
                <div className="ph-lbl">🎯 Last 6</div>
                <div className="ph-balls">{balls.map((b, i) => <span key={i} className={bc(b)}>{b}</span>)}</div>
              </div>
              <div className="ph-block ph-grid-block">
                <div className="ph-lbl">📊 Stats</div>
                <div className="ph-g4">{statsA.map((s, i) => <div key={i} className="ph-gs"><span className={'ph-gv' + (s.gold ? ' ph-gold' : s.red ? ' ph-red' : '')}>{s.v}</span><span className="ph-gl">{s.l}</span></div>)}</div>
                <div className="ph-g3">{statsB.map((s, i) => <div key={i} className="ph-gs"><span className={'ph-gv' + (s.red ? ' ph-red' : '')}>{s.v}</span><span className="ph-gl">{s.l}</span></div>)}</div>
              </div>
            </div>
          </div>
          <div className="ph-block ph-comm-block">
            <div className="ph-lbl">🎙️ Commentary</div>
            {comms.map((c, i) => (
              <div key={i} className="ph-comm">
                <span className={cc(c.type)}>{c.ball}</span>
                <span className="ph-comm-text">{c.text}</span>
              </div>
            ))}
          </div>
          <div className="ph-bottom-row">
            <div className="ph-block ph-report-block">
              <div className="ph-lbl">🤖 AI Report</div>
              <p className="ph-report-p">Rahul's 67★ keeps chase alive. RRR 30.67 near impossible — 2 wkts left.</p>
              <div className="ph-rtags">
                <span className="ph-rtag">Rahul 67★</span>
                <span className="ph-rtag ph-rtag-r">Vikram 2/18</span>
              </div>
            </div>
            <div className="ph-block ph-summary-block">
              <div className="ph-lbl">📝 Summary</div>
              {summary.map((r, i) => <div key={i} className="ph-sum-row"><span className="ph-sum-l">{r.l}</span><span className="ph-sum-v">{r.v}</span></div>)}
            </div>
          </div>
          <div className="ph-nav">
            {[{ ic: '🏠', l: 'Home' }, { ic: '📊', l: 'Stats' }, { ic: '🏏', l: 'Live' }, { ic: '🏆', l: 'Board' }, { ic: '👤', l: 'Profile' }].map((n, i) => (
              <div key={i} className={'ph-nav-item' + (i === 2 ? ' ph-nav-active' : '')}>
                <span className="ph-nav-ic">{n.ic}</span>
                <span className="ph-nav-l">{n.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════
   LANDING — HOME PAGE ONLY
   Scroll container is .landing-root itself
   (position:fixed + overflow-y:auto)
   so finger and mouse both scroll freely.
══════════════════════════════════════ */
export default function Landing() {
  const navigate    = useNavigate()
  const rootRef     = useRef(null)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [showTop,   setShowTop]   = useState(false)
  const [activeTab, setActiveTab] = useState('live')
  const feat = features.find(f => f.id === activeTab)

  /* Track scroll inside .landing-root, not window */
  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const onScroll = () => setShowTop(el.scrollTop > 500)
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = id => {
    const el  = rootRef.current
    const target = document.getElementById(id)
    if (!el || !target) return
    /* scrollTop relative to the landing-root container */
    el.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' })
    setMenuOpen(false)
  }

  const scrollTop = () => {
    rootRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    /* ↓ THIS is the scroll container — position:fixed, overflow-y:auto */
    <div className="landing-root" ref={rootRef}>

      {/* All scrollable content */}
      <div className="landing-content">

        {/* ── NAV (sticky inside scroll container) ── */}
        <nav className="top-nav">
          <div className="nav-inner">
            <div className="nav-brand" onClick={scrollTop}>
              <img src={logo} alt="GullyStat" className="nav-logo" />
              <span className="nav-name">GULLYSTAT</span>
            </div>
            <div className="nav-links">
              {[{ label: 'Features', id: 'features' }, { label: 'Formats', id: 'formats' }, { label: 'About', id: 'about' }].map(l => (
                <button key={l.id} className="nav-link" onClick={() => scrollTo(l.id)}>{l.label}</button>
              ))}
            </div>
            <div className="nav-cta-d">
              <button className="nav-login" onClick={() => navigate('/login')}>Login</button>
              <button className="nav-launch" onClick={() => navigate('/dashboard')}>🏏 Launch App</button>
            </div>
            <button className={`nav-burger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(o => !o)}>
              <span /><span /><span />
            </button>
          </div>
          {menuOpen && (
            <div className="nav-mob-drop">
              {[{ label: 'Features', id: 'features' }, { label: 'Formats', id: 'formats' }, { label: 'About', id: 'about' }].map(l => (
                <button key={l.id} className="nav-mob-link" onClick={() => scrollTo(l.id)}>{l.label}</button>
              ))}
              <div className="nav-mob-sep" />
              <button className="nav-mob-launch" onClick={() => { navigate('/dashboard'); setMenuOpen(false) }}>🏏 Launch App</button>
            </div>
          )}
        </nav>

        {/* ── BACK TO TOP ── */}
        <button className={`back-top ${showTop ? 'visible' : ''}`} onClick={scrollTop}>
          <span>↑</span><span>TOP</span>
        </button>

        {/* ════════════════════════
            HERO
        ════════════════════════ */}
        <section className="sec-hero" id="hero">
          {/* Decorative bg — scoped to hero only, not fixed */}
          <div className="hero-bg-grad" />
          <div className="hero-bg-dots" />
          <div className="hero-bg-vignette" />
          <div className="hero-wrap">
            <div className="hero-left">
              <div className="hero-badge">
                <span className="hero-dot" />
                LOCAL CRICKET · PROFESSIONAL ANALYTICS
              </div>
              <h1 className="hero-h1">
                Your gully.<br />
                Your stats.<br />
                <span className="hero-accent">Your legacy.</span>
              </h1>
              <p className="hero-sub">
                What Cricinfo does for internationals —<br />
                GullyStat does for your mohalla.
              </p>
              <div className="hero-tags">
                {['Hundrum · 100-ball', 'Overum · Custom', 'Live Scoring', 'AI Reports', 'Ghost Mode', 'Leaderboards'].map(t => (
                  <span key={t} className="hero-tag">{t}</span>
                ))}
              </div>
              <div className="hero-btns">
                <button className="btn-gold" onClick={() => navigate('/dashboard')}>🏏 Start Tracking</button>
                <button className="btn-ghost" onClick={() => scrollTo('features')}>See Features ↓</button>
              </div>
              <div className="hero-stats">
                {[{ v: '6', l: 'Game Modes' }, { v: '100+', l: 'Matches' }, { v: 'AI', l: 'Reports' }, { v: '👻', l: 'Ghost Mode' }].map((s, i) => (
                  <div key={i} className="hstat">
                    <span className="hstat-v">{s.v}</span>
                    <span className="hstat-l">{s.l}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-right">
              <div className="phone-glow" />
              <PhoneMockup />
              <div className="phone-tag">📱 Available on Mobile</div>
            </div>
          </div>
          <div className="scroll-hint" onClick={() => scrollTo('features')}>
            <span className="scroll-hint-text">scroll down</span>
            <span className="scroll-hint-arrow">↓</span>
          </div>
          {/* Wave INSIDE hero — shares exact same solid bg, zero third-color bleed */}
          <BubbleWave topColor="#07110a" bottomColor="#0d1f3c" speed="7s" />
        </section>

        {/* ════════════════════════
            FEATURES
        ════════════════════════ */}
        <section className="sec-features" id="features">
          <div className="sec-inner">
            <div className="sec-eyebrow">CORE FEATURES</div>
            <h2 className="sec-title">What GullyStat<br /><span className="sec-accent">gives you</span></h2>
            <p className="sec-sub">Every feature designed for how gully cricket is actually played — loud, local, and legendary.</p>
            <div className="ft-explorer">
              <div className="ft-tabs">
                {features.map(f => (
                  <button key={f.id}
                    className={'ft-tab' + (activeTab === f.id ? ' ft-tab-on' : '')}
                    onClick={() => setActiveTab(f.id)}
                    style={activeTab === f.id ? { '--ac': f.accent } : {}}>
                    <span className="ft-tab-em">{f.emoji}</span>
                    <span className="ft-tab-name">{f.title}</span>
                  </button>
                ))}
              </div>
              <div className="ft-detail" style={{ '--ac': feat.accent }}>
                <div className="ft-detail-tag">{feat.tag}</div>
                <div className="ft-detail-top">
                  <span className="ft-detail-em">{feat.emoji}</span>
                  <h3 className="ft-detail-title">{feat.title}</h3>
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
        </section>

        {/* wave: features blue → formats purple */}
        <BubbleWave topColor="#0d1f3c" bottomColor="#160d2e" speed="5s" />

        {/* ════════════════════════
            FORMATS
        ════════════════════════ */}
        <section className="sec-formats" id="formats">
          <div className="sec-inner">
            <div className="sec-eyebrow">GAME MODES</div>
            <h2 className="sec-title">Play your<br /><span className="sec-accent">way</span></h2>
            <p className="sec-sub">6 formats for every kind of gully cricket. Pick your game.</p>
            <div className="fmt-grid">
              {[
                { name: 'Hundrum', tag: '100-BALL',     color: '#3b82f6', desc: 'No overs, just 100 balls. Every delivery counts. Explosive, chaotic, addictive.' },
                { name: 'Overum',  tag: 'CUSTOM OVERS', color: '#f0c840', desc: 'You set the rules. 5 overs, 10, 20 — your match, your terms.' },
                { name: 'Solo',    tag: 'CHALLENGE',    color: '#34d399', desc: 'Set a target, bat alone against a ghost score. No team needed.' },
                { name: 'Ghost',   tag: 'ANONYMOUS',    color: '#a78bfa', desc: 'Your stats are real. Your identity is hidden. Be the phantom of the mohalla.' },
                { name: 'Team',    tag: 'CLASSIC',      color: '#f87171', desc: 'Full squad vs squad. Complete scorecard, batting & bowling stats.' },
                { name: 'Tourney', tag: 'BRACKET',      color: '#fbbf24', desc: 'Mohalla championship mode. Knockout brackets, group stages, finals.' },
              ].map((f, i) => (
                <div key={i} className="fmt-card" style={{ '--fc': f.color }}>
                  <div className="fmt-num">0{i + 1}</div>
                  <div className="fmt-pill" style={{ color: f.color, background: f.color + '18', border: `1px solid ${f.color}44` }}>{f.name}</div>
                  <div className="fmt-tag">{f.tag}</div>
                  <p className="fmt-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* wave: formats purple → cta dark green */}
        <BubbleWave topColor="#160d2e" bottomColor="#040c06" speed="9s" />

        {/* ════════════════════════
            ABOUT / CTA
        ════════════════════════ */}
        <section className="sec-cta" id="about">
          <div className="cta-inner">
            <div className="cta-left">
              <div className="sec-eyebrow">FREE · NO SETUP · JUST CRICKET</div>
              <h2 className="sec-title">Ready to track<br /><span className="cta-accent">your legacy?</span></h2>
              <p className="sec-sub">Join mohallas across India scoring every gully match like it's an international.</p>
              <div className="cta-btns">
                <button className="btn-gold lg" onClick={() => navigate('/dashboard')}>🏏 Start Tracking — Free</button>
                <button className="btn-ghost" onClick={scrollTop}>↑ Back to Top</button>
              </div>
            </div>
            <div className="cta-checklist">
              {[
                { e: '🏏', t: 'Live ball-by-ball scoring' },
                { e: '🤖', t: 'AI match reports after every game' },
                { e: '📊', t: 'Career stats tracked per format' },
                { e: '👻', t: 'Ghost mode — play anonymous' },
                { e: '🏆', t: 'Mohalla leaderboards' },
                { e: '⚔️', t: 'Head-to-head records & rivalries' },
              ].map((f, i) => (
                <div key={i} className="cta-check">
                  <span className="cta-check-em">{f.e}</span>
                  {f.t}
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>{/* end landing-content */}
    </div>/* end landing-root */
  )
}