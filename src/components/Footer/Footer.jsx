import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { SubmitBtn } from '../../buttons/SubmitBtn/SubmitBtn'
import { popupFormState } from '../../store/popupStore'
import { EmailSelector } from '../selectors/EmailSelector'
import styles from './Footer.module.scss'
import { useWindowSize } from '../../hooks/useWindowSize'

const userSchema = yup.object({
  email: yup.string().email('Email is not valid').required('Email is required'),
})

export const Footer = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(userSchema),
  })

  const {height} = useWindowSize()

  const onSubmit = (data) => {
    popupFormState.open(
      'SUCCESS!2222',
      'You have successfully subscribed to the email newsletter'
    )
    reset()
  }

  const handleClickAllEvents = () => {
    window.scrollTo({behavior: 'smooth', top: height})
  }

  useEffect(() => {
    errors?.email && popupFormState.open('ERROR!', errors?.email?.message)
  }, [errors])

  return (
    <footer className={styles.footer}>
      <form
        name='notified'
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <EmailSelector
          name={'email'}
          register={register}
          placeholder={'Enter your Email and get notified'}
        />
        <SubmitBtn />
      </form>
      <button onClick={handleClickAllEvents}>go to slider</button>
    </footer>
  )
}
