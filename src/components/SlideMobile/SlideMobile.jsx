import styles from './SlideMobile.module.scss'

export const SlideMobile = (props) => {
  const { el, handler, active } = props

  return (
    <div
      className={`${styles.slideMobile} ${
        el.id === active ? '' : styles.notActiveSlide
      }`}
    >
      <div
        className={`${styles.imageContainer} ${
          el.id === active ? '' : styles.notActive
        }`}
      >
        <img className={styles.imageBG} src={el.image} alt='' />
        <div
          className={`${styles.slideInfo} ${
            el.id === active ? '' : styles.notActive
          }`}
        >
          <p className={styles.bigNumberSlide}>{el.id.toString().padStart(2, '0')}</p>
        </div>
      </div>

      <div className={styles.descriptionSlide} onClick={() => handler(el.id)}>
        <p className={styles.slideNumber}>
          {el.id.toString().padStart(2, '0')}
        </p>
        <p className={styles.slideName}>{el.name}</p>
      </div>
    </div>
  )
}
