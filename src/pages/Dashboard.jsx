import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'

const stats = [
  { icon: '🏏', label: 'Matches',  value: '47',   sub: '+3 this week',  color: '#39ff14' },
  { icon: '📊', label: 'Avg',      value: '38.2',  sub: '↑ 4.1 pts',    color: '#f0c840' },
  { icon: '⚡', label: 'Strike Rate',value: '142',  sub: 'T20 format',   color: '#60c8f0' },
  { icon: '🎯', label: 'Wickets',  value: '23',   sub: 'Econ 6.8',      color: '#a78bfa' },
]

const recentMatches = [
  { id: 1, teams: ['Street Kings', 'Mohalla XI'],  score: ['148/6', '142/9'], overs: '20', result: 'W', date: 'Today',       format: 'Overum' },
  { id: 2, teams: ['Gully Boys',   'Night Owls'],  score: ['98/4',  '99/2'],  overs: '10', result: 'L', date: 'Yesterday',   format: 'Hundrum' },
  { id: 3, teams: ['Elite XI',     'Street Kings'],score: ['210/3', '187/8'], overs: '20', result: 'W', date: '3 days ago',  format: 'Overum' },
]

const leaderboard = [
  { rank: 1, name: 'Virat G.',  avg: 62.4, emoji: '🥇' },
  { rank: 2, name: 'Rohit S.',  avg: 58.1, emoji: '🥈' },
  { rank: 3, name: 'You',       avg: 38.2, emoji: '⭐', you: true },
  { rank: 4, name: 'Hardik P.', avg: 34.7, emoji: '▪️' },
]

export default function Dashboard() {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)

  useEffect(() => { setTimeout(() => setVisible(true), 50) }, [])

  return (
    <div className={`dash ${visible ? 'visible' : ''}`}>

      {/* ── Welcome banner ── */}
      <div className="dash-welcome">
        <div className="dash-welcome-left">
          <div className="dash-tag">⚡ MATCH READY</div>
          <h1 className="dash-heading">
            Welcome back,<br />
            <span className="dash-name">Gully Legend</span>
          </h1>
          <p className="dash-sub">Your next match is waiting. Track it live, own the stats.</p>
          <div className="dash-actions">
            <button className="dash-btn-primary" onClick={() => navigate('/start-match')}>
              🏏 Start New Match
            </button>
            <button className="dash-btn-ghost" onClick={() => navigate('/live-scorer')}>
              📡 Live Scorer
            </button>
          </div>
        </div>
        <div className="dash-welcome-right">
          <div className="dash-cricket-ball">
            <div className="ball-inner">🏏</div>
          </div>
        </div>
      </div>

      {/* ── Stats row ── */}
      <div className="dash-stats">
        {stats.map((s, i) => (
          <div key={i} className="stat-card" style={{ '--sc': s.color, animationDelay: `${0.05 + i * 0.08}s` }}>
            <div className="stat-icon">{s.icon}</div>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
            <div className="stat-sub">{s.sub}</div>
            <div className="stat-bar">
              <div className="stat-bar-fill" style={{ width: `${60 + i * 10}%`, background: s.color }} />
            </div>
          </div>
        ))}
      </div>

      {/* ── Two columns: recent matches + leaderboard ── */}
      <div className="dash-cols">

        {/* Recent matches */}
        <div className="dash-panel" style={{ animationDelay: '0.25s' }}>
          <div className="panel-header">
            <span className="panel-title">Recent Matches</span>
            <button className="panel-link" onClick={() => navigate('/scorecard')}>View all →</button>
          </div>
          <div className="match-list">
            {recentMatches.map((m, i) => (
              <div key={m.id} className="match-row" style={{ animationDelay: `${0.3 + i * 0.07}s` }}>
                <div className={`match-result ${m.result === 'W' ? 'win' : 'loss'}`}>{m.result}</div>
                <div className="match-info">
                  <div className="match-teams">{m.teams[0]} <span>vs</span> {m.teams[1]}</div>
                  <div className="match-meta">{m.format} · {m.overs} overs · {m.date}</div>
                </div>
                <div className="match-scores">
                  <span className="match-score-a">{m.score[0]}</span>
                  <span className="match-score-sep">:</span>
                  <span className="match-score-b">{m.score[1]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard mini */}
        <div className="dash-panel" style={{ animationDelay: '0.3s' }}>
          <div className="panel-header">
            <span className="panel-title">🏆 Leaderboard</span>
            <button className="panel-link" onClick={() => navigate('/leaderboard')}>Full board →</button>
          </div>
          <div className="lb-list">
            {leaderboard.map((p, i) => (
              <div key={i} className={`lb-row ${p.you ? 'lb-you' : ''}`} style={{ animationDelay: `${0.35 + i * 0.06}s` }}>
                <span className="lb-rank">{p.emoji}</span>
                <span className="lb-name">{p.name}{p.you && <span className="lb-you-tag"> YOU</span>}</span>
                <span className="lb-avg">{p.avg}</span>
                <div className="lb-bar-wrap">
                  <div className="lb-bar" style={{ width: `${(p.avg / 70) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Quick nav cards ── */}
      <div className="dash-quick">
        {[
          { icon: '⚡', label: 'Challenges',   path: '/challenges',   color: '#f0c840' },
          { icon: '⚔️', label: 'Head to Head',  path: '/head-to-head', color: '#f87171' },
          { icon: '🥇', label: 'Tournaments',   path: '/tournaments',  color: '#60c8f0' },
          { icon: '👻', label: 'Ghost Profile', path: '/ghost-profile',color: '#a78bfa' },
          { icon: '🎖️', label: 'My Badges',    path: '/badges',       color: '#34d399' },
          { icon: '📊', label: 'My Stats',      path: '/player/me',    color: '#39ff14' },
        ].map((q, i) => (
          <button key={i} className="quick-card"
            style={{ '--qc': q.color, animationDelay: `${0.4 + i * 0.05}s` }}
            onClick={() => navigate(q.path)}>
            <span className="quick-icon">{q.icon}</span>
            <span className="quick-label">{q.label}</span>
            <span className="quick-arrow">→</span>
          </button>
        ))}
      </div>

    </div>
  )
}