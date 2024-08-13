import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'

import s from './BackToTop.module.scss'

export const BackToTop = () => {
  const [style, setStyle] = useState('')
  // Показываем кнопку, когда прокручиваем вниз 300px от верха
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setStyle(s.animationOn)
    } else if (window.scrollY === 0) {
      setStyle(s.animationOff)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <Link className={`${s.containerBackToTop} ${style}`} smooth to={'app'}>
      <div className={s.icon}>
        <IconSvg name={'arrow'} />
      </div>
    </Link>
  )
}
