import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

// Fintech + cybersecurity visual narrative (high-energy, passive loop):
// ISSUE → SEAL → VERIFY with arrows, matrix-rain hashes, emerald + ice-blue accents.
// Enhancements: captions, live console ticker, subtle parallax on background only,
// clickable BVL PROTOCOL chip that scrolls to How It Works, brighter VERIFIED pulse.

export default function NeonLedgerGraphic() {
  const emerald = '#10b981'
  const ice = '#7dd3fc' // ice-blue accent
  const prefersReduced = useReducedMotion()

  // Parallax offsets (very subtle). Background layers read these.
  const [px, setPx] = useState(0)
  const [py, setPy] = useState(0)
  const parallax = (e) => {
    if (prefersReduced) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width // 0..1
    const y = (e.clientY - rect.top) / rect.height
    setPx((x - 0.5) * 8) // max ~4px offset either side
    setPy((y - 0.5) * 8)
  }

  // Helper: build a short stream of hex for matrix rain
  const hex = '0123456789abcdef'
  const makeStream = (len) => Array.from({ length: len }).map(() => hex[Math.floor(Math.random() * hex.length)])

  const scrollToHow = () => {
    const el = document.querySelector('#how')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="relative h-full w-full" onMouseMove={parallax}>
      {/* Top-left protocol label (clickable) */}
      <button
        type="button"
        onClick={scrollToHow}
        className="absolute left-4 top-4 z-20 select-none cursor-pointer px-3 py-1 rounded-full text-xs tracking-widest font-semibold text-emerald-300/90 bg-emerald-500/10 border border-emerald-400/20 backdrop-blur-sm flex items-center gap-1.5 hover:shadow-[0_0_0_6px_rgba(125,211,252,0.1)] hover:border-emerald-400/50 transition"
        aria-label="Open BVL Protocol details"
      >
        BVL PROTOCOL
        <span className="text-emerald-200/90">›</span>
      </button>

      {/* Backdrop glows */}
      <div className="absolute -inset-10 pointer-events-none" style={{ transform: `translate3d(${px * 0.2}px, ${py * 0.2}px, 0)` }}>
        <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_15%_25%,rgba(16,185,129,0.28),transparent)]"/>
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_85%_25%,rgba(125,211,252,0.20),transparent)]"/>
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(16,185,129,0.07),transparent,rgba(125,211,252,0.07),transparent)]"/>
      </div>

      <svg viewBox="0 0 1200 800" className="h-full w-full">
        <title>BVL Issuance → Seal → QR Verification</title>
        <desc>High-energy animated scene with document issuance, sealing, QR verification, directional arrows, matrix rain, captions and a live console.</desc>
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
          <linearGradient id="duo" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={ice} />
            <stop offset="100%" stopColor={emerald} />
          </linearGradient>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a7f3d0" stopOpacity="1" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="scan" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={ice} stopOpacity="0" />
            <stop offset="40%" stopColor={ice} stopOpacity="0.45" />
            <stop offset="60%" stopColor={ice} stopOpacity="0.2" />
            <stop offset="100%" stopColor={ice} stopOpacity="0" />
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
            <rect x="140" y="200" width="280" height="340" rx="18" />
          </clipPath>
        </defs>

        {/* Subtle cyber grid */}
        <motion.g opacity="0.16" style={{ transform: `translate(${px * 0.4}px, ${py * 0.4}px)` }}>
          {Array.from({ length: 18 }).map((_, i) => (
            <line key={`v-${i}`} x1={40 + i * 64} y1={40} x2={40 + i * 64} y2={760} stroke="url(#duo)" strokeOpacity="0.1" />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={`h-${i}`} x1={40} y1={60 + i * 60} x2={1160} y2={60 + i * 60} stroke="url(#duo)" strokeOpacity="0.1" />
          ))}
        </motion.g>

        {/* Section labels (caps, larger) + captions */}
        <g fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontWeight="700">
          <text x="170" y="160" fontSize="22" fill={ice} opacity="0.9">ISSUE</text>
          <text x="170" y="182" fontSize="12" fill="#9ca3af" opacity="0.9">Document created & fingerprinted (SHA-256)</text>
          <text x="520" y="160" fontSize="22" fill={emerald} opacity="0.95">SEAL</text>
          <text x="520" y="182" fontSize="12" fill="#9ca3af" opacity="0.9">BVL stamp & security ribbon applied</text>
          <text x="870" y="160" fontSize="22" fill={ice} opacity="0.9">VERIFY</text>
          <text x="870" y="182" fontSize="12" fill="#9ca3af" opacity="0.9">QR scanned, hash and fields match</text>
        </g>

        {/* Direction arrows between stages */}
        <g stroke="url(#duo)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)">
          <motion.path d="M430 180 C 470 220, 510 220, 550 180" fill="none"
            animate={{ pathLength: [0, 1, 1, 1, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.path d="M820 180 C 860 220, 900 220, 940 180" fill="none"
            animate={{ pathLength: [0, 1, 1, 1, 0] }} transition={{ duration: 3.2, delay: 0.4, repeat: Infinity, ease: 'easeInOut' }} />
          {/* arrow heads */}
          <motion.path d="M548 176 l12 4 l-12 4" fill="none"
            animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.path d="M938 176 l12 4 l-12 4" fill="none"
            animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: 3.2, delay: 0.4, repeat: Infinity, ease: 'easeInOut' }} />
        </g>

        {/* 1) Document issuance card */}
        <g filter="url(#glow)">
          <motion.rect
            x="140" y="200" rx="18" width="280" height="340"
            fill="#0b1324" stroke="url(#duo)" strokeOpacity="0.45"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
          />
          <g clipPath="url(#docClip)">
            {[...Array(10)].map((_, r) => (
              <motion.rect key={r}
                x={160} y={230 + r * 30} rx="6" height="12"
                width="0"
                fill={r % 3 === 0 ? 'url(#emerald)' : '#0f172a'}
                stroke={r % 3 === 0 ? emerald : ice}
                strokeOpacity={r % 3 === 0 ? 0.35 : 0.18}
                animate={{ width: 240 }} transition={{ delay: 0.18 + r * 0.06, duration: 0.4 }}
              />
            ))}
          </g>
          {/* Header badge */}
          <motion.rect x="160" y="210" width="120" height="14" rx="7" fill="url(#emerald)" opacity="0.28"
            initial={{ width: 0 }} animate={{ width: 120 }} transition={{ delay: 0.12, duration: 0.35 }}
          />
        </g>

        {/* Connector to stage 2 */}
        <motion.path d="M420 360 C 460 360, 500 360, 540 360" fill="none" stroke="url(#duo)" strokeOpacity="0.55" strokeWidth="2"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.5 }} />

        {/* 2) Neon stamp + seal */}
        <g transform="translate(540 220)">
          {/* Base panel */}
          <motion.rect x="0" y="40" width="280" height="240" rx="16" fill="#0b1324" stroke="url(#duo)" strokeOpacity="0.4"
            filter="url(#glow)" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.4 }} />

          {/* Stamp drops */}
          <motion.g initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, type: 'spring', stiffness: 220, damping: 12 }}>
            <motion.circle cx="140" cy="120" r="58" fill="#0f172a" stroke="url(#duo)" strokeWidth="2" />
            <motion.circle cx="140" cy="120" r="80" fill="none" stroke="url(#duo)" strokeOpacity="0.35" strokeDasharray="8 10"
              animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }} />
            {/* Seal pulse */}
            <motion.circle cx="140" cy="120" r="58" fill="url(#nodeGlow)" opacity="0.9"
              animate={{ r: [56, 66, 56], opacity: [0.55, 0.95, 0.55] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} />
            {/* Stamp label */}
            <motion.text x="140" y="124" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontSize="16" fill="#a7f3d0"
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 14 }}>
              SEALED
            </motion.text>
            {/* Checkmark */}
            <motion.path d="M120 120 l14 14 l28 -28" fill="none" stroke={emerald} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
              filter="url(#glow)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7, duration: 0.6 }} />
          </motion.g>

          {/* Micro text lines under seal */}
          {[0,1,2,3].map((i) => (
            <motion.rect key={i} x={30} y={200 + i * 18} width="220" height="8" rx="4" fill="#0f172a" stroke={ice} strokeOpacity="0.18"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 + i * 0.06, duration: 0.28 }} />
          ))}
        </g>

        {/* Connector to stage 3 */}
        <motion.path d="M820 360 C 860 360, 900 360, 940 360" fill="none" stroke="url(#duo)" strokeOpacity="0.55" strokeWidth="2"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.8 }} />

        {/* 3) QR verification */}
        <g transform="translate(860 220)">
          <motion.rect x="40" y="60" width="240" height="240" rx="16" fill="#0b1324" stroke="url(#duo)" strokeOpacity="0.45" filter="url(#glow)"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.4 }} />
          {/* QR pattern */}
          <rect x="76" y="96" width="168" height="168" fill="url(#qr)" stroke="url(#duo)" strokeOpacity="0.35" />
          {/* Finder squares */}
          {[
            { x: 76, y: 96 }, { x: 76, y: 232 }, { x: 212, y: 96 }
          ].map((f, i) => (
            <g key={i}>
              <rect x={f.x} y={f.y} width="36" height="36" fill="none" stroke={ice} strokeWidth="3" />
              <rect x={f.x + 8} y={f.y + 8} width="20" height="20" fill={ice} opacity="0.2" />
            </g>
          ))}

          {/* Scanning beam (faster) */}
          <motion.rect x="76" y="96" width="168" height="20" fill="url(#scan)"
            animate={{ y: [96, 244, 96] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }} />

          {/* Verified TRUE badge with tick + lock + pulse ring */}
          <motion.g initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.4, duration: 0.35 }}>
            <motion.circle cx="178" cy="51" r="20" fill="none" stroke={emerald} strokeOpacity="0.8" filter="url(#glow)"
              animate={{ r: [18, 22, 18], opacity: [0.5, 0.9, 0.6] }} transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }} />
            <rect x="98" y="36" width="178" height="30" rx="15" fill="#052e26" stroke={emerald} strokeOpacity="0.8" />
            {/* tiny lock */}
            <path d="M120 52 v8 h12 v-8 h-2 v-3 a4 4 0 0 0 -8 0 v3 z" fill={ice} opacity="0.9"/>
            {/* check */}
            <path d="M142 57 l6 6 l12 -12" fill="none" stroke={emerald} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <text x="190" y="58" textAnchor="middle" fontFamily="ui-monospace, Menlo, monospace" fontSize="14" fill="#a7f3d0">VERIFIED: TRUE</text>
          </motion.g>
        </g>

        {/* MATRIX RAIN (background, ice + emerald) */}
        <motion.g opacity="0.35" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" filter="url(#glow)" style={{ transform: `translate(${px * 0.6}px, ${py * 0.6}px)` }}>
          {Array.from({ length: 18 }).map((_, col) => {
            const x = 80 + col * 60
            const stream = makeStream(16)
            const d = prefersReduced ? 0 : (3 + (col % 4) * 0.4)
            return (
              <motion.g key={col} transform={`translate(${x} -40)`}
                animate={prefersReduced ? {} : { y: [ -80, 820 ] }} transition={{ duration: d || 1, repeat: prefersReduced ? 0 : Infinity, ease: 'linear', delay: (col % 6) * 0.15 }}>
                {stream.map((ch, i) => (
                  <text key={i} x={0} y={i * 22} fontSize="14" fill={i % 2 === 0 ? ice : emerald} opacity={i === stream.length - 1 ? 0.9 : 0.7}>{ch}</text>
                ))}
              </motion.g>
            )
          })}
        </motion.g>

        {/* Blockchain chain links along the bottom */}
        <g transform="translate(120 700)" filter="url(#glow)">
          {/* Knight Rider style emerald scanner */}
          {!prefersReduced && (
            <motion.rect x="-60" y="-30" width="120" height="60" rx="30" fill={emerald} opacity="0.12"
              animate={{ x: [-60, 900, -60] }} transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }} />
          )}
          {Array.from({ length: 10 }).map((_, i) => (
            <g key={i} transform={`translate(${i * 100} 0)`}>
              {/* Base link */}
              <motion.rect x="0" y="-20" width="80" height="40" rx="10" fill="#071b16" stroke={emerald} strokeOpacity="0.75" strokeWidth="2"
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.04, duration: 0.28 }} />
              {/* Inner glow that ripples left→right→left */}
              <motion.rect x="6" y="-14" width="68" height="28" rx="8" fill={emerald} opacity={0.18}
                animate={prefersReduced ? {} : { opacity: [0.18, 0.9, 0.18] }}
                transition={{ duration: 1.3, delay: i * 0.08, repeat: prefersReduced ? 0 : Infinity, repeatType: 'mirror', ease: 'easeInOut' }} />
              {/* Connector dash */}
              <motion.line x1="80" y1="0" x2="100" y2="0" stroke={emerald} strokeWidth="2" strokeDasharray="6 10"
                animate={prefersReduced ? {} : { strokeDashoffset: [0, -16, 0] }} transition={{ duration: 1.2, repeat: prefersReduced ? 0 : Infinity, ease: 'linear' }} />
            </g>
          ))}
        </g>

        {/* Floating verification nodes (parallax slightly) */}
        <motion.g style={{ transform: `translate(${px * 0.3}px, ${py * 0.3}px)` }}>
          {[
            { cx: 300, cy: 520 }, { cx: 540, cy: 300 }, { cx: 780, cy: 520 }, { cx: 1040, cy: 420 }
          ].map((n, i) => (
            <g key={i}>
              <circle cx={n.cx} cy={n.cy} r="12" fill="url(#emerald)" opacity="0.25" />
              <motion.circle cx={n.cx} cy={n.cy} r="10" fill={emerald} filter="url(#glow)"
                animate={prefersReduced ? {} : { r: [8.5, 12, 8.5], opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.6, delay: i * 0.15, repeat: prefersReduced ? 0 : Infinity, ease: 'easeInOut' }} />
              <motion.circle cx={n.cx} cy={n.cy} r="24" fill="url(#nodeGlow)" opacity="0.75"
                animate={prefersReduced ? {} : { r: [20, 26, 20], opacity: [0.55, 0.9, 0.55] }} transition={{ duration: 2.0, delay: i * 0.18, repeat: prefersReduced ? 0 : Infinity, ease: 'easeInOut' }} />
            </g>
          ))}
        </motion.g>

        {/* Live console bar (bottom) */}
        <g transform="translate(80 760)">
          <rect x="0" y="-28" width="1040" height="24" rx="8" fill="#0b1324" stroke={ice} strokeOpacity="0.2" />
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            <motion.text x="16" y="-11" fontFamily="ui-monospace, Menlo, monospace" fontSize="12" fill="#a7f3d0"
              animate={{ opacity: [1, 0, 0, 1], x: [16, 0, 0, 16] }} transition={{ duration: 8, repeat: Infinity, times: [0, 0.32, 0.34, 0.66], ease: 'easeInOut' }}>
              CERT BVL-POF-2026-000123 • STATUS: VERIFIED TRUE
            </motion.text>
            <motion.text x="16" y="-11" fontFamily="ui-monospace, Menlo, monospace" fontSize="12" fill="#93c5fd"
              animate={{ opacity: [0, 1, 0, 0] }} transition={{ duration: 8, repeat: Infinity, times: [0.33, 0.66, 0.67, 1], ease: 'easeInOut' }}>
              HASH MATCH • INTEGRITY: OK • TIMESTAMP: 2026-03-01T10:22:11Z
            </motion.text>
            <motion.text x="16" y="-11" fontFamily="ui-monospace, Menlo, monospace" fontSize="12" fill="#86efac"
              animate={{ opacity: [0, 0, 1, 0] }} transition={{ duration: 8, repeat: Infinity, times: [0.66, 0.67, 1, 1], ease: 'easeInOut' }}>
              LEDGER EVENT • ISSUER: BANK NODE-07 • REGION: EU
            </motion.text>
          </motion.g>
        </g>
      </svg>

      {/* Ambient particles */}
      {!prefersReduced && [...Array(22)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-[2px] w-[2px] rounded-full bg-emerald-300/80"
          style={{ left: `${6 + (i * 4.4)}%`, top: `${14 + ((i * 7) % 68)}%` }}
          animate={{ y: [0, -14, 0], opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 2.6 + (i % 3) * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.08 }}
        />
      ))}
    </div>
  )
}
