
type CrossProps = {
  styles: CSSModuleClasses,
}

function Cross ({styles}: CrossProps):JSX.Element {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={styles.cross}>
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="80%" y2="0%">
      <stop offset="0%" stopColor="rgba(174, 0, 255, 1)" />
      <stop offset="100%" stopColor="rgba(0, 255, 255, 1)" />
    </linearGradient>
  </defs>
  <path d="M 10,50 L 90,50 M 50,10 L 50,90" strokeWidth="8" stroke="url(#gradient)"   transform="rotate(45 50 50)" strokeLinecap="round" />
</svg>
  )
}

export {Cross}
