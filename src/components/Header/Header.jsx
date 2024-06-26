import { Logo } from '../../assets/svg/Logo'
import styles from './Header.module.scss'

export const Header = () => {

  return (
    <header className={styles.header}>
      <a href='#' className={styles.linkLogo}><Logo /></a>
    </header>
  )
}
