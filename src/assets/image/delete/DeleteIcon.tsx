import { useAnimation } from '@/commn/hooks/useAnimation'

import s from './DeleteIcon.module.scss'

type Props = {
  className?: string
}
export const DeleteIcon = ({ className }: Props) => {
  const { containerRef, handleAnimationEnd, handleMouseEnter } = useAnimation({
    animationTriggerClass: s.animation,
  })

  return (
    <div
      className={`${s.containerDeleteIcon} ${className || ''}`}
      onAnimationEnd={handleAnimationEnd}
      onMouseEnter={handleMouseEnter}
      ref={containerRef}
    >
      <svg
        className={s.svg}
        height={'100%'}
        viewBox={'-2 -2 30 30'}
        width={'100%'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <path
          className={s.head}
          d={
            'M22,4H16V3a3,3,0,0,0-3-3H11A3,3,0,0,0,8,3V4H2A1,1,0,0,0,2,6H22a1,1,0,0,0,0-2ZM10,4V3a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V4Z'
          }
        />
        <path
          className={s.foot}
          d={'M4,5H20a0,0,0,0,1,0,0V20a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V5A0,0,0,0,1,4,5Z'}
        />
      </svg>
    </div>
  )
}
