import { CSSProperties, ComponentProps, ElementRef, forwardRef } from 'react'

import { BackToTop } from '@/commn/components/ui/backToTop/BackToTop'
import { Header } from '@/features/1-header/Header'

import s from './Layout.module.scss'

export type LayoutProps = ComponentProps<'div'> & {
  avatar: string | undefined
  email: string | undefined
  marginTop?: CSSProperties['marginTop']
  name: string | undefined
}
export const Layout = forwardRef<ElementRef<'div'>, LayoutProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div className={'containerApp'} ref={ref} {...rest} id={'app'}>
        <Header {...rest} />
        <main className={s.main}>{children}</main>
        <BackToTop />
      </div>
    )
  }
)
