import { CSSProperties, ComponentPropsWithoutRef } from 'react'

import { clsx } from 'clsx'

import s from './Page.module.scss'

type Props = ComponentPropsWithoutRef<'div'> & {
  marginTop?: CSSProperties['marginTop']
}
export const Page = ({ className, marginTop = '33px', style, ...rest }: Props) => {
  const classes = clsx(className, s.pageContainer)
  const styles: CSSProperties = { marginTop: marginTop, ...style }

  return <div className={classes} style={styles} {...rest} /> //тут чилдрен уже будет в rest
}
