import { ReactNode } from 'react'

import { TextFormat } from '@/commn/components/ui/typography/TextFormat'

import s from './Title.module.scss'

type Props = {
  children: ReactNode
  name: string
}

export const Title = ({ children, name }: Props) => {
  return (
    <div className={s.containerTitle}>
      <TextFormat variant={'h1'}>{name}</TextFormat>
      {children}
    </div>
  )
}
