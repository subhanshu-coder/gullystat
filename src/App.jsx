import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
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
import Login from './components/Login'
import './App.css'

const navItems = [
  { path: '/dashboard',     icon: '🏠', label: 'Dashboard'    },
  { path: '/start-match',   icon: '🏏', label: 'New Match'    },
  { path: '/leaderboard',   icon: '🏆', label: 'Leaderboard'  },
  { path: '/challenges',    icon: '⚡', label: 'Challenges'   },
  { path: '/badges',        icon: '🎖️', label: 'Badges'       },
  { path: '/head-to-head',  icon: '⚔️', label: 'Head to Head' },
  { path: '/tournaments',   icon: '🥇', label: 'Tournaments'  },
  { path: '/ghost-profile', icon: '👻', label: 'Ghost Profile'},
]

function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false)
  const navigate  = useNavigate()
  const location  = useLocation()
  const pageLabel = navItems.find(n => n.path === location.pathname)?.label || 'GullyStat'

  return (
    <div className="layout">
      <canvas id="bg-canvas" />
      <div className="bg-vignette" />
      <div className="bg-scanlines" />

      <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <img src={logo} alt="GullyStat" className="sidebar-logo" />
          {!collapsed && <span className="sidebar-title">GULLYSTAT</span>}
        </div>
        <nav className="sidebar-nav">
          {navItems.map(item => (
            <button
              key={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => navigate(item.path)}
            >
              <span className="nav-icon">{item.icon}</span>
              {!collapsed && <span className="nav-label">{item.label}</span>}
            </button>
          ))}
        </nav>
        <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? '▶' : '◀'}
        </button>
      </aside>

      <div className="main">
        <header className="topbar">
          <span className="topbar-page">{pageLabel}</span>
          <div className="topbar-right">
            <div className="live-pill"><span className="live-dot" />Live</div>
            <button className="topbar-btn">🔔</button>
            <button className="topbar-btn">👤</button>
          </div>
        </header>
        <main className="content">{children}</main>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter basename="/gullystat">
      <ClickEffect />
      <Routes>
        {/* ── Single scroll landing page (Hero + Features + Formats + CTA) ── */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        {/* ── App pages with sidebar ── */}
        <Route path="/dashboard"      element={<Layout><Dashboard /></Layout>} />
        <Route path="/start-match"    element={<Layout><StartMatch /></Layout>} />
        <Route path="/live-scorer"    element={<Layout><LiveScorer /></Layout>} />
        <Route path="/scorecard/:id"  element={<Layout><Scorecard /></Layout>} />
        <Route path="/player/:id"     element={<Layout><PlayerProfile /></Layout>} />
        <Route path="/leaderboard"    element={<Layout><Leaderboard /></Layout>} />
        <Route path="/challenges"     element={<Layout><Challenges /></Layout>} />
        <Route path="/badges"         element={<Layout><Badges /></Layout>} />
        <Route path="/head-to-head"   element={<Layout><HeadToHead /></Layout>} />
        <Route path="/tournaments"    element={<Layout><Tournaments /></Layout>} />
        <Route path="/ghost-profile"  element={<Layout><GhostProfile /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}