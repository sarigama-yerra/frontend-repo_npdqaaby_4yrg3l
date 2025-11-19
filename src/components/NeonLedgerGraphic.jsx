import { motion } from 'framer-motion'

// A richer, staged fintech/cybersecurity scene:
// 1) Document is issued (lines type in)
// 2) A neon stamp drops and seals it (pulse + ring)
// 3) A QR code is scanned (sweep beam) and verification completes
// 4) Hash ticker + blockchain links give cryptographic vibe

export default function NeonLedgerGraphic() {
  const emerald = '#10b981'

  return (
    <div className="relative h-full w-full">
      {/* Backdrop glows */}
      <div className="absolute -inset-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_15%_25%,rgba(16,185,129,0.25),transparent)]"/>
        <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_85%_25%,rgba(34,197,94,0.18),transparent)]"/>
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(16,185,129,0.06),transparent,rgba(16,185,129,0.06))]"/>
      </div>

      <svg viewBox="0 0 1200 800" className="h-full w-full">
        <title>BVL Issuance → Seal → QR Verification</title>
        <desc>Animated fintech/cybersecurity scene showing document issuance, stamping, QR verification, and cryptographic hash/blockchain motifs.</desc>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feMerge>
              <feMergeNode in="b"/>
              <feMergeNode in="SourceGraphic"/>
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
          <linearGradient id="scan" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0" />
            <stop offset="40%" stopColor="#34d399" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#34d399" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
          </linearGradient>
          <pattern id="qr" width="10" height="10" patternUnits="userSpaceOnUse">
            <rect width="10" height="10" fill="#0b1324" />
            <rect x="0" y="0" width="4" height="4" fill="#0f172a" />
            <rect x="6" y="0" width="4" height="4" fill="#0f172a" />
            <rect x="0" y="6" width="4" height="4" fill="#0f172a" />
            <rect x="6" y="6" width="4" height="4" fill="#0f172a" />
            <rect x="3" y="3" width="4" height="4" fill="#111827" />
          </pattern>
          <clipPath id="docClip">
            <rect x="140" y="180" width="280" height="360" rx="18" />
          </clipPath>
        </defs>

        {/* Subtle cyber grid */}
        <g opacity="0.18">
          {Array.from({ length: 18 }).map((_, i) => (
            <line key={`v-${i}`} x1={40 + i * 64} y1={40} x2={40 + i * 64} y2={760} stroke="url(#emerald)" strokeOpacity="0.08" />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={`h-${i}`} x1={40} y1={60 + i * 60} x2={1160} y2={60 + i * 60} stroke="url(#emerald)" strokeOpacity="0.08" />
          ))}
        </g>

        {/* Stage labels */}
        <g fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="14" fill="#9ca3af">
          <text x="160" y="160">Issue</text>
          <text x="510" y="160">Seal</text>
          <text x="860" y="160">Verify</text>
        </g>

        {/* 1) Document issuance card */}
        <g filter="url(#glow)">
          <motion.rect
            x="140" y="180" rx="18" width="280" height="360"
            fill="#0b1324" stroke="url(#emerald)" strokeOpacity="0.35"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          />
          <g clipPath="url(#docClip)">
            {[0,1,2,3,4,5,6,7,8].map((r) => (
              <motion.rect key={r}
                x={160} y={210 + r * 34} rx="6" height="12"
                width="0"
                fill={r === 0 ? 'url(#emerald)' : '#1f2937'}
                stroke={r === 0 ? emerald : '#10b981'}
                strokeOpacity={r === 0 ? 0.25 : 0.12}
                animate={{ width: 240 }} transition={{ delay: 0.25 + r * 0.08, duration: 0.6 }}
              />
            ))}
          </g>

          {/* Header badge */}
          <motion.rect x="160" y="190" width="100" height="14" rx="7" fill="url(#emerald)" opacity="0.25"
            initial={{ width: 0 }} animate={{ width: 100 }} transition={{ delay: 0.2, duration: 0.5 }}
          />
        </g>

        {/* Connector to stage 2 */}
        <motion.path d="M420 360 C 460 360, 500 360, 540 360" fill="none" stroke="url(#emerald)" strokeOpacity="0.45" strokeWidth="2"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.8 }} />

        {/* 2) Neon stamp + seal */}
        <g transform="translate(540 220)">
          {/* Base panel */}
          <motion.rect x="0" y="40" width="280" height="240" rx="16" fill="#0b1324" stroke="url(#emerald)" strokeOpacity="0.3"
            filter="url(#glow)" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} />

          {/* Stamp drops */}
          <motion.g initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.0, type: 'spring', stiffness: 140, damping: 10 }}>
            <motion.circle cx="140" cy="120" r="58" fill="#0f172a" stroke="url(#emerald)" strokeWidth="2" />
            <motion.circle cx="140" cy="120" r="80" fill="none" stroke="url(#emerald)" strokeOpacity="0.25" strokeDasharray="8 10"
              animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }} />
            {/* Seal pulse */}
            <motion.circle cx="140" cy="120" r="58" fill="url(#nodeGlow)" opacity="0.85"
              animate={{ r: [56, 64, 56], opacity: [0.6, 0.85, 0.6] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }} />
            {/* Stamp label */}
            <motion.text x="140" y="124" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontSize="16" fill="#a7f3d0"
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ delay: 1.2, type: 'spring', stiffness: 160, damping: 12 }}>
              SEALED
            </motion.text>
            {/* Checkmark */}
            <motion.path d="M120 120 l14 14 l28 -28" fill="none" stroke="#34d399" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
              filter="url(#glow)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.1, duration: 0.9 }} />
          </motion.g>

          {/* Micro text lines under seal */}
          {[0,1,2,3].map((i) => (
            <motion.rect key={i} x={30} y={200 + i * 18} width="220" height="8" rx="4" fill="#111827" stroke={emerald} strokeOpacity="0.12"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 + i * 0.08, duration: 0.4 }} />
          ))}
        </g>

        {/* Connector to stage 3 */}
        <motion.path d="M820 360 C 860 360, 900 360, 940 360" fill="none" stroke="url(#emerald)" strokeOpacity="0.45" strokeWidth="2"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 1.2 }} />

        {/* 3) QR verification */}
        <g transform="translate(860 220)">
          <motion.rect x="40" y="60" width="240" height="240" rx="16" fill="#0b1324" stroke="url(#emerald)" strokeOpacity="0.3" filter="url(#glow)"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} />
          {/* QR pattern */}
          <rect x="76" y="96" width="168" height="168" fill="url(#qr)" stroke="url(#emerald)" strokeOpacity="0.25" />
          {/* Finder squares */}
          {[
            { x: 76, y: 96 }, { x: 76, y: 232 }, { x: 212, y: 96 }
          ].map((f, i) => (
            <g key={i}>
              <rect x={f.x} y={f.y} width="36" height="36" fill="none" stroke={emerald} strokeWidth="3" />
              <rect x={f.x + 8} y={f.y + 8} width="20" height="20" fill={emerald} opacity="0.2" />
            </g>
          ))}

          {/* Scanning beam */}
          <motion.rect x="76" y="96" width="168" height="24" fill="url(#scan)"
            animate={{ y: [96, 240, 96] }} transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }} />

          {/* Verified badge */}
          <motion.g initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.0, duration: 0.5 }}>
            <rect x="120" y="40" width="120" height="28" rx="14" fill="#052e26" stroke={emerald} strokeOpacity="0.5" />
            <text x="180" y="60" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontSize="14" fill="#a7f3d0">VERIFIED</text>
          </motion.g>
        </g>

        {/* Hash ticker */}
        <g transform="translate(80 620)" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="14" fill="#a7f3d0">
          <text opacity="0.6">SHA-256:</text>
          <motion.text x="100" y="0"
            animate={{ x: ['0%', '-50%'] }} transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}>
            3f786850e387550fdab836ed7e6dc881de23001b c1f0a5b7e3e3b6c6d9a9f1a0b0c0d0e0f1a2b3c4 d47c6e0f9a1b2c3d4e5f60718293a4b5c6d7e8f9 9e107d9d372bb6826bd81d3542a419d6
          </motion.text>
        </g>

        {/* Blockchain chain links along the bottom */}
        <g transform="translate(120 700)" filter="url(#glow)">
          {Array.from({ length: 10 }).map((_, i) => (
            <g key={i} transform={`translate(${i * 100} 0)`}>
              <motion.rect x="0" y="-20" width="80" height="40" rx="10" fill="#0b1324" stroke="url(#emerald)" strokeOpacity="0.35"
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }} />
              <motion.line x1="80" y1="0" x2="100" y2="0" stroke="url(#emerald)" strokeWidth="2" strokeDasharray="6 10"
                animate={{ strokeDashoffset: [0, -16] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }} />
            </g>
          ))}
        </g>

        {/* Floating verification nodes */}
        {[
          { cx: 320, cy: 520 }, { cx: 540, cy: 300 }, { cx: 760, cy: 520 }, { cx: 1040, cy: 420 }
        ].map((n, i) => (
          <g key={i}>
            <circle cx={n.cx} cy={n.cy} r="12" fill="url(#emerald)" opacity="0.25" />
            <motion.circle cx={n.cx} cy={n.cy} r="10" fill={emerald} filter="url(#glow)"
              animate={{ r: [9, 12, 9], opacity: [0.7, 1, 0.7] }} transition={{ duration: 2.2, delay: i * 0.2, repeat: Infinity, ease: 'easeInOut' }} />
            <motion.circle cx={n.cx} cy={n.cy} r="24" fill="url(#nodeGlow)" opacity="0.7"
              animate={{ r: [22, 26, 22], opacity: [0.6, 0.85, 0.6] }} transition={{ duration: 2.6, delay: i * 0.25, repeat: Infinity, ease: 'easeInOut' }} />
          </g>
        ))}
      </svg>

      {/* Ambient particles */}
      {[...Array(18)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-[2px] w-[2px] rounded-full bg-emerald-300/70"
          style={{ left: `${8 + (i * 5.2)}%`, top: `${16 + ((i * 7) % 68)}%` }}
          animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3 + (i % 4), repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 }}
        />
      ))}
    </div>
  )
}
