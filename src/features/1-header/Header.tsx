import { Logo } from '@/commn/components/ui/logo/Logo'
import { ProfileMenu } from '@/features/1-header/profileMenu/ProfileMenu'

import s from './Header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Logo />
        <ProfileMenu />
      </div>
    </header>
  )
}
