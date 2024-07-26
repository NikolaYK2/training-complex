import { ComponentProps } from 'react'

import { TextFormat } from '@/commn/components/ui/typography/TextFormat'

import s from './Card.module.scss'

type Props = ComponentProps<'div'> & {
  title?: string
}

export const Card = ({ children, className, title, ...rest }: Props) => {
  return (
    <div className={s.container}>
      <div className={`${s.blockCard} ${className}`} {...rest}>
        {title && <TextFormat variant={'h1'}>{`Learn ${title}`}</TextFormat>}
        {children}
      </div>
    </div>
  )
}
