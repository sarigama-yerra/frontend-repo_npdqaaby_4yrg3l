import { motion } from 'framer-motion'

export default function NeonLedgerGraphic() {
  return (
    <div className="relative h-full w-full">
      {/* Background glow */}
      <div className="absolute -inset-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(500px_circle_at_30%_30%,rgba(16,185,129,0.25),transparent)]"/>
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_80%_20%,rgba(34,197,94,0.20),transparent)]"/>
      </div>

      <svg viewBox="0 0 1200 800" className="h-full w-full">
        <title>BVL Neon Ledger Graphic</title>
        <desc>Animated neon network forming a secure ledger with a shield and blocks linked by lines.</desc>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="emerald" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a7f3d0" stopOpacity="1" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Grid backdrop */}
        <g opacity="0.25">
          {Array.from({ length: 16 }).map((_, i) => (
            <line key={`v-${i}`} x1={50 + i * 70} y1={40} x2={50 + i * 70} y2={760} stroke="url(#emerald)" strokeOpacity="0.08" />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`h-${i}`} x1={50} y1={60 + i * 70} x2={1150} y2={60 + i * 70} stroke="url(#emerald)" strokeOpacity="0.08" />
          ))}
        </g>

        {/* Animated linking paths */}
        {[
          'M250 520 C 420 480, 480 360, 620 340 S 920 300, 960 220',
          'M240 380 C 420 420, 540 460, 700 420 S 980 380, 1000 300',
          'M260 600 C 420 560, 520 520, 720 540 S 980 520, 1080 440'
        ].map((d, idx) => (
          <motion.path
            key={idx}
            d={d}
            stroke="url(#emerald)"
            strokeWidth="2"
            strokeOpacity="0.5"
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.4 + idx * 0.4, ease: 'easeInOut' }}
          />
        ))}

        {/* Ledger blocks */}
        {[
          { x: 240, y: 360 },
          { x: 460, y: 420 },
          { x: 680, y: 380 },
          { x: 900, y: 300 }
        ].map((b, i) => (
          <g key={i}>
            <motion.rect
              x={b.x - 40}
              y={b.y - 28}
              width="80"
              height="56"
              rx="12"
              fill="#0b1324"
              stroke="url(#emerald)"
              strokeOpacity="0.5"
              filter="url(#glow)"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
            />
            <motion.rect
              x={b.x - 36}
              y={b.y - 24}
              width="72"
              height="12"
              rx="6"
              fill="url(#emerald)"
              opacity="0.2"
              initial={{ width: 0 }}
              animate={{ width: 72 }}
              transition={{ delay: 0.5 + i * 0.12, duration: 0.8 }}
            />
            {[0, 1, 2].map((r) => (
              <motion.rect
                key={r}
                x={b.x - 36}
                y={b.y - 6 + r * 10}
                width="56"
                height="6"
                rx="3"
                fill="#1f2937"
                stroke="#10b981"
                strokeOpacity="0.15"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 + i * 0.12 + r * 0.08, duration: 0.4 }}
              />
            ))}
          </g>
        ))}

        {/* Pulsing verification nodes */}
        {[
          { cx: 320, cy: 600 },
          { cx: 520, cy: 320 },
          { cx: 760, cy: 540 },
          { cx: 1040, cy: 440 }
        ].map((n, i) => (
          <g key={i}>
            <circle cx={n.cx} cy={n.cy} r="14" fill="url(#emerald)" opacity="0.25" />
            <motion.circle
              cx={n.cx}
              cy={n.cy}
              r="10"
              fill="#10b981"
              filter="url(#glow)"
              animate={{ r: [9, 12, 9], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.2, delay: i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.circle
              cx={n.cx}
              cy={n.cy}
              r="24"
              fill="url(#nodeGlow)"
              opacity="0.7"
              animate={{ r: [22, 26, 22], opacity: [0.6, 0.85, 0.6] }}
              transition={{ duration: 2.6, delay: i * 0.25, repeat: Infinity, ease: 'easeInOut' }}
            />
          </g>
        ))}

        {/* Central rotating shield */}
        <g transform="translate(600 400)">
          <motion.g
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.circle r="120" fill="#0b1324" stroke="url(#emerald)" strokeOpacity="0.3" filter="url(#glow)" />
            <motion.circle r="150" fill="none" stroke="url(#emerald)" strokeOpacity="0.15" strokeDasharray="8 10" animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: 'linear' }} />
            <motion.path
              d="M0 -85 L60 -35 L60 40 C60 60 40 80 0 95 C-40 80 -60 60 -60 40 L-60 -35 Z"
              fill="url(#emerald)"
              opacity="0.2"
            />
            <motion.path
              d="M0 -75 L50 -30 L50 35 C50 50 35 65 0 80 C-35 65 -50 50 -50 35 L-50 -30 Z"
              fill="#0f172a"
              stroke="url(#emerald)"
              strokeWidth="2"
              filter="url(#glow)"
            />
            {/* Checkmark */}
            <motion.path
              d="M-18 10 l18 18 l36 -36"
              fill="none"
              stroke="#34d399"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, delay: 0.8 }}
            />
          </motion.g>
        </g>
      </svg>

      {/* Decorative floating particles */}
      {[...Array(14)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-[2px] w-[2px] rounded-full bg-emerald-300/70"
          style={{ left: `${10 + (i * 6)}%`, top: `${20 + ((i * 7) % 60)}%` }}
          animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3 + (i % 4), repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 }}
        />
      ))}
    </div>
  )
}
