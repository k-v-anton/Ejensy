import { observer } from 'mobx-react'
import { useState } from 'react'
import { Cloud } from '../Cloud/Cloud'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { Main } from '../Main/Main'
import { Popup } from '../Popup/Popup'
import { Slide } from '../Slide/Slide'
import styles from './GreedPage.module.scss'
import { sliderData } from './slider.Data'
import { useWindowSize } from '../../hooks/useWindowSize'
import { SlideMobile } from '../SlideMobile/SlideMobile'

export const GreedPage = observer(() => {
  const [active, setActive] = useState(1)

  const {width} = useWindowSize()

  const handleClickSlide = (id) => {
    setActive(id)
  }

  console.log(`active`, active)
  return (
    <>
      <section className={styles.greedPage}>
        <Cloud position='left' />
        <Cloud position='right' />
        <Header />
        <Main />
        <Footer />
        <Popup />
      </section>
      <section className={styles.infoSection}>
        <h2 className={styles.title}>All events</h2>
        {width > 768 && <div className={styles.slider}>
          {sliderData.map((el) => {
            return <Slide el={el} active={active} handler={handleClickSlide} />
          })}
        </div>}
        {width < 768 && <div className={styles.slider}>
          {sliderData.map((el) => {
            return <SlideMobile el={el} active={active} handler={handleClickSlide} />
          })}
        </div>}
      </section>
    </>
  )
})
