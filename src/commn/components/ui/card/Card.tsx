import { ReactNode } from 'react'

import s from './Card.module.scss'

type Props = {
  children: ReactNode
  className?: string
}
export const Card = ({ children, className }: Props) => {
  return (
    <div className={s.container}>
      <div className={`${s.blockCard} ${className}`}>{children}</div>
    </div>
  )
}
