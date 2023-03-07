
type CircleProps = {
  styles: CSSModuleClasses,
}

function Circle ({styles}: CircleProps):JSX.Element {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={styles.circle}>
      <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="80%" y2="0%">
      <stop offset="0%" stopColor="rgba(174, 0, 255, 1)" />
      <stop offset="100%" stopColor="rgba(0, 255, 255, 1)" />
    </linearGradient>
  </defs>
      <circle cx="50" cy="50" r="32" strokeWidth="8" stroke="url(#gradient)"   transform="rotate(45 50 50)" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export {Circle}
