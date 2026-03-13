import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import * as THREE from 'three'
import logo from '../assets/logo.png'
import './Login.css'

/* ════════════════════════════════════════════════════════
   THREE.JS SCENE — Cricket Pitch + Floating Particles
   
   What's in the scene:
   1. Dark green ground plane (cricket outfield)
   2. Pitch rectangle in center (lighter brown/tan)
   3. Crease lines (white lines at each end of pitch)
   4. Boundary circle (white ring)
   5. 80 floating cricket ball spheres — red with seam line
      orbiting at different heights/speeds/angles
   6. Ambient + directional lighting with gold tint
   7. Camera slowly orbits the scene (auto-rotate)
   8. Mouse move → subtle camera parallax
════════════════════════════════════════════════════════ */
function useThreeScene(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // ── Renderer ──
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 0.85

    // ── Scene ──
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#07110a')
    scene.fog = new THREE.FogExp2('#07110a', 0.035)

    // ── Camera ──
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 200)
    camera.position.set(0, 18, 28)
    camera.lookAt(0, 0, 0)

    // ── Lights ──
    const ambient = new THREE.AmbientLight('#1a3a1a', 2.2)
    scene.add(ambient)

    const sun = new THREE.DirectionalLight('#f0c840', 2.8)
    sun.position.set(10, 20, 15)
    sun.castShadow = true
    sun.shadow.camera.near = 0.5
    sun.shadow.camera.far = 80
    sun.shadow.camera.left = -25
    sun.shadow.camera.right = 25
    sun.shadow.camera.top = 25
    sun.shadow.camera.bottom = -25
    sun.shadow.mapSize.set(1024, 1024)
    scene.add(sun)

    const rimLight = new THREE.DirectionalLight('#60c8f0', 0.9)
    rimLight.position.set(-15, 8, -10)
    scene.add(rimLight)

    const fillLight = new THREE.PointLight('#0a4020', 3.0, 40)
    fillLight.position.set(0, 5, 0)
    scene.add(fillLight)

    // ── Ground — outfield ──
    const groundGeo = new THREE.CircleGeometry(22, 72)
    const groundMat = new THREE.MeshLambertMaterial({ color: '#0a2210' })
    const ground = new THREE.Mesh(groundGeo, groundMat)
    ground.rotation.x = -Math.PI / 2
    ground.receiveShadow = true
    scene.add(ground)

    // Outer dark ring (beyond boundary)
    const outerGeo = new THREE.RingGeometry(22, 32, 72)
    const outerMat = new THREE.MeshLambertMaterial({ color: '#071009', side: THREE.DoubleSide })
    const outer = new THREE.Mesh(outerGeo, outerMat)
    outer.rotation.x = -Math.PI / 2
    outer.position.y = -0.01
    scene.add(outer)

    // Mowing stripes (alternating lighter/darker bands)
    for (let i = 0; i < 10; i++) {
      const stripeGeo = new THREE.PlaneGeometry(44, 2.0)
      const stripeMat = new THREE.MeshLambertMaterial({
        color: i % 2 === 0 ? '#0c2814' : '#091f10',
        transparent: true, opacity: 0.6
      })
      const stripe = new THREE.Mesh(stripeGeo, stripeMat)
      stripe.rotation.x = -Math.PI / 2
      stripe.position.set(0, 0.005, -9 + i * 2.0)
      scene.add(stripe)
    }

    // ── Pitch rectangle ──
    const pitchGeo = new THREE.PlaneGeometry(3.0, 20)
    const pitchMat = new THREE.MeshLambertMaterial({ color: '#c8a060' })
    const pitch = new THREE.Mesh(pitchGeo, pitchMat)
    pitch.rotation.x = -Math.PI / 2
    pitch.position.y = 0.01
    pitch.receiveShadow = true
    scene.add(pitch)

    // ── Crease lines ──
    const creaseMat = new THREE.MeshBasicMaterial({ color: '#ffffff' })
    const makeCrease = (z) => {
      const geo = new THREE.PlaneGeometry(3.8, 0.06)
      const m = new THREE.Mesh(geo, creaseMat)
      m.rotation.x = -Math.PI / 2
      m.position.set(0, 0.02, z)
      scene.add(m)
    }
    makeCrease(-9)   // bowling crease far
    makeCrease(-7.3) // popping crease far
    makeCrease( 9)   // bowling crease near
    makeCrease( 7.3) // popping crease near

    // Return crease (side lines of crease)
    const returnCreaseMat = new THREE.MeshBasicMaterial({ color: '#ffffff' })
    const makeReturnCrease = (z, side) => {
      const geo = new THREE.PlaneGeometry(0.06, 1.2)
      const m = new THREE.Mesh(geo, returnCreaseMat)
      m.rotation.x = -Math.PI / 2
      m.position.set(side * 1.9, 0.02, z - 0.6)
      scene.add(m)
    }
    makeReturnCrease(-9,  1); makeReturnCrease(-9, -1)
    makeReturnCrease( 9,  1); makeReturnCrease( 9, -1)

    // ── Stumps (3 at each end) ──
    const stumpMat  = new THREE.MeshLambertMaterial({ color: '#f0e8c8' })
    const bailMat   = new THREE.MeshLambertMaterial({ color: '#f0e8c8' })
    const makeStumps = (z) => {
      for (let i = -1; i <= 1; i++) {
        const geo = new THREE.CylinderGeometry(0.04, 0.04, 0.72, 8)
        const s = new THREE.Mesh(geo, stumpMat)
        s.position.set(i * 0.115, 0.36, z)
        s.castShadow = true
        scene.add(s)
      }
      // Bail between stumps
      const bailGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.22, 6)
      const b1 = new THREE.Mesh(bailGeo, bailMat)
      b1.rotation.z = Math.PI / 2
      b1.position.set(-0.057, 0.73, z)
      scene.add(b1)
      const b2 = b1.clone()
      b2.position.set(0.057, 0.73, z)
      scene.add(b2)
    }
    makeStumps(-8.5)
    makeStumps( 8.5)

    // ── Boundary circle ──
    const boundaryPoints = []
    const boundaryR = 20
    for (let i = 0; i <= 128; i++) {
      const a = (i / 128) * Math.PI * 2
      boundaryPoints.push(new THREE.Vector3(Math.cos(a) * boundaryR, 0.015, Math.sin(a) * boundaryR))
    }
    const boundaryGeo = new THREE.BufferGeometry().setFromPoints(boundaryPoints)
    const boundaryMat = new THREE.LineBasicMaterial({ color: '#ffffff', opacity: 0.55, transparent: true })
    const boundary = new THREE.Line(boundaryGeo, boundaryMat)
    scene.add(boundary)

    // ── Floating Cricket Balls ──
    // Red sphere with a dark seam strip
    const BALL_COUNT = 70
    const balls = []

    for (let i = 0; i < BALL_COUNT; i++) {
      // Each ball gets random orbit params
      const orbitR     = 4  + Math.random() * 18     // orbit radius
      const orbitSpeed = 0.12 + Math.random() * 0.22 // rad/s
      const orbitTilt  = (Math.random() - 0.5) * 1.4 // tilt of orbit plane
      const orbitPhase = Math.random() * Math.PI * 2  // start angle
      const height     = 1.5 + Math.random() * 12     // base height
      const bobAmp     = 0.4 + Math.random() * 0.8    // bob amplitude
      const bobSpeed   = 0.5 + Math.random() * 1.0    // bob speed
      const bobPhase   = Math.random() * Math.PI * 2
      const size       = 0.08 + Math.random() * 0.16  // ball size

      // Ball sphere (red leather)
      const ballGeo = new THREE.SphereGeometry(size, 12, 8)
      const ballMat = new THREE.MeshLambertMaterial({
        color: new THREE.Color().setHSL(0.02, 0.85, 0.32 + Math.random() * 0.08)
      })
      const ball = new THREE.Mesh(ballGeo, ballMat)
      ball.castShadow = true

      // Seam ring (darker equatorial band)
      const seamGeo = new THREE.TorusGeometry(size * 1.01, size * 0.08, 4, 24)
      const seamMat = new THREE.MeshBasicMaterial({ color: '#1a0808' })
      const seam = new THREE.Mesh(seamGeo, seamMat)
      seam.rotation.x = Math.PI / 2
      ball.add(seam)

      // Random seam tilt for variety
      ball.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      )

      scene.add(ball)
      balls.push({ mesh: ball, orbitR, orbitSpeed, orbitTilt, orbitPhase, height, bobAmp, bobSpeed, bobPhase, spinSpeed: (Math.random() - 0.5) * 2 })
    }

    // ── Mouse parallax ──
    const mouse = { x: 0, y: 0 }
    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth  - 0.5) * 2
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)

    // ── Resize ──
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    // ── Animation loop ──
    let frame = 0
    let animId
    const tick = () => {
      animId = requestAnimationFrame(tick)
      frame += 0.008

      // Orbit camera slowly
      const camR = 28
      camera.position.x = Math.sin(frame * 0.18) * camR * 0.35 + mouse.x * 2.5
      camera.position.z = 26 + Math.cos(frame * 0.12) * 3
      camera.position.y = 16 + Math.sin(frame * 0.08) * 2 - mouse.y * 1.8
      camera.lookAt(0, 2, 0)

      // Animate each ball
      balls.forEach((b, i) => {
        const t = frame * b.orbitSpeed + b.orbitPhase
        const x = Math.cos(t) * b.orbitR
        const z = Math.sin(t) * b.orbitR * Math.cos(b.orbitTilt)
        const y = b.height + Math.sin(t * b.bobSpeed + b.bobPhase) * b.bobAmp + Math.sin(b.orbitTilt) * Math.sin(t) * b.orbitR * 0.3
        b.mesh.position.set(x, y, z)
        b.mesh.rotation.x += b.spinSpeed * 0.02
        b.mesh.rotation.y += b.spinSpeed * 0.015
      })

      // Pulse fill light
      fillLight.intensity = 2.8 + Math.sin(frame * 1.2) * 0.4

      renderer.render(scene, camera)
    }
    tick()

    // ── Cleanup ──
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
    }
  }, [])
}

export default function Login() {
  const navigate    = useNavigate()
  const canvasRef   = useRef(null)
  const [mode,      setMode]     = useState('login')
  const [email,     setEmail]    = useState('')
  const [password,  setPassword] = useState('')
  const [name,      setName]     = useState('')
  const [showPass,  setShowPass] = useState(false)
  const [loading,   setLoading]  = useState(false)

  // Start Three.js scene
  useThreeScene(canvasRef)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate('/dashboard')
    }, 1500)
  }

  return (
    <>
      {/* ── Three.js canvas fills the background ── */}
      <canvas ref={canvasRef} className="lg-canvas" />

      {/* ── Back to home ── */}
      <div className="lg-page">
        <button className="lg-back" onClick={() => navigate('/')}>← Home</button>

        {/* ── Glass card ── */}
        <div className="lg-card">

          {/* Brand */}
          <div className="lg-brand" onClick={() => navigate('/')}>
            <img src={logo} alt="GullyStat" className="lg-brand-logo" />
            <span className="lg-brand-name">GullyStat</span>
          </div>

          {/* Login / Sign up tab switcher */}
          <div className="lg-tabs">
            <button className={`lg-tab ${mode === 'login'  ? 'active' : ''}`} onClick={() => setMode('login')}>Login</button>
            <button className={`lg-tab ${mode === 'signup' ? 'active' : ''}`} onClick={() => setMode('signup')}>Sign Up</button>
          </div>

          <h1 className="lg-title">
            {mode === 'login' ? 'Welcome back' : 'Join the mohalla'}
          </h1>
          <p className="lg-subtitle">
            {mode === 'login'
              ? 'Log in to track your gully legacy'
              : 'Create your account and start scoring'}
          </p>

          {/* Google */}
          <button className="lg-google">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
              <path d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 6.294C4.672 4.167 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          <div className="lg-divider"><span>or continue with email</span></div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg-form">

            {mode === 'signup' && (
              <div className="lg-field">
                <label className="lg-label">Full name</label>
                <div className="lg-input-wrap">
                  <input className="lg-input" type="text" placeholder="Rohit Sharma"
                    value={name} onChange={e => setName(e.target.value)} required />
                </div>
              </div>
            )}

            <div className="lg-field">
              <label className="lg-label">Email</label>
              <div className="lg-input-wrap">
                <input className="lg-input" type="email" placeholder="you@example.com"
                  value={email} onChange={e => setEmail(e.target.value)} required />
              </div>
            </div>

            <div className="lg-field">
              <label className="lg-label">
                <span>Password</span>
                {mode === 'login' && (
                  <button type="button" className="lg-forgot">Forgot password?</button>
                )}
              </label>
              <div className="lg-input-wrap">
                <input
                  className={`lg-input lg-input-has-eye`}
                  type={showPass ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
                <button type="button" className="lg-eye" onClick={() => setShowPass(p => !p)}>
                  {showPass ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            <button type="submit" className="lg-submit" disabled={loading}>
              {loading
                ? <span className="lg-spinner" />
                : mode === 'login' ? '🏏 Login to GullyStat' : '🚀 Create Account'}
            </button>

          </form>

          <p className="lg-switch">
            {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
            <button className="lg-switch-btn"
              onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}>
              {mode === 'login' ? 'Sign up free' : 'Log in'}
            </button>
          </p>

        </div>
      </div>
    </>
  )
}