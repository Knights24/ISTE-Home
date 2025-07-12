"use client"

import { useEffect, useState, useRef } from "react"

export default function FuturisticHeroBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [clickEffects, setClickEffects] = useState<Array<{ id: number; x: number; y: number; timestamp: number }>>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const clickIdRef = useRef(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height
        setMousePosition({ x: x * 100, y: y * 100 })
      }
    }

    const handleClick = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const newEffect = {
          id: clickIdRef.current++,
          x,
          y,
          timestamp: Date.now(),
        }

        setClickEffects((prev) => [...prev, newEffect])

        // Remove effect after animation completes
        setTimeout(() => {
          setClickEffects((prev) => prev.filter((effect) => effect.id !== newEffect.id))
        }, 2000)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      container.addEventListener("click", handleClick)
      return () => {
        container.removeEventListener("mousemove", handleMouseMove)
        container.removeEventListener("click", handleClick)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950"
    >
      {/* Click Effects */}
      {clickEffects.map((effect) => (
        <div
          key={effect.id}
          className="absolute pointer-events-none"
          style={{
            left: effect.x,
            top: effect.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Central pulse */}
          <div className="absolute w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-75" />

          {/* Directional particles */}
          {Array.from({ length: 8 }, (_, i) => {
            const angle = (i * 45 * Math.PI) / 180
            const distance = 60
            const x = Math.cos(angle) * distance
            const y = Math.sin(angle) * distance

            return (
              <div
                key={i}
                className="absolute w-2 h-2 bg-indigo-400 rounded-full"
                style={
                  {
                    animation: `clickParticle-${i} 2s ease-out forwards`,
                    "--end-x": `${x}px`,
                    "--end-y": `${y}px`,
                  } as any
                }
              />
            )
          })}

          {/* Expanding ring */}
          <div
            className="absolute w-8 h-8 border-2 border-blue-400 rounded-full animate-ping"
            style={{ animationDuration: "1.5s" }}
          />
        </div>
      ))}

      {/* Enhanced Background Particles with static positioning */}
      <div className="absolute inset-0">
        {Array.from(
          { length: 100 },
          (
            _,
            i, // Increased particle count
          ) => (
            <div
              key={i}
              className="absolute bg-slate-400/20 rounded-full animate-pulse"
              style={{
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                transform: `translate3d(${mousePosition.x * (0.06 + i * 0.0005)}px, ${mousePosition.y * (0.06 + i * 0.0005)}px, 0)`, // Slightly increased movement
                transition: "transform 0.3s ease-out",
              }}
            />
          ),
        )}
      </div>

      {/* Main SVG Container with static positioning */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1920 1080"
        className="absolute inset-0"
        style={{
          transform: `translate3d(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px, 0)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <defs>
          {/* Enhanced Gradients */}
          <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="hologramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.6" />
          </linearGradient>

          <linearGradient id="droneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#64748b" />
            <stop offset="50%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>

          <radialGradient id="energyCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="1" />
            <stop offset="30%" stopColor="#6366f1" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </radialGradient>

          {/* New gradients for AI glyphs */}
          <linearGradient id="aiGlyphGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.5" />
          </linearGradient>
          <radialGradient id="aiNodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </radialGradient>

          {/* Enhanced Filters */}
          <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="hologramEffect" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="0 0 1 0 0  0 1 1 0 0  1 0 1 0 0  0 0 0 1 0" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="glitchEffect">
            <feTurbulence type="fractalNoise" baseFrequency="0.01 0.05" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>

        {/* Floating AI Glyphs (replacing generic geometric shapes) */}
        <g opacity="0.4" filter="url(#softGlow)">
          {Array.from({ length: 40 }, (_, i) => {
            const x = Math.random() * 1920
            const y = Math.random() * 1080
            const size = 10 + Math.random() * 30
            const type = Math.random() // 0-1 for different shapes

            if (type < 0.4) {
              // Rectangular circuit elements
              return (
                <rect
                  key={i}
                  x={x}
                  y={y}
                  width={size}
                  height={size / 2}
                  rx={2}
                  fill="url(#aiGlyphGradient)"
                  stroke="#6366f1"
                  strokeWidth="0.5"
                  opacity={0.3 + Math.random() * 0.4}
                  style={{
                    transform: `translate3d(${mousePosition.x * (0.015 + i * 0.001)}px, ${mousePosition.y * (0.015 + i * 0.001)}px, 0) rotateZ(${i * 24}deg)`,
                    transition: "transform 0.4s ease-out",
                  }}
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from={`0 ${x} ${y}`}
                    to={`360 ${x} ${y}`}
                    dur={`${5 + Math.random() * 10}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.3;0.7;0.3"
                    dur={`${3 + Math.random() * 2}s`}
                    repeatCount="indefinite"
                  />
                </rect>
              )
            } else if (type < 0.8) {
              // Circular data nodes
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r={size / 4}
                  fill="url(#aiNodeGlow)"
                  opacity={0.4 + Math.random() * 0.5}
                  style={{
                    transform: `translate3d(${mousePosition.x * (0.015 + i * 0.001)}px, ${mousePosition.y * (0.015 + i * 0.001)}px, 0)`,
                    transition: "transform 0.4s ease-out",
                  }}
                >
                  <animate
                    attributeName="r"
                    values={`${size / 4};${size / 3};${size / 4}`}
                    dur={`${2 + Math.random() * 3}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.4;0.8;0.4"
                    dur={`${2 + Math.random() * 3}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              )
            } else {
              // Simple lines for connections
              const x2 = x + (Math.random() - 0.5) * 50
              const y2 = y + (Math.random() - 0.5) * 50
              return (
                <line
                  key={i}
                  x1={x}
                  y1={y}
                  x2={x2}
                  y2={y2}
                  stroke="#06b6d4"
                  strokeWidth="1"
                  opacity={0.2 + Math.random() * 0.3}
                  style={{
                    transform: `translate3d(${mousePosition.x * (0.015 + i * 0.001)}px, ${mousePosition.y * (0.015 + i * 0.001)}px, 0)`,
                    transition: "transform 0.4s ease-out",
                  }}
                >
                  <animate
                    attributeName="opacity"
                    values="0.2;0.6;0.2"
                    dur={`${4 + Math.random() * 3}s`}
                    repeatCount="indefinite"
                  />
                </line>
              )
            }
          })}
        </g>

        {/* Enhanced AI Brain with static positioning */}
        <g
          transform="translate(1400,200)"
          style={{
            transform: `translate(1400px, 200px) translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          {/* Pulsing Energy Core */}
          <circle cx="0" cy="0" r="100" fill="url(#energyCore)" opacity="0.8">
            <animate attributeName="r" values="80;120;80" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
          </circle>

          {/* Enhanced Brain Structure */}
          <g fill="url(#brainGradient)" filter="url(#strongGlow)">
            <path d="M-50,-40 Q-60,-60 -25,-65 Q0,-70 25,-65 Q60,-60 50,-40 Q55,-15 40,0 Q50,25 25,35 Q0,40 -25,35 Q-50,25 -45,0 Q-55,-15 -50,-40" />
            <path d="M-35,-25 Q-15,-30 15,-25 Q35,-20 30,0 Q25,20 0,15 Q-25,20 -30,0 Q-35,-20 -35,-25" opacity="0.8" />
          </g>

          {/* Enhanced Neural Network */}
          <g opacity="0.9" stroke="#a855f7" strokeWidth="2" fill="none" filter="url(#strongGlow)">
            {Array.from({ length: 20 }, (_, i) => {
              // Increased connections
              const angle = (i * 18 * Math.PI) / 180 // More dense
              const radius = 40 + Math.sin(Date.now() * 0.002 + i) * 10
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius
              return (
                <g key={i}>
                  <circle cx={x} cy={y} r="3" fill="#a855f7">
                    <animate attributeName="r" values="2;4;2" dur="2s" begin={`${i * 0.1}s`} repeatCount="indefinite" />
                  </circle>
                  <line x1="0" y1="0" x2={x} y2={y} opacity="0.6">
                    <animate
                      attributeName="opacity"
                      values="0.3;0.8;0.3"
                      dur="2s"
                      begin={`${i * 0.1}s`}
                      repeatCount="indefinite"
                    />
                  </line>
                </g>
              )
            })}
          </g>
        </g>

        {/* Holographic Display */}
        <g
          transform="translate(800,300)"
          style={{
            transform: `translate(800px, 300px) translate3d(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px, 0)`,
            transition: "transform 0.35s ease-out",
          }}
        >
          {/* Hologram Base */}
          <ellipse cx="0" cy="80" rx="40" ry="8" fill="#3b82f6" opacity="0.6" filter="url(#strongGlow)" />

          {/* Holographic Projection */}
          <g filter="url(#hologramEffect)" opacity="0.8">
            <rect
              x="-30"
              y="0"
              width="60"
              height="80"
              rx="4"
              fill="none"
              stroke="url(#hologramGradient)"
              strokeWidth="1"
            />

            {/* Data Visualization */}
            <g stroke="#06b6d4" strokeWidth="1" fill="none">
              <path d="M-20,60 Q-10,40 0,50 Q10,30 20,45">
                <animate
                  attributeName="d"
                  values="M-20,60 Q-10,40 0,50 Q10,30 20,45;M-20,65 Q-10,35 0,55 Q10,25 20,40;M-20,60 Q-10,40 0,50 Q10,30 20,45"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </path>
              <circle cx="-15" cy="55" r="2" fill="#06b6d4">
                <animate attributeName="cy" values="55;50;55" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="0" cy="50" r="2" fill="#3b82f6">
                <animate attributeName="cy" values="50;45;50" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="15" cy="45" r="2" fill="#6366f1">
                <animate attributeName="cy" values="45;40;45" dur="3s" repeatCount="indefinite" />
              </circle>
            </g>

            {/* Holographic Text with glitch effect */}
            <g
              fontFamily="var(--font-fira-code), 'SF Mono', Monaco, 'Inconsolata', 'Roboto Mono', monospace"
              fontSize="8"
              fill="#06b6d4"
              opacity="0.7"
              filter="url(#glitchEffect)"
            >
              <text x="-25" y="20">
                NEURAL ANALYSIS
                <animate attributeName="opacity" values="1;0.8;1;0.9;1" dur="0.5s" repeatCount="indefinite" />
              </text>
              <text x="-25" y="30">
                STATUS: ACTIVE
                <animate attributeName="opacity" values="0.9;1;0.8;1;0.9" dur="0.7s" repeatCount="indefinite" />
              </text>
              <text x="-25" y="40">
                EFFICIENCY: 97.3%
                <animate attributeName="opacity" values="1;0.9;1;0.8;1" dur="0.6s" repeatCount="indefinite" />
              </text>
            </g>
          </g>
        </g>

        {/* Floating Drone */}
        <g
          transform="translate(600,150)"
          style={{
            transform: `translate(600px, 150px) translate3d(${mousePosition.x * 0.012 + Math.sin(Date.now() * 0.001) * 20}px, ${mousePosition.y * 0.012 + Math.cos(Date.now() * 0.001) * 15}px, 0) rotateZ(${Math.sin(Date.now() * 0.002) * 5}deg)`,
            transition: "transform 0.4s ease-out",
          }}
        >
          {/* Drone Body */}
          <ellipse cx="0" cy="0" rx="25" ry="15" fill="url(#droneGradient)" filter="url(#strongGlow)" />

          {/* Propellers */}
          <g stroke="#94a3b8" strokeWidth="2" fill="none">
            <circle cx="-20" cy="-10" r="8">
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 -20 -10;360 -20 -10"
                dur="0.1s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="20" cy="-10" r="8">
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 20 -10;360 20 -10"
                dur="0.1s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="-20" cy="10" r="8">
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 -20 10;360 -20 10"
                dur="0.1s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="20" cy="10" r="8">
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 20 10;360 20 10"
                dur="0.1s"
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* LED Lights */}
          <circle cx="0" cy="0" r="3" fill="#10b981" filter="url(#strongGlow)">
            <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
          </circle>
          {/* Vertical bobbing animation */}
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 0 10; 0 0"
            dur="4s"
            repeatCount="indefinite"
            additive="sum"
          />
        </g>

        {/* Enhanced Robotic Arm with static positioning */}
        <g
          transform="translate(300,600)"
          style={{
            transform: `translate(300px, 600px) translate3d(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px, 0)`,
            transition: "transform 0.35s ease-out",
          }}
        >
          {/* Enhanced Base with glow */}
          <ellipse cx="0" cy="40" rx="30" ry="10" fill="url(#droneGradient)" filter="url(#strongGlow)" />

          {/* Animated Arm Segments */}
          <g stroke="url(#droneGradient)" strokeWidth="10" strokeLinecap="round" fill="none" filter="url(#strongGlow)">
            <line x1="0" y1="40" x2="0" y2="0">
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 0 40;5 0 40;0 0 40"
                dur="4s"
                repeatCount="indefinite"
              />
            </line>
            <line x1="0" y1="0" x2="50" y2="-25">
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 0 0;10 0 0;0 0 0"
                dur="4s"
                repeatCount="indefinite"
              />
            </line>
            <line x1="50" y1="-25" x2="90" y2="-15">
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 50 -25;-10 50 -25;0 50 -25"
                dur="4s"
                repeatCount="indefinite"
              />
            </line>
          </g>

          {/* Enhanced Joints */}
          <circle cx="0" cy="40" r="8" fill="#cbd5e1" filter="url(#strongGlow)" />
          <circle cx="0" cy="0" r="6" fill="#cbd5e1" filter="url(#strongGlow)" />
          <circle cx="50" cy="-25" r="5" fill="#cbd5e1" filter="url(#strongGlow)" />

          {/* Advanced End Effector with open/close animation */}
          <g transform="translate(90,-15)">
            <rect x="-4" y="-10" width="8" height="20" rx="3" fill="#cbd5e1" filter="url(#strongGlow)" />
            <rect x="4" y="-8" width="12" height="6" rx="2" fill="#94a3b8">
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 10 -5;15 10 -5;0 10 -5"
                dur="2s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="4" y="2" width="12" height="6" rx="2" fill="#94a3b8">
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 10 5;-15 10 5;0 10 5"
                dur="2s"
                repeatCount="indefinite"
              />
            </rect>
            {/* Gripper open/close */}
            <rect x="16" y="-8" width="12" height="6" rx="2" fill="#94a3b8">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0 0; 5 0; 0 0"
                dur="2s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="16" y="2" width="12" height="6" rx="2" fill="#94a3b8">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0 0; 5 0; 0 0"
                dur="2s"
                repeatCount="indefinite"
              />
            </rect>
          </g>

          {/* Floating Microchips */}
          <g transform="translate(70,10)">
            <rect
              x="0"
              y="0"
              width="15"
              height="10"
              rx="2"
              fill="#475569"
              stroke="#6366f1"
              strokeWidth="1"
              filter="url(#strongGlow)"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0 0;0 -5;0 0"
                dur="2s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="3" y="3" width="9" height="4" rx="1" fill="#1e293b" />
            <circle cx="5" cy="5" r="1" fill="#6366f1">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite" />
            </circle>
            <circle cx="10" cy="5" r="1" fill="#6366f1">
              <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite" />
            </circle>
          </g>
        </g>

        {/* Enhanced Server Stack with static positioning */}
        <g
          transform="translate(200,150)"
          style={{
            transform: `translate(200px, 150px) translate3d(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px, 0)`,
            transition: "transform 0.4s ease-out",
          }}
        >
          {/* Server Glow - Adjusted size and opacity */}
          <ellipse cx="0" cy="50" rx="60" ry="80" fill="url(#energyCore)" opacity="0.3" />

          {/* Enhanced Server Rack with depth */}
          <g filter="url(#strongGlow)">
            {Array.from({ length: 5 }, (_, i) => (
              <g key={i} transform={`translate(0, ${i * 25})`}>
                <rect x="-35" y="0" width="70" height="20" rx="4" fill="url(#droneGradient)" />
                <rect x="-30" y="5" width="25" height="3" rx="1" fill="#6366f1" opacity="0.8">
                  <animate attributeName="width" values="25;35;25" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
                </rect>
                <rect x="-30" y="10" width="20" height="3" rx="1" fill="#3b82f6" opacity="0.6">
                  <animate attributeName="width" values="20;30;20" dur={`${2.5 + i * 0.5}s`} repeatCount="indefinite" />
                </rect>
                <circle cx="25" cy="10" r="3" fill="#10b981" filter="url(#strongGlow)">
                  <animate attributeName="opacity" values="1;0.3;1" dur={`${1 + i * 0.3}s`} repeatCount="indefinite" />
                </circle>
                {/* Data flow indicators */}
                <line x1="-20" y1="15" x2="20" y2="15" stroke="#06b6d4" strokeWidth="1" opacity="0.5">
                  <animate attributeName="x1" values="-20;20;-20" dur={`${1.5 + i * 0.4}s`} repeatCount="indefinite" />
                  <animate attributeName="x2" values="20;-20;20" dur={`${1.5 + i * 0.4}s`} repeatCount="indefinite" />
                </line>
              </g>
            ))}
          </g>

          {/* Enhanced Cloud Symbol */}
          <g transform="translate(0,-50)" fill="#8b5cf6" opacity="0.8" filter="url(#strongGlow)">
            <path d="M-25,0 Q-30,-15 -20,-18 Q-15,-25 0,-20 Q15,-25 20,-18 Q30,-15 25,0 Q20,8 8,8 L-20,8 Q-25,8 -25,0">
              <animate
                attributeName="d"
                values="M-25,0 Q-30,-15 -20,-18 Q-15,-25 0,-20 Q15,-25 20,-18 Q30,-15 25,0 Q20,8 8,8 L-20,8 Q-25,8 -25,0;M-25,0 Q-30,-12 -20,-15 Q-15,-22 0,-17 Q15,-22 20,-15 Q30,-12 25,0 Q20,5 8,5 L-20,5 Q-25,5 -25,0;M-25,0 Q-30,-15 -20,-18 Q-15,-25 0,-20 Q15,-25 20,-18 Q30,-15 25,0 Q20,8 8,8 L-20,8 Q-25,8 -25,0"
                dur="4s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>

        {/* Enhanced Code Window with static positioning */}
        <g
          transform="translate(1200,600)"
          style={{
            transform: `translate(1200px, 600px) translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0)`,
            transition: "transform 0.25s ease-out",
          }}
        >
          {/* Enhanced Window Background */}
          <rect
            x="0"
            y="0"
            width="300"
            height="220"
            rx="10"
            fill="#1e293b"
            stroke="#475569"
            strokeWidth="2"
            filter="url(#strongGlow)"
            opacity="0.95"
          />

          {/* Window Header */}
          <rect x="0" y="0" width="300" height="35" rx="10" fill="#334155" />
          <circle cx="18" cy="17" r="5" fill="#ef4444">
            <animate attributeName="opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="35" cy="17" r="5" fill="#f59e0b">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="52" cy="17" r="5" fill="#10b981">
            <animate attributeName="opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite" />
          </circle>

          {/* Enhanced Code Content with GitHub font and scrolling effect */}
          <g
            fontFamily="var(--font-fira-code), 'SF Mono', Monaco, 'Inconsolata', 'Roboto Mono', monospace"
            fontSize="11"
            fill="#e2e8f0"
          >
            {/* Simulate scrolling code by animating y position */}
            <g>
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0 0; 0 -100; 0 0"
                dur="15s"
                repeatCount="indefinite"
              />
              <text x="15" y="55" fill="#8b5cf6">
                const
              </text>
              <text x="55" y="55" fill="#e2e8f0">
                techClub = {"{"}
              </text>

              <text x="25" y="75" fill="#6366f1">
                name:
              </text>
              <text x="65" y="75" fill="#10b981">
                'FutureTech'
              </text>
              <text x="140" y="75" fill="#e2e8f0">
                ,
              </text>

              <text x="25" y="95" fill="#6366f1">
                members:
              </text>
              <text x="80" y="95" fill="#f59e0b">
                500
              </text>
              <text x="105" y="95" fill="#e2e8f0">
                ,
              </text>

              <text x="25" y="115" fill="#6366f1">
                status:
              </text>
              <text x="70" y="115" fill="#10b981">
                'active'
              </text>
              <text x="115" y="115" fill="#e2e8f0">
                ,
              </text>

              <text x="25" y="135" fill="#6366f1">
                projects:
              </text>
              <text x="85" y="135" fill="#e2e8f0">
                [
              </text>

              <text x="35" y="155" fill="#10b981">
                'AI-Research'
              </text>
              <text x="125" y="155" fill="#e2e8f0">
                ,
              </text>

              <text x="35" y="175" fill="#10b981">
                'Robotics'
              </text>
              <text x="105" y="175" fill="#e2e8f0">
                ,
              </text>

              <text x="35" y="195" fill="#10b981">
                'IoT-Solutions'
              </text>

              <text x="25" y="215" fill="#e2e8f0">
                ]
              </text>
              <text x="15" y="235" fill="#e2e8f0">
                {"}"}
              </text>
              <text x="15" y="255" fill="#8b5cf6">
                // More code lines for scrolling effect
              </text>
              <text x="25" y="275" fill="#6366f1">
                function initAI() {"{"}
              </text>
              <text x="35" y="295" fill="#e2e8f0">
                console.log('AI initialized');
              </text>
              <text x="25" y="315" fill="#e2e8f0">
                {"}"}
              </text>
            </g>
          </g>

          {/* Animated Cursor */}
          <rect x="95" y="225" width="10" height="15" fill="#6366f1" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.2s" repeatCount="indefinite" />
          </rect>

          {/* Code execution indicator */}
          <circle cx="270" cy="17" r="4" fill="#10b981" filter="url(#strongGlow)">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Enhanced Connection Network */}
        <g opacity="0.6" stroke="#6366f1" strokeWidth="1" fill="none" filter="url(#strongGlow)">
          <path d="M200,200 Q600,150 1000,300">
            <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="8s" repeatCount="indefinite" />
          </path>
          <path d="M1400,250 Q1200,400 800,350">
            <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="10s" repeatCount="indefinite" />
          </path>
          <path d="M300,650 Q800,500 1200,650">
            <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="12s" repeatCount="indefinite" />
          </path>
          {/* Additional connections */}
          <path d="M100,500 Q300,450 500,550">
            <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="9s" repeatCount="indefinite" />
          </path>
          <path d="M1700,100 Q1500,300 1300,400">
            <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="11s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Data Flow Particles */}
        <g>
          {Array.from(
            { length: 40 },
            (
              _,
              i, // Increased particle count
            ) => (
              <circle key={i} r="2" fill="#06b6d4" filter="url(#strongGlow)">
                <animateMotion dur={`${5 + i * 0.2}s`} repeatCount="indefinite">
                  <path d="M200,200 Q600,150 1000,300 Q1200,400 800,350 Q300,650 1200,650 Q100,500 500,550 Q1700,100 1300,400" />
                </animateMotion>
                <animate attributeName="opacity" values="0;1;0" dur={`${5 + i * 0.2}s`} repeatCount="indefinite" />
              </circle>
            ),
          )}
        </g>
      </svg>

      <style jsx>{`
        @keyframes clickParticle-0 {
          0% { transform: translate(0, 0); opacity: 1; }
          100% { transform: translate(var(--end-x), var(--end-y)); opacity: 0; }
        }
        @keyframes clickParticle-1 {
          0% { transform: translate(0, 0); opacity: 1; }
          100% { transform: translate(var(--end-x), var(--end-y)); opacity: 0; }
        }
        @keyframes clickParticle-2 {
          0% { transform: translate(0, 0); opacity: 1; }
          100% { transform: translate(var(--end-x), var(--end-y)); opacity: 0; }
        }
        @keyframes clickParticle-3 {
          0% { transform: translate(0, 0); opacity: 1; }
          100% { transform: translate(var(--end-x), var(--end-y)); opacity: 0; }
        }
        @keyframes clickParticle-4 {
          0% { transform: translate(0, 0); opacity: 1; }
          100% { transform: translate(var(--end-x), var(--end-y)); opacity: 0; }
        }
        @keyframes clickParticle-5 {
          0% { transform: translate(0, 0); opacity: 1; }
          100% { transform: translate(var(--end-x), var(--end-y)); opacity: 0; }
        }
        @keyframes clickParticle-6 {
          0% { transform: translate(0, 0); opacity: 1; }
          100% { transform: translate(var(--end-x), var(--end-y)); opacity: 0; }
        }
        @keyframes clickParticle-7 {
          0% { transform: translate(0, 0); opacity: 1; }
          100% { transform: translate(var(--end-x), var(--end-y)); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
