import styles from './EmailSelector.module.scss'

export const EmailSelector = (props) => {
  const { placeholder, name, register } = props

  return (
    <input
      {...register(name)}
      autoComplete='off'
      type='text'
      placeholder={placeholder}
      className={styles.input}
      formNoValidate
    />
  )
}
