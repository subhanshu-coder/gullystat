import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import logo from './assets/logo.png'
import Landing       from './components/Landing'
import Dashboard     from './pages/Dashboard'
import StartMatch    from './pages/StartMatch'
import LiveScorer    from './pages/LiveScorer'
import Scorecard     from './pages/Scorecard'
import PlayerProfile from './pages/PlayerProfile'
import Leaderboard   from './pages/Leaderboard'
import Challenges    from './pages/Challenges'
import Badges        from './pages/Badges'
import HeadToHead    from './pages/HeadToHead'
import Tournaments   from './pages/Tournaments'
import GhostProfile  from './pages/GhostProfile'
import ClickEffect   from './components/ClickEffect'
import Login         from './components/Login'
import './App.css'

const navItems = [
  { path: '/dashboard',    icon: '🏠', label: 'Home',    parent: 'GullyStat' },
  {
    path: '/start-match',  icon: '🏏', label: 'Match',   parent: 'GullyStat',
    subs: [
      { path: '/live-scorer', icon: '📡', label: 'Live Scorer' },
      { path: '/scorecard',   icon: '📋', label: 'Scorecard'   },
    ],
  },
  {
    path: '/leaderboard',  icon: '🏆', label: 'Compete', parent: 'GullyStat',
    subs: [
      { path: '/challenges',   icon: '⚡', label: 'Challenges'   },
      { path: '/head-to-head', icon: '⚔️', label: 'Head to Head' },
      { path: '/tournaments',  icon: '🥇', label: 'Tournaments'  },
    ],
  },
  {
    path: '/ghost-profile', icon: '👻', label: 'Profile', parent: 'GullyStat',
    subs: [
      { path: '/badges', icon: '🎖️', label: 'Badges' },
    ],
  },
  { path: '/player/me', icon: '📊', label: 'Stats', parent: 'GullyStat' },
]

/* ── Canvas glitch background ── */
function useGlitchCanvas() {
  useEffect(() => {
    const canvas = document.getElementById('bg-canvas')
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const chars = '01GSABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&'
    const colors = ['#071209', '#0a1a0c', '#0d2410', '#091508']
    const cW = 11, cH = 16
    let letters = [], cols = 0, rows = 0

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      cols = Math.ceil(canvas.width  / cW)
      rows = Math.ceil(canvas.height / cH)
      letters = Array.from({ length: cols * rows }, () => ({
        char: chars[Math.floor(Math.random() * chars.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.55 + 0.05,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${cH}px monospace`
      ctx.textBaseline = 'top'
      const n = Math.max(1, Math.floor(letters.length * 0.025))
      for (let i = 0; i < n; i++) {
        const idx = Math.floor(Math.random() * letters.length)
        if (letters[idx]) {
          letters[idx].char    = chars[Math.floor(Math.random() * chars.length)]
          letters[idx].color   = colors[Math.floor(Math.random() * colors.length)]
          letters[idx].opacity = Math.random() * 0.55 + 0.05
        }
      }
      letters.forEach((l, i) => {
        ctx.globalAlpha = l.opacity
        ctx.fillStyle   = l.color
        ctx.fillText(l.char, (i % cols) * cW, Math.floor(i / cols) * cH)
      })
      ctx.globalAlpha = 1
    }

    resize()
    window.addEventListener('resize', resize)
    const id = setInterval(draw, 55)
    return () => { clearInterval(id); window.removeEventListener('resize', resize) }
  }, [])
}

/* ── Animated page wrapper ── */
function PageWrapper({ children }) {
  const location = useLocation()
  return (
    <div key={location.pathname} className="page-enter" style={{ height: '100%' }}>
      {children}
    </div>
  )
}

/* ── Layout (sidebar + topbar + content) ── */
function Layout({ children, pageLabel, parentLabel }) {
  const [collapsed,    setCollapsed]    = useState(false)
  const [expandedItem, setExpandedItem] = useState(null)
  const navigate  = useNavigate()
  const location  = useLocation()
  useGlitchCanvas()

  const isActive = (item) => {
    if (location.pathname === item.path) return true
    if (item.subs) return item.subs.some(s => location.pathname === s.path)
    return false
  }

  const handleNavClick = (item) => {
    if (item.subs && !collapsed) {
      setExpandedItem(prev => prev === item.path ? null : item.path)
      navigate(item.path)
    } else {
      navigate(item.path)
      setExpandedItem(null)
    }
  }

  // Auto-expand active parent on mount
  useEffect(() => {
    const active = navItems.find(n => n.subs?.some(s => location.pathname === s.path))
    if (active) setExpandedItem(active.path)
  }, [location.pathname])

  return (
    <div className="layout">
      <canvas id="bg-canvas" />
      <div className="bg-grid" />
      <div className="bg-vignette" />
      <div className="bg-scanlines" />

      {/* ── SIDEBAR ── */}
      <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <img src={logo} alt="GullyStat" className="sidebar-logo" />
          {!collapsed && <span className="sidebar-title">GULLYSTAT</span>}
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item, idx) => {
            const active   = isActive(item)
            const expanded = expandedItem === item.path && !collapsed
            return (
              <div key={item.path} className="nav-group"
                style={{ animationDelay: `${idx * 0.06}s` }}>
                <button
                  className={`nav-item ${active ? 'active' : ''}`}
                  onClick={() => handleNavClick(item)}
                  title={collapsed ? item.label : ''}
                >
                  <span className="nav-icon">{item.icon}</span>
                  {!collapsed && (
                    <>
                      <span className="nav-label">{item.label}</span>
                      {item.subs && (
                        <span className={`nav-chevron ${expanded ? 'open' : ''}`}>›</span>
                      )}
                    </>
                  )}
                </button>

                {/* Expanded sub-items */}
                {item.subs && !collapsed && (
                  <div className={`nav-subs ${expanded ? 'open' : ''}`}>
                    {item.subs.map(sub => (
                      <button
                        key={sub.path}
                        className={`nav-sub-item ${location.pathname === sub.path ? 'active' : ''}`}
                        onClick={() => navigate(sub.path)}
                      >
                        <span className="nav-sub-icon">{sub.icon}</span>
                        <span className="nav-sub-label">{sub.label}</span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Collapsed mini sub icons */}
                {item.subs && collapsed && (
                  <div className="nav-collapsed-subs">
                    {item.subs.map(sub => (
                      <button
                        key={sub.path}
                        className={`nav-collapsed-sub ${location.pathname === sub.path ? 'active' : ''}`}
                        onClick={() => navigate(sub.path)}
                        title={sub.label}
                      >
                        {sub.icon}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        <div className="sidebar-footer">
          <button className="collapse-btn" onClick={() => {
            setCollapsed(c => !c)
            if (!collapsed) setExpandedItem(null)
          }}>
            {collapsed ? '▶' : '◀ Collapse'}
          </button>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <div className="main">
        <header className="topbar">
          <div className="topbar-left">
            <div className="topbar-breadcrumb">
              <span className="topbar-crumb-root">GullyStat</span>
              {parentLabel && parentLabel !== pageLabel && (
                <>
                  <span className="topbar-crumb-sep">›</span>
                  <span className="topbar-crumb-root">{parentLabel}</span>
                </>
              )}
              <span className="topbar-crumb-sep">›</span>
              <span className="topbar-page">{pageLabel}</span>
            </div>
          </div>
          <div className="topbar-right">
            <div className="live-pill"><span className="live-dot" />Live</div>
            <button className="topbar-btn topbar-btn-badge">🔔</button>
            <div className="topbar-avatar" onClick={() => navigate('/ghost-profile')}>👤</div>
          </div>
        </header>

        <main className="content">
          <PageWrapper>{children}</PageWrapper>
        </main>
      </div>
    </div>
  )
}

/* ── Route config — maps each path to label+parent ── */
const routeMeta = {
  '/dashboard':    { label: 'Home',        parent: null },
  '/start-match':  { label: 'New Match',   parent: 'Match' },
  '/live-scorer':  { label: 'Live Scorer', parent: 'Match' },
  '/scorecard':    { label: 'Scorecard',   parent: 'Match' },
  '/leaderboard':  { label: 'Compete',     parent: null },
  '/challenges':   { label: 'Challenges',  parent: 'Compete' },
  '/head-to-head': { label: 'Head to Head',parent: 'Compete' },
  '/tournaments':  { label: 'Tournaments', parent: 'Compete' },
  '/ghost-profile':{ label: 'Profile',     parent: null },
  '/badges':       { label: 'Badges',      parent: 'Profile' },
  '/player/me':    { label: 'Stats',       parent: null },
}

function AppLayout({ page, children }) {
  const location = useLocation()
  const meta = routeMeta[location.pathname] || { label: page, parent: null }
  return (
    <Layout pageLabel={meta.label} parentLabel={meta.parent}>
      {children}
    </Layout>
  )
}

export default function App() {
  return (
    <BrowserRouter basename="/gullystat">
      <ClickEffect />
      <Routes>
        <Route path="/"        element={<Landing />} />
        <Route path="/login"   element={<Login />} />

        <Route path="/dashboard"      element={<AppLayout><Dashboard /></AppLayout>} />
        <Route path="/start-match"    element={<AppLayout><StartMatch /></AppLayout>} />
        <Route path="/live-scorer"    element={<AppLayout><LiveScorer /></AppLayout>} />
        <Route path="/scorecard/:id"  element={<AppLayout><Scorecard /></AppLayout>} />
        <Route path="/scorecard"      element={<AppLayout><Scorecard /></AppLayout>} />
        <Route path="/player/:id"     element={<AppLayout><PlayerProfile /></AppLayout>} />
        <Route path="/player/me"      element={<AppLayout><PlayerProfile /></AppLayout>} />
        <Route path="/leaderboard"    element={<AppLayout><Leaderboard /></AppLayout>} />
        <Route path="/challenges"     element={<AppLayout><Challenges /></AppLayout>} />
        <Route path="/badges"         element={<AppLayout><Badges /></AppLayout>} />
        <Route path="/head-to-head"   element={<AppLayout><HeadToHead /></AppLayout>} />
        <Route path="/tournaments"    element={<AppLayout><Tournaments /></AppLayout>} />
        <Route path="/ghost-profile"  element={<AppLayout><GhostProfile /></AppLayout>} />
      </Routes>
    </BrowserRouter>
  )
}