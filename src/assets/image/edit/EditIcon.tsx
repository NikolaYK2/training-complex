import { ComponentPropsWithoutRef } from 'react'

import { useAnimation } from '@/commn/hooks/useAnimation'

import s from './EditIcon.module.scss'

type Props = ComponentPropsWithoutRef<'div'>
export const EditIcon = ({ className = '', ...rest }: Props) => {
  const { containerRef, handleAnimationEnd, handleMouseEnter } = useAnimation({
    animationTriggerClass: s.animate,
  })

  return (
    <div
      className={`${s.containerEdite} ${className}`}
      onAnimationEnd={handleAnimationEnd}
      onMouseEnter={handleMouseEnter}
      ref={containerRef}
      {...rest}
    >
      <svg
        fill={'none'}
        height={'100%'}
        viewBox={'0 0 16 16'}
        width={'100%'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <path
          className={s.line}
          d={
            'M12.6667 13.3345H3.33334C3.15653 13.3345 2.98696 13.4047 2.86193 13.5297C2.73691 13.6548 2.66667 13.8243 2.66667 14.0011C2.66667 14.178 2.73691 14.3475 2.86193 14.4725C2.98696 14.5976 3.15653 14.6678 3.33334 14.6678H12.6667C12.8435 14.6678 13.0131 14.5976 13.1381 14.4725C13.2631 14.3475 13.3333 14.178 13.3333 14.0011C13.3333 13.8243 13.2631 13.6548 13.1381 13.5297C13.0131 13.4047 12.8435 13.3345 12.6667 13.3345Z'
          }
          fill={'white'}
        />
        <path
          className={s.pencil}
          d={
            'M3.33333 12.0012H3.39333L6.17333 11.7479C6.47786 11.7175 6.76269 11.5834 6.98 11.3679L12.98 5.36787C13.2129 5.12185 13.3387 4.79355 13.33 4.4549C13.3212 4.11625 13.1786 3.79488 12.9333 3.56121L11.1067 1.73454C10.8683 1.5106 10.5559 1.38211 10.2289 1.37351C9.90191 1.3649 9.58319 1.47679 9.33333 1.68787L3.33333 7.68787C3.11784 7.90518 2.98367 8.19001 2.95333 8.49454L2.66667 11.2745C2.65769 11.3722 2.67036 11.4706 2.70377 11.5628C2.73719 11.655 2.79053 11.7387 2.86 11.8079C2.92229 11.8697 2.99617 11.9185 3.0774 11.9517C3.15862 11.9849 3.2456 12.0017 3.33333 12.0012ZM10.18 2.66787L12 4.48787L10.6667 5.78787L8.88 4.00121L10.18 2.66787ZM4.24667 8.60787L8 4.88121L9.8 6.68121L6.06667 10.4145L4.06667 10.6012L4.24667 8.60787Z'
          }
          fill={'white'}
        />
      </svg>
    </div>
  )
}
