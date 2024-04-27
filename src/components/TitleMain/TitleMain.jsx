import { TextContent } from '../TextContent'
import styles from './TitleMain.module.scss'

export const TitleMain = (props) => {
  const {} = props

  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>Under Construction</h1>
      <TextContent text="We're making lots of improvements and will be back soon" />
    </div>
  )
}
