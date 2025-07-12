"use client"

export default function IsometricAIBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 800"
        className="w-full h-full object-cover opacity-30"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradients for depth and glow effects - adjusted for dark theme */}
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a0a0a" />
            <stop offset="50%" stopColor="#0f0f0f" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>

          <linearGradient id="laptopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>

          <linearGradient id="serverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#064e3b" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>

          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#581c87" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>

          {/* Enhanced glow filters for dark theme */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Dark background */}
        <rect width="100%" height="100%" fill="url(#bgGradient)" />

        {/* Floating geometric shapes for depth - enhanced for dark theme */}
        <g opacity="0.3">
          <polygon points="100,150 150,120 200,150 150,180" fill="#3b82f6" filter="url(#glow)" />
          <polygon points="900,100 950,70 1000,100 950,130" fill="#10b981" filter="url(#glow)" />
          <polygon points="1050,300 1100,270 1150,300 1100,330" fill="#a855f7" filter="url(#glow)" />
          <polygon points="50,500 100,470 150,500 100,530" fill="#06b6d4" filter="url(#glow)" />
        </g>

        {/* Student 1 - Working on laptop (left side) */}
        <g transform="translate(200,300)" filter="url(#softBlur)">
          {/* Desk */}
          <polygon points="0,80 80,60 160,80 160,100 80,120 0,100" fill="#374151" stroke="#4b5563" strokeWidth="1" />

          {/* Laptop */}
          <g fill="url(#laptopGradient)" filter="url(#glow)">
            <polygon points="20,70 70,60 120,70 120,75 70,85 20,75" />
            <polygon points="70,60 70,40 120,50 120,70 70,85 70,65" />
          </g>

          {/* Person */}
          <g>
            {/* Head */}
            <circle cx="40" cy="45" r="8" fill="#fbbf24" />
            {/* Hair */}
            <path d="M32,40 Q40,35 48,40 Q45,38 40,38 Q35,38 32,40" fill="#1f2937" />
            {/* Body */}
            <polygon points="35,53 45,53 48,75 32,75" fill="#3b82f6" />
            {/* Arms */}
            <polygon points="32,58 28,65 30,67 36,60" fill="#fbbf24" />
            <polygon points="48,58 52,65 50,67 44,60" fill="#fbbf24" />
          </g>
        </g>

        {/* Student 2 - Working on laptop (center) */}
        <g transform="translate(500,250)" filter="url(#softBlur)">
          {/* Desk */}
          <polygon points="0,80 80,60 160,80 160,100 80,120 0,100" fill="#374151" stroke="#4b5563" strokeWidth="1" />

          {/* Laptop */}
          <g fill="url(#laptopGradient)" filter="url(#glow)">
            <polygon points="30,70 80,60 130,70 130,75 80,85 30,75" />
            <polygon points="80,60 80,40 130,50 130,70 80,85 80,65" />
          </g>

          {/* Person */}
          <g>
            {/* Head */}
            <circle cx="50" cy="45" r="8" fill="#d97706" />
            {/* Hair */}
            <path d="M42,38 Q50,33 58,38 Q55,36 50,36 Q45,36 42,38" fill="#1f2937" />
            {/* Body */}
            <polygon points="45,53 55,53 58,75 42,75" fill="#10b981" />
            {/* Arms */}
            <polygon points="42,58 38,65 40,67 46,60" fill="#d97706" />
            <polygon points="58,58 62,65 60,67 54,60" fill="#d97706" />
          </g>
        </g>

        {/* Student 3 - Working on laptop (right side) */}
        <g transform="translate(800,320)" filter="url(#softBlur)">
          {/* Desk */}
          <polygon points="0,80 80,60 160,80 160,100 80,120 0,100" fill="#374151" stroke="#4b5563" strokeWidth="1" />

          {/* Laptop */}
          <g fill="url(#laptopGradient)" filter="url(#glow)">
            <polygon points="25,70 75,60 125,70 125,75 75,85 25,75" />
            <polygon points="75,60 75,40 125,50 125,70 75,85 75,65" />
          </g>

          {/* Person */}
          <g>
            {/* Head */}
            <circle cx="45" cy="45" r="8" fill="#f59e0b" />
            {/* Hair */}
            <path d="M37,40 Q45,35 53,40 Q50,38 45,38 Q40,38 37,40" fill="#7c2d12" />
            {/* Body */}
            <polygon points="40,53 50,53 53,75 37,75" fill="#a855f7" />
            {/* Arms */}
            <polygon points="37,58 33,65 35,67 41,60" fill="#f59e0b" />
            <polygon points="53,58 57,65 55,67 49,60" fill="#f59e0b" />
          </g>
        </g>

        {/* Neural Network Visualization - enhanced */}
        <g transform="translate(150,100)" opacity="0.8" filter="url(#strongGlow)">
          {/* Nodes */}
          <circle cx="0" cy="0" r="5" fill="#a855f7" />
          <circle cx="50" cy="-20" r="5" fill="#a855f7" />
          <circle cx="50" cy="20" r="5" fill="#a855f7" />
          <circle cx="100" cy="-30" r="5" fill="#a855f7" />
          <circle cx="100" cy="0" r="5" fill="#a855f7" />
          <circle cx="100" cy="30" r="5" fill="#a855f7" />
          <circle cx="150" cy="0" r="5" fill="#a855f7" />

          {/* Connections */}
          <g stroke="#c084fc" strokeWidth="2" opacity="0.7">
            <line x1="0" y1="0" x2="50" y2="-20" />
            <line x1="0" y1="0" x2="50" y2="20" />
            <line x1="50" y1="-20" x2="100" y2="-30" />
            <line x1="50" y1="-20" x2="100" y2="0" />
            <line x1="50" y1="20" x2="100" y2="0" />
            <line x1="50" y1="20" x2="100" y2="30" />
            <line x1="100" y1="-30" x2="150" y2="0" />
            <line x1="100" y1="0" x2="150" y2="0" />
            <line x1="100" y1="30" x2="150" y2="0" />
          </g>
        </g>

        {/* Cloud Servers - enhanced */}
        <g transform="translate(900,150)" filter="url(#strongGlow)">
          {/* Server rack */}
          <g fill="url(#serverGradient)">
            <polygon points="0,0 40,0 60,20 60,80 20,80 0,60" />
            <polygon points="40,0 80,0 80,60 60,80 60,20" />
            <polygon points="0,60 20,80 60,80 40,60" />
          </g>

          {/* Server details */}
          <g fill="#22c55e" opacity="0.9">
            <rect x="5" y="10" width="30" height="3" />
            <rect x="5" y="20" width="30" height="3" />
            <rect x="5" y="30" width="30" height="3" />
            <rect x="5" y="40" width="30" height="3" />
          </g>

          {/* Cloud */}
          <g transform="translate(-20,-30)" fill="#10b981" opacity="0.9">
            <circle cx="20" cy="10" r="8" />
            <circle cx="35" cy="10" r="10" />
            <circle cx="50" cy="10" r="8" />
            <circle cx="27" cy="0" r="6" />
            <circle cx="42" cy="0" r="6" />
          </g>
        </g>

        {/* Robotic Arm - enhanced */}
        <g transform="translate(300,500)" filter="url(#softBlur)">
          {/* Base */}
          <polygon points="0,40 30,30 60,40 60,50 30,60 0,50" fill="#64748b" />

          {/* Arm segments */}
          <g stroke="#94a3b8" strokeWidth="4" fill="none" filter="url(#glow)">
            <line x1="30" y1="40" x2="50" y2="20" />
            <line x1="50" y1="20" x2="80" y2="10" />
            <line x1="80" y1="10" x2="100" y2="15" />
          </g>

          {/* Joints */}
          <circle cx="30" cy="40" r="4" fill="#94a3b8" filter="url(#glow)" />
          <circle cx="50" cy="20" r="4" fill="#94a3b8" filter="url(#glow)" />
          <circle cx="80" cy="10" r="4" fill="#94a3b8" filter="url(#glow)" />

          {/* End effector */}
          <g transform="translate(100,15)" filter="url(#glow)">
            <polygon points="0,0 8,3 8,8 0,5" fill="#94a3b8" />
            <polygon points="0,5 8,8 5,12 -3,9" fill="#94a3b8" />
          </g>
        </g>

        {/* Data Charts - enhanced */}
        <g transform="translate(700,450)" opacity="0.9" filter="url(#strongGlow)">
          {/* Chart background */}
          <rect x="0" y="0" width="80" height="60" fill="#1f2937" stroke="#374151" strokeWidth="1" />

          {/* Bar chart */}
          <g fill="#3b82f6">
            <rect x="10" y="40" width="8" height="15" />
            <rect x="22" y="30" width="8" height="25" />
            <rect x="34" y="35" width="8" height="20" />
            <rect x="46" y="25" width="8" height="30" />
            <rect x="58" y="20" width="8" height="35" />
          </g>

          {/* Line chart overlay */}
          <polyline points="14,45 26,35 38,40 50,30 62,25" stroke="#f59e0b" strokeWidth="3" fill="none" />
          <g fill="#f59e0b">
            <circle cx="14" cy="45" r="3" />
            <circle cx="26" cy="35" r="3" />
            <circle cx="38" cy="40" r="3" />
            <circle cx="50" cy="30" r="3" />
            <circle cx="62" cy="25" r="3" />
          </g>
        </g>

        {/* Additional AI Elements - Floating Data Points - enhanced */}
        <g opacity="0.6" filter="url(#glow)">
          <g transform="translate(400,150)">
            <circle cx="0" cy="0" r="3" fill="#3b82f6" />
            <circle cx="20" cy="10" r="2.5" fill="#10b981" />
            <circle cx="40" cy="-5" r="3" fill="#a855f7" />
            <circle cx="60" cy="15" r="2" fill="#f59e0b" />
            <line x1="0" y1="0" x2="20" y2="10" stroke="#3b82f6" strokeWidth="1" />
            <line x1="20" y1="10" x2="40" y2="-5" stroke="#10b981" strokeWidth="1" />
            <line x1="40" y1="-5" x2="60" y2="15" stroke="#a855f7" strokeWidth="1" />
          </g>

          <g transform="translate(600,350)">
            <circle cx="0" cy="0" r="2.5" fill="#10b981" />
            <circle cx="-15" cy="8" r="3" fill="#a855f7" />
            <circle cx="15" cy="-8" r="2" fill="#3b82f6" />
            <line x1="0" y1="0" x2="-15" y2="8" stroke="#10b981" strokeWidth="1" />
            <line x1="0" y1="0" x2="15" y2="-8" stroke="#a855f7" strokeWidth="1" />
          </g>
        </g>

        {/* Subtle geometric patterns for texture */}
        <g opacity="0.1">
          <pattern id="dots" patternUnits="userSpaceOnUse" width="50" height="50">
            <circle cx="25" cy="25" r="1" fill="#64748b" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </g>
      </svg>
    </div>
  )
}
