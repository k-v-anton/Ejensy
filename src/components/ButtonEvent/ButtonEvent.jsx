import { ArrowRight } from '../../assets/svg/ArrowRight'
import styles from './ButtonEvent.module.scss'

export const ButtonEvent = (props) => {
  const {name} = props

  return (
  <a href='https://www.youtube.com/' target='blank'>
      <button className={styles.ourEvents}>
        <p>{name}</p>
        <ArrowRight />
      </button>
  </a>
  )
}
