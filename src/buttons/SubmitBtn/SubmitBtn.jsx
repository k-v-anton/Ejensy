import { ArrowRight } from '../../assets/svg/ArrowRight'
import styles from './SubmitBtn.module.scss'

export const SubmitBtn = (props) => {
  const {} = props

  return (
    <button className={styles.submit} type='submit'>
      <ArrowRight />
    </button>
  )
}
