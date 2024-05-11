import { FormEventHandler, ReactNode } from 'react'

import s from './Form.module.scss'

type Props = {
  children: ReactNode
  className?: string
  onSubmit: FormEventHandler<HTMLFormElement>
}
export const Form = ({ children, className, onSubmit }: Props) => {
  return (
    <form className={`${s.form} ${className}`} noValidate onSubmit={onSubmit}>
      {children}
    </form>
  )
}
