import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Landing.css'

const navLinks = [
  { label: 'Features', path: '/features' },
  { label: 'About',    path: '/about'    },
  { label: 'Showcase', path: '/showcase' },
  { label: 'Contact',  path: '/contact'  },
]
const tags = [
  'Hundrum · 100-ball', 'Overum · Custom',
  'Live Scoring', 'AI Reports', 'Ghost Mode', 'Leaderboards',
]
const balls   = ['4', 'W', '1', '6', '1', '2']
const batters = [
  { name: 'Rahul S',  star: true,  r: 67, b: 44, sr: 152 },
  { name: 'Suresh K', star: false, r: 38, b: 22, sr: 172 },
]
const statsA = [
  { v: '9',   l: 'Fours', gold: true },
  { v: '5',   l: 'Sixes', gold: true },
  { v: '8',   l: 'Wkts',  red: true  },
  { v: '48',  l: "P'ship" },
]
const statsB = [
  { v: '9.3',  l: 'Run Rate' },
  { v: '30.7', l: 'Req Rate', red: true },
  { v: '152',  l: 'Str Rate' },
]
const comms = [
  { ball: '6', type: 's', text: '18.4 — Rahul smashes over long-on! Massive six!' },
  { ball: 'W', type: 'w', text: '17.2 — Caught at mid-off! Arjun out for 28'     },
  { ball: '4', type: 'f', text: '17.1 — Driven through covers, races away!'      },
]
const summary = [
  { l: "P'ship", v: '48 runs'    },
  { l: 'Bndrys', v: '9×4  5×6'  },
  { l: 'Econ',   v: 'Vikram 6.0'},
]

function ballCls(b) {
  if (b === 'W') return 'pb pb-w'
  if (b === '6') return 'pb pb-s'
  if (b === '4') return 'pb pb-f'
  return 'pb pb-n'
}
function commCls(t) {
  if (t === 's') return 'ct ct-s'
  if (t === 'w') return 'ct ct-w'
  return 'ct ct-f'
}

/* ── Faint cricket field SVG decoration ── */
function BgField() {
  return (
    <svg className="bg-field" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bfg" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#1e4814" stopOpacity="0.22" />
          <stop offset="55%"  stopColor="#0e2808" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#060e04" stopOpacity="0"    />
        </radialGradient>
      </defs>
      <ellipse cx="300" cy="300" rx="282" ry="282" fill="url(#bfg)" />
      <ellipse cx="300" cy="300" rx="278" ry="278" fill="none" stroke="rgba(200,170,60,0.07)" strokeWidth="1.5" strokeDasharray="6,9" />
      <ellipse cx="300" cy="300" rx="148" ry="148" fill="none" stroke="rgba(200,170,60,0.05)" strokeWidth="1"   strokeDasharray="4,8" />
      <rect   x="286" y="172" width="28" height="256" rx="2" fill="rgba(130,110,40,0.08)" />
      <line  x1="270" y1="220" x2="330" y2="220" stroke="rgba(230,200,100,0.11)" strokeWidth="1.5"/>
      <line  x1="270" y1="380" x2="330" y2="380" stroke="rgba(230,200,100,0.11)" strokeWidth="1.5"/>
      {[{x:55,y:55},{x:545,y:55},{x:55,y:545},{x:545,y:545}].map((p,i) => (
        <g key={i}>
          <line x1={p.x} y1={p.y} x2="300" y2="300" stroke="rgba(200,170,60,0.035)" strokeWidth="1"/>
          <circle cx={p.x} cy={p.y} r="7" fill="rgba(240,200,64,0.08)" />
        </g>
      ))}
    </svg>
  )
}

/* ── Pure-CSS Phone ── */
function PhoneMockup() {
  return (
    <div className="phone">
      <div className="phone-shell">
        <div className="ph-btn ph-vol1" />
        <div className="ph-btn ph-vol2" />
        <div className="ph-btn ph-pwr"  />
        <div className="phone-screen">
          <div className="ph-island" />

          {/* Status */}
          <div className="ph-status">
            <span className="ph-time">9:41</span>
            <div className="ph-icons">
              <svg width="11" height="8" viewBox="0 0 12 8" fill="none">
                <rect x="0" y="4"   width="2" height="4"   rx="0.5" fill="rgba(242,237,228,0.55)"/>
                <rect x="3" y="2.5" width="2" height="5.5" rx="0.5" fill="rgba(242,237,228,0.65)"/>
                <rect x="6" y="1"   width="2" height="7"   rx="0.5" fill="rgba(242,237,228,0.80)"/>
                <rect x="9" y="0"   width="2" height="8"   rx="0.5" fill="rgba(242,237,228,1)"/>
              </svg>
              <svg width="13" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M7 2C9.2 2 11.2 2.9 12.6 4.4L14 3C12.2 1.1 9.7 0 7 0 4.3 0 1.8 1.1 0 3L1.4 4.4C2.8 2.9 4.8 2 7 2Z" fill="rgba(242,237,228,0.5)"/>
                <path d="M7 5C8.3 5 9.5 5.5 10.4 6.4L11.8 5C10.5 3.7 8.8 3 7 3 5.2 3 3.5 3.7 2.2 5L3.6 6.4C4.5 5.5 5.7 5 7 5Z" fill="rgba(242,237,228,0.75)"/>
                <circle cx="7" cy="9" r="1" fill="rgba(242,237,228,0.95)"/>
              </svg>
              <div className="ph-batt"><div className="ph-batt-fill"/><div className="ph-batt-tip"/></div>
            </div>
          </div>

          {/* Header */}
          <div className="ph-header">
            <div className="ph-header-left">
              <span className="ph-appname">GullyStat</span>
              <span className="ph-appsub">Live Match</span>
            </div>
            <div className="ph-live-pill">
              <span className="ph-live-dot" />
              <span>LIVE</span>
            </div>
          </div>

          {/* Scorecard */}
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

          {/* Row 2: Batting + right col */}
          <div className="ph-row2">
            <div className="ph-block ph-batting-block">
              <div className="ph-lbl">🏏 Batting</div>
              {batters.map((p,i) => (
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
                <div className="ph-balls">
                  {balls.map((b,i) => <span key={i} className={ballCls(b)}>{b}</span>)}
                </div>
              </div>
              <div className="ph-block ph-grid-block">
                <div className="ph-lbl">📊 Stats</div>
                <div className="ph-g4">
                  {statsA.map((s,i) => (
                    <div key={i} className="ph-gs">
                      <span className={'ph-gv'+(s.gold?' ph-gold':s.red?' ph-red':'')}>{s.v}</span>
                      <span className="ph-gl">{s.l}</span>
                    </div>
                  ))}
                </div>
                <div className="ph-g3">
                  {statsB.map((s,i) => (
                    <div key={i} className="ph-gs">
                      <span className={'ph-gv'+(s.red?' ph-red':'')}>{s.v}</span>
                      <span className="ph-gl">{s.l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Commentary */}
          <div className="ph-block ph-comm-block">
            <div className="ph-lbl">🎙️ Commentary</div>
            {comms.map((c,i) => (
              <div key={i} className="ph-comm">
                <span className={commCls(c.type)}>{c.ball}</span>
                <span className="ph-comm-text">{c.text}</span>
              </div>
            ))}
          </div>

          {/* Report + Summary */}
          <div className="ph-bottom-row">
            <div className="ph-block ph-report-block">
              <div className="ph-lbl">🤖 AI Report</div>
              <p className="ph-report-p">Rahul's 67★ keeps chase alive. RRR 30.67 near impossible — 2 wkts left. Team A favourites.</p>
              <div className="ph-rtags">
                <span className="ph-rtag">Rahul 67★</span>
                <span className="ph-rtag ph-rtag-r">Vikram 2/18</span>
              </div>
            </div>
            <div className="ph-block ph-summary-block">
              <div className="ph-lbl">📝 Summary</div>
              {summary.map((r,i) => (
                <div key={i} className="ph-sum-row">
                  <span className="ph-sum-l">{r.l}</span>
                  <span className="ph-sum-v">{r.v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom nav */}
          <div className="ph-nav">
            {[
              {ic:'🏠',l:'Home'},{ic:'📊',l:'Stats'},{ic:'🏏',l:'Live'},
              {ic:'🏆',l:'Board'},{ic:'👤',l:'Profile'},
            ].map((n,i) => (
              <div key={i} className={'ph-nav-item'+(i===2?' ph-nav-active':'')}>
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
   MAIN PAGE
══════════════════════════════════════ */
export default function Landing() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* ── Fixed background layers — OUTSIDE .landing so they don't affect flex layout ── */}
      <div className="bg-layer bg-base"    />
      <div className="bg-layer bg-grad"    />
      <div className="bg-layer bg-dots"    />
      <div className="bg-layer bg-vignette"/>
      <div className="bg-layer bg-noise"   />
      <BgField />

      {/* ── Page shell ── */}
      <div className="landing">

        {/* NAVBAR */}
        <nav className="top-nav">
          <div className="nav-inner">
            <div className="nav-brand" onClick={() => { navigate('/'); setMenuOpen(false) }}>
              <img src={logo} alt="GullyStat" className="nav-logo" />
              <span className="nav-name">GullyStat</span>
            </div>

            <div className="nav-links">
              {navLinks.map(l => (
                <button key={l.label} className="nav-link" onClick={() => navigate(l.path)}>
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
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Menu"
            >
              <span /><span /><span />
            </button>
          </div>

          {/* Mobile dropdown */}
          <div className={'nav-mobile-menu' + (menuOpen ? ' nav-mobile-open' : '')}>
            {navLinks.map(l => (
              <button key={l.label} className="nav-mobile-link"
                onClick={() => { navigate(l.path); setMenuOpen(false) }}>
                {l.label}
              </button>
            ))}
            <div className="nav-mobile-divider" />
            <button className="nav-mobile-login"  onClick={() => { navigate('/login');     setMenuOpen(false) }}>Login</button>
            <button className="nav-mobile-launch" onClick={() => { navigate('/dashboard'); setMenuOpen(false) }}>🏏 Launch App</button>
          </div>
        </nav>

        {/* HERO */}
        <main className="hero">

          {/* LEFT */}
          <div className="hero-left">
            <div className="badge">
              <span className="badge-dot" />
              Local Cricket · Professional Analytics
            </div>

            <h1 className="title">
              Your gully.<br />
              Your stats.<br />
              <span className="title-accent">Your legacy.</span>
            </h1>

            <p className="subtitle">
              What Cricinfo does for internationals —<br />
              GullyStat does for your mohalla.
            </p>

            <div className="tag-row">
              {tags.map(t => <span className="tag" key={t}>{t}</span>)}
            </div>

            <div className="btn-row">
              <button className="btn-main"    onClick={() => navigate('/dashboard')}>🏏 Start Tracking</button>
              <button className="btn-outline" onClick={() => navigate('/features')}>See Features →</button>
            </div>

            <div className="stats-bar">
              {[
                { v: '6',    l: 'Game Modes' },
                { v: '100+', l: 'Matches'    },
                { v: 'AI',   l: 'Reports'    },
                { v: '👻',   l: 'Ghost Mode' },
              ].map((s,i) => (
                <div className="stat" key={i}>
                  <span className="stat-val">{s.v}</span>
                  <span className="stat-lbl">{s.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right">
            <div className="phone-glow" />
            <PhoneMockup />
            <div className="phone-tag">
              <span>📱</span>
              <span>Available on Mobile</span>
            </div>
          </div>

        </main>
      </div>
    </>
  )
}