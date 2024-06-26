import styles from './BorderNameDate.module.scss'

export const BorderNameDate = (props) => {
  const { name } = props

  return (
    <div className={styles.nameTime}>
      <svg
        className={styles.borderNameDate}
        viewBox='0 0 132 54'
        fill='none'
      >
        <path d='M0 54C6.67796 42.5627 14.415 41.5565 29.0947 41.5565C43.7745 41.5565 61.0136 41.1876 84.8718 41.5565C110.554 41.959 130.382 28.7441 132 -1.95521e-06C125.322 11.4373 116.644 13.5168 101.964 13.5168C87.2841 13.5168 78.4587 13.8857 54.6004 13.5168C28.9182 13.1143 8.88433 25.9938 0 54Z' />
      </svg>
      <p>{name}</p>
    </div>
  )
}
