import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'

import s from './BackToTop.module.scss'

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  // Показываем кнопку, когда прокручиваем вниз 300px от верха
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <Link
      className={`${s.containerBackToTop} ${isVisible ? s.animationOn : s.animationOff}`}
      smooth
      to={'app'}
    >
      <div className={s.icon}>
        <IconSvg name={'arrow'} />
      </div>
    </Link>
  )
}
