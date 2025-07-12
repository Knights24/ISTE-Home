"use client"

export default function ModernTechBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1920 1080"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f0f23" />
            <stop offset="30%" stopColor="#1e1b4b" />
            <stop offset="70%" stopColor="#312e81" />
            <stop offset="100%" stopColor="#1e1b4b" />
          </linearGradient>

          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>

          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#6366f1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </radialGradient>

          {/* Filters */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background */}
        <rect width="100%" height="100%" fill="url(#bgGradient)" />

        {/* Abstract Waveforms */}
        <g opacity="0.6">
          <path
            d="M0,300 Q480,200 960,300 T1920,300 L1920,400 Q1440,350 960,400 T0,400 Z"
            fill="url(#waveGradient1)"
            filter="url(#softGlow)"
          />
          <path
            d="M0,500 Q320,400 640,500 T1280,500 T1920,500 L1920,600 Q1600,550 1280,600 T640,600 T0,600 Z"
            fill="url(#waveGradient2)"
            filter="url(#softGlow)"
          />
        </g>

        {/* Circuit Patterns */}
        <g opacity="0.4" stroke="url(#circuitGradient)" strokeWidth="2" fill="none" filter="url(#glow)">
          {/* Horizontal lines */}
          <line x1="100" y1="150" x2="400" y2="150" />
          <line x1="500" y1="200" x2="800" y2="200" />
          <line x1="1200" y1="180" x2="1500" y2="180" />
          <line x1="200" y1="700" x2="600" y2="700" />
          <line x1="1000" y1="750" x2="1400" y2="750" />

          {/* Vertical lines */}
          <line x1="300" y1="100" x2="300" y2="250" />
          <line x1="700" y1="150" x2="700" y2="300" />
          <line x1="1300" y1="120" x2="1300" y2="280" />
          <line x1="400" y1="650" x2="400" y2="800" />
          <line x1="1200" y1="680" x2="1200" y2="820" />

          {/* Corner connections */}
          <path d="M300,150 L320,150 Q330,150 330,160 L330,180" />
          <path d="M700,200 L720,200 Q730,200 730,210 L730,230" />
          <path d="M1300,180 L1320,180 Q1330,180 1330,190 L1330,210" />
        </g>

        {/* Digital Nodes */}
        <g opacity="0.8">
          <circle cx="300" cy="150" r="8" fill="url(#nodeGlow)" filter="url(#glow)" />
          <circle cx="700" cy="200" r="6" fill="url(#nodeGlow)" filter="url(#glow)" />
          <circle cx="1300" cy="180" r="7" fill="url(#nodeGlow)" filter="url(#glow)" />
          <circle cx="400" cy="700" r="5" fill="url(#nodeGlow)" filter="url(#glow)" />
          <circle cx="1200" cy="750" r="6" fill="url(#nodeGlow)" filter="url(#glow)" />

          {/* Smaller nodes */}
          <circle cx="150" cy="300" r="3" fill="#60a5fa" opacity="0.6" />
          <circle cx="850" cy="350" r="4" fill="#a78bfa" opacity="0.7" />
          <circle cx="1500" cy="280" r="3" fill="#06b6d4" opacity="0.6" />
          <circle cx="600" cy="800" r="4" fill="#8b5cf6" opacity="0.7" />
        </g>

        {/* Curved Connection Lines */}
        <g opacity="0.3" stroke="#60a5fa" strokeWidth="1" fill="none" filter="url(#softGlow)">
          <path d="M150,300 Q400,250 700,200" />
          <path d="M700,200 Q1000,150 1300,180" />
          <path d="M300,150 Q500,400 850,350" />
          <path d="M400,700 Q800,600 1200,750" />
        </g>

        {/* Floating UI Windows */}
        <g opacity="0.2">
          {/* Window 1 */}
          <rect x="100" y="400" width="200" height="120" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1" />
          <rect x="100" y="400" width="200" height="24" rx="8" fill="#334155" />
          <circle cx="115" cy="412" r="3" fill="#ef4444" />
          <circle cx="130" cy="412" r="3" fill="#f59e0b" />
          <circle cx="145" cy="412" r="3" fill="#10b981" />

          {/* Window 2 */}
          <rect x="1500" y="600" width="180" height="100" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1" />
          <rect x="1500" y="600" width="180" height="20" rx="8" fill="#334155" />

          {/* Window 3 */}
          <rect x="800" y="100" width="160" height="80" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
        </g>

        {/* Tech Icons */}
        <g opacity="0.4" fill="#60a5fa">
          {/* AI Brain Icon */}
          <g transform="translate(1600,200)">
            <circle cx="0" cy="0" r="20" fill="none" stroke="#60a5fa" strokeWidth="2" />
            <path d="M-10,-5 Q0,-15 10,-5 Q0,5 -10,-5" fill="#60a5fa" opacity="0.6" />
            <circle cx="-6" cy="-2" r="2" fill="#60a5fa" />
            <circle cx="6" cy="-2" r="2" fill="#60a5fa" />
          </g>

          {/* Cloud Icon */}
          <g transform="translate(200,600)">
            <path
              d="M-15,0 Q-15,-10 -5,-10 Q0,-15 10,-10 Q20,-10 20,0 Q15,5 5,5 L-10,5 Q-15,5 -15,0"
              fill="#a78bfa"
              opacity="0.6"
            />
          </g>

          {/* Server Icon */}
          <g transform="translate(1400,400)">
            <rect x="-12" y="-8" width="24" height="16" rx="2" fill="none" stroke="#06b6d4" strokeWidth="2" />
            <line x1="-8" y1="-4" x2="8" y2="-4" stroke="#06b6d4" strokeWidth="1" />
            <line x1="-8" y1="0" x2="8" y2="0" stroke="#06b6d4" strokeWidth="1" />
            <line x1="-8" y1="4" x2="8" y2="4" stroke="#06b6d4" strokeWidth="1" />
          </g>

          {/* Code Lines */}
          <g transform="translate(500,500)" opacity="0.5">
            <text x="0" y="0" fontSize="12" fill="#8b5cf6" fontFamily="monospace">
              {"<code>"}
            </text>
            <text x="0" y="15" fontSize="10" fill="#60a5fa" fontFamily="monospace">
              {"function() {"}
            </text>
            <text x="0" y="30" fontSize="10" fill="#a78bfa" fontFamily="monospace">
              {"  return ai;"}
            </text>
            <text x="0" y="45" fontSize="10" fill="#60a5fa" fontFamily="monospace">
              {"}"}
            </text>
          </g>
        </g>

        {/* Particle Effects */}
        <g opacity="0.6">
          {Array.from({ length: 20 }, (_, i) => (
            <circle
              key={i}
              cx={100 + i * 90}
              cy={50 + Math.sin(i) * 30}
              r="1"
              fill="#60a5fa"
              opacity={0.3 + Math.random() * 0.4}
            />
          ))}
        </g>

        {/* Subtle Grid Pattern */}
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#334155" strokeWidth="0.5" opacity="0.1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}
