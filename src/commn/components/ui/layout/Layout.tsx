import { CSSProperties, ComponentProps, ElementRef, forwardRef } from 'react'

import { Header } from '@/features/1-header/Header'

import s from './Layout.module.scss'

// import clsx from 'clsx'

type Props = ComponentProps<'div'> & {
  marginTop?: CSSProperties['marginTop']
}
export const Layout = forwardRef<ElementRef<'div'>, Props>(
  ({ children, className, ...rest }, ref) => {
    // const classes = clsx()

    return (
      <div className={'containerApp'} ref={ref} {...rest}>
        <Header />
        <main className={s.main}>{children}</main>
      </div>
    )
  }
)
