import { ComponentProps } from 'react'

import s from './Card.module.scss'

type Props = ComponentProps<'div'>

export const Card = ({ className, ...rest }: Props) => {
  return (
    <div className={s.container}>
      <div className={`${s.blockCard} ${className}`} {...rest} />
    </div>
  )
}
