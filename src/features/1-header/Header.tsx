import { LayoutProps } from '@/commn/components/ui/layout/Layout'
import { Logo } from '@/commn/components/ui/logo/Logo'
import { ProfileMenu } from '@/features/1-header/profileMenu/ProfileMenu'

import s from './Header.module.scss'

export const Header = ({ avatar, email, name, ...rest }: LayoutProps) => {
  return (
    <header className={s.header} {...rest}>
      <div className={s.container}>
        <Logo />
        <ProfileMenu avatar={avatar} email={email} name={name} />
      </div>
    </header>
  )
}
