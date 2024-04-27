import styles from './Slide.module.scss'

export const Slide = (props) => {
  const { el, active, handler } = props

  return (
    <div
      className={el.id === active ? styles.slideActive : styles.slideNotActive}
      onClick={() => handler(el.id)}
    >
      <div className={styles.imageContainer}>
        <img src={el.image} alt='' />
      </div>
      <div
        className={`${styles.slideTitleActive}  ${
          el.id !== active ? styles.slideTitleNotActive : ''
        }`}
      >
        <p className={styles.slideName}>{el.name}</p>
        <p className={styles.slideNumber}>
          {el.id.toString().padStart(2, '0')}
        </p>
      </div>
      <div className={styles.info}>
        <p className={styles.bigNumber}>{el.id.toString().padStart(2, '0')}</p>
        <p className={styles.slideInfoName}>{el.name}</p>
        <p className={styles.slideInfoDate}>{el.dateCreate}</p>
        <button className={styles.infoBtn}>More information</button>
      </div>
    </div>
  )
}
