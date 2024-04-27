import { observer } from 'mobx-react'
import { Cloud } from '../Cloud/Cloud'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { Main } from '../Main/Main'
import { Popup } from '../Popup/Popup'
import styles from './GreedPage.module.scss'

export const GreedPage = observer(() => {
  const data = [
    {
      id: 1,
      name: 'Hawaiian party',
      dateCreate: '13.02.2023',
      image: require('../../assets/images/slider/1.jpg'),
      mooreInformation: {},
    },
    {
      id: 2,
      name: 'Мafia party',
      dateCreate: '13.02.2023',
      image: require('../../assets/images/slider/2.jpg'),
      mooreInformation: {},
    },
    {
      id: 3,
      name: 'Party',
      dateCreate: '13.02.2023',
      image: require('../../assets/images/slider/3.jpg'),
      mooreInformation: {},
    },
    {
      id: 4,
      name: 'Party on the beach',
      dateCreate: '13.02.2023',
      image: require('../../assets/images/slider/4.jpg'),
      mooreInformation: {},
    },
    {
      id: 5,
      name: 'Home Security',
      dateCreate: '13.02.2023',
      image: require('../../assets/images/slider/5.jpg'),
      mooreInformation: {},
    },
    {
      id: 6,
      name: 'Network Design & Implementation',
      dateCreate: '13.02.2023',
      image: require('../../assets/images/slider/6.jpg'),
      mooreInformation: {},
    },
    {
      id: 7,
      name: 'System Design & Engineering',
      dateCreate: '13.02.2023',
      image: require('../../assets/images/slider/7.jpg'),
      mooreInformation: {},
    },
    {
      id: 8,
      name: 'Client Care Plans',
      dateCreate: '13.02.2023',
      image: require('../../assets/images/slider/8.jpg'),
      mooreInformation: {},
    },
  ]
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
        <div className={styles.slider}>
          {data.map((el) => {
            return (
              <div className={styles.slide}>
                <div className={styles.slideTitle}>
                  <p className={styles.slideName}>{el.name}</p>
                  <p className={styles.slideNumber}>
                    {el.id.toString().padStart(2, '0')}
                  </p>
                </div>
                <div className={styles.imageContainer}>
                  <div className={styles.info}>
                    <p className={styles.slideInfoName}>{el.name}</p>
                    <p className={styles.slideInfoDate}>{el.dateCreate}</p>
                    <button className={styles.infoBtn}>More information</button>
                  </div>
                  <img src={el.image} alt='' />
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
})
