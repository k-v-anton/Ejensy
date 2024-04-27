import {useState, useEffect, useRef} from 'react'
import styles from './TextContent.module.scss'

export const TextContent = (props) => {
  const {text} = props

  return (
    <p className={styles.text}>{text}</p>

  )
}


