import { ButtonEvent } from '../ButtonEvent/ButtonEvent'
import { Countdown } from '../Countdown/Countdown'
import { TextContent } from '../TextContent'
import { TitleMain } from '../TitleMain/TitleMain'
import styles from './Main.module.scss'

export const Main = () => {
  return (
    <main className={styles.main}>
      <TitleMain />
      <Countdown dateEnd={'07.24.2024'} />
      <TextContent text='Check our event page when you wait:' />
      <ButtonEvent name='Go to the event' />
    </main>
  )
}
