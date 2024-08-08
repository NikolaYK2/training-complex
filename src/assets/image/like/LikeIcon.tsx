import { useAnimation } from '@/commn/hooks/useAnimation'

import s from './LikeIcon.module.scss'

type Props = {
  className?: string
  disabled?: boolean
  isActive?: boolean
  position?: 'absolute' | 'relative'
}
export const LikeIcon = ({
  className = '',
  disabled = false,
  isActive = false,
  position = 'relative',
}: Props) => {
  const { containerRef, handleAnimationEnd, handleMouseEnter } = useAnimation({
    animationTriggerClass: s.animate,
  })

  return (
    <div
      className={`${s.containerLikeIcon} ${className} ${s[position]} ${disabled ? s.disabled : ''}`}
      onAnimationEnd={handleAnimationEnd}
      onMouseEnter={handleMouseEnter}
      ref={containerRef}
    >
      <svg
        className={`${s.svgLikeIcon}`}
        height={'100%'}
        viewBox={'0 0 512 512'}
        width={'100%'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <path
          className={`${s.heart} ${isActive ? s.active : ''}`}
          d={
            'M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'
          }
        ></path>
      </svg>
    </div>
  )
}
