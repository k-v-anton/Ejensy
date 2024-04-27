import { useEffect, useState } from 'react'
import { BorderNameDate } from '../BorderNameDate/BorderNameDate'
import styles from './Countdown.module.scss'

const calcDateEndTimer = (now, end) => {
  const diffDays = Math.floor((end - now) / (1000 * 60 * 60 * 24))
  const diffHours = Math.floor((end - now) / (1000 * 60 * 60) - diffDays * 24)

  const diffMinutes = Math.floor(
    (end - now) / (1000 * 60) - (diffDays * 24 * 60 + diffHours * 60)
  )
  const diffSeconds = Math.floor(
    (end - now) / 1000 -
      (diffDays * 24 * 60 * 60 + diffHours * 60 * 60 + diffMinutes * 60)
  )

  return {
    days: diffDays,
    hours: diffHours,
    minutes: diffMinutes,
    seconds: diffSeconds,
  }
}

export const Countdown = (props) => {
  const { dateEnd } = props

  const stringDateEnd = new Date(dateEnd).getTime()

  const [renderData, setRenderData] = useState(
    calcDateEndTimer(Date.now(), stringDateEnd)
  )

  calcDateEndTimer(stringDateEnd)

  useEffect(() => {
    const interval = setInterval(
      () => setRenderData(calcDateEndTimer(Date.now(), stringDateEnd)),
      1000
    )
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.countdown}>
      <div className={styles.time}>
        {Object.entries(renderData).map((el, i) => (
          <div key={i} className={styles.container}>
            <p>{el[1].toString().padStart(2, '0')}</p>
            <BorderNameDate name={el[0]} />
          </div>
        ))}
      </div>
    </div>
  )
}
