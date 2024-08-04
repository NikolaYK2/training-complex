import { Link } from 'react-router-dom'

import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import { HOME_ROUTE } from '@/routes/Router'

import s from './Logo.module.scss'

export const Logo = () => {
  return (
    <Link className={s.containerLogo} to={HOME_ROUTE}>
      <div className={s.logo}>
        <IconSvg name={'logo'} />
      </div>
      <div className={s.logoMini}>
        <IconSvg name={'miniLogo'} />
      </div>
    </Link>
  )
}
