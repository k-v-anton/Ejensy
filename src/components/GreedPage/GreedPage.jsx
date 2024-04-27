import { observer } from 'mobx-react'
import { Cloud } from '../Cloud/Cloud'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { Main } from '../Main/Main'
import { Popup } from '../Popup/Popup'
import styles from './GreedPage.module.scss'

export const GreedPage = observer(() => {
  return (
    <div className={styles.greedPage}>
      <Cloud position='left' />
      <Cloud position='right' />
      <Header />
      <Main />
      <Footer />
      <Popup />
    </div>
  )
})
