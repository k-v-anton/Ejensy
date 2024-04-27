import { observer } from 'mobx-react'
import { Cross } from '../../assets/svg/Cross/Cross'
import { popupFormState } from '../../store/popupStore'
import { TextContent } from '../TextContent'
import styles from './Popup.module.scss'

export const Popup = observer(() => {


  const isOpen = popupFormState.state
  const handleClosePopup = () => {
    popupFormState.close()
  }

  return (
    <div className={`${styles.popup} ${isOpen ? styles.open : styles.close}`}>
      <div className={styles.content}>
        <p className={styles.wrapperCross}>
          <button className={styles.cross} onClick={handleClosePopup}>
            <Cross />
          </button>
        </p>

        <div className={styles.wrapper}>
          <h2 className={styles.title}>{popupFormState.title}</h2>
          <TextContent text={popupFormState.text} />
          <button className={styles.closeBtn} onClick={handleClosePopup}>close</button>
        </div>
      </div>
    </div>
  )
})
