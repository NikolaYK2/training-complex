import { CSSProperties, ComponentProps, ElementRef, forwardRef } from 'react'

import { BackToTop } from '@/commn/components/ui/backToTop/BackToTop'
import { Header } from '@/features/1-header/Header'

import s from './Layout.module.scss'

type Props = ComponentProps<'div'> & {
  marginTop?: CSSProperties['marginTop']
}
export const Layout = forwardRef<ElementRef<'div'>, Props>(({ className, ...rest }, ref) => {
  return (
    <div className={'containerApp'} ref={ref} {...rest} id={'app'}>
      <Header />
      <main className={s.main} {...rest} />
      <BackToTop />
    </div>
  )
})
