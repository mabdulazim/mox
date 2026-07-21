// ---- Header icons (stroke = currentColor) ----
export const Search = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" strokeLinecap="round" />
  </svg>
)
export const Headset = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <path d="M4 13v-1a8 8 0 0 1 16 0v1" strokeLinecap="round" />
    <rect x="2.5" y="13" width="4" height="6" rx="1.5" /><rect x="17.5" y="13" width="4" height="6" rx="1.5" />
    <path d="M20 19a4 4 0 0 1-4 3h-2" strokeLinecap="round" />
  </svg>
)
export const Globe = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
  </svg>
)
export const Accessibility = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <circle cx="12" cy="4.5" r="1.6" fill="currentColor" stroke="none" />
    <path d="M4 8h16M12 8v6M12 14l-3 6M12 14l3 6" strokeLinecap="round" />
  </svg>
)
export const Chevron = (p) => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.4" {...p}>
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
export const Check = (p) => (
  <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="2.2" {...p}>
    <circle cx="12" cy="12" r="10" /><path d="M7.5 12.5l3 3 6-6.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
export const ArrowUp = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" {...p}>
    <path d="M12 19V6M6 12l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// ---- Real Ameen avatar (downloaded asset) ----
export const Avatar = ({ size = 30 }) => (
  <img src="/ameen.png" width={size} height={size} alt="أمين"
       style={{ borderRadius: '50%', objectFit: 'cover', display: 'block' }} />
)

// ---- Social brand icons (footer) ----
export const YouTube = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M23 12s0-3.5-.45-5.2a2.8 2.8 0 0 0-2-2C18.7 4.4 12 4.4 12 4.4s-6.7 0-8.55.4a2.8 2.8 0 0 0-2 2C1 8.5 1 12 1 12s0 3.5.45 5.2a2.8 2.8 0 0 0 2 2c1.85.4 8.55.4 8.55.4s6.7 0 8.55-.4a2.8 2.8 0 0 0 2-2C23 15.5 23 12 23 12zM9.8 15.3V8.7l5.7 3.3-5.7 3.3z"/></svg>
)
export const LinkedIn = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3 0-2.95-1.8-2.95s-2.07 1.4-2.07 2.85V21H9z"/></svg>
)
export const XLogo = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M18.24 2.25h3.3l-7.2 8.24L23 21.75h-6.63l-5.2-6.8-5.94 6.8H1.92l7.7-8.8L1 2.25h6.8l4.7 6.22 5.74-6.22zm-1.16 17.5h1.83L7.02 4.13H5.06z"/></svg>
)
export const Facebook = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg>
)
