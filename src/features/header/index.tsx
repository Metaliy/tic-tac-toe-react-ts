import { Logo } from "shareds/logo/logo";

type HeaderProps = {
  styles: CSSModuleClasses,
}

function Header ({styles}: HeaderProps) {

  return(
    <header className={styles.header}>
      <Logo />
    </header>
    
  )
}

export {Header}