import styles from './ArrowRight.module.scss'
export const ArrowRight = (props) => {
  const {} = props

  return (
    <svg
      className={styles.arrowRight}
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4.16666 10H15.8333'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 4.16667L15.8333 10L10 15.8333'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
