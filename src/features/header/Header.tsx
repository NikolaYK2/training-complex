import { Button } from '@/commn/components/ui/button'
import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'

import s from './Header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={`${s.container} containerApp`}>
        <div className={s.logo}>
          <IconSvg name={'logo'} />
        </div>

        <Button as={'button'} variant={'link'}>
          Login
        </Button>
      </div>
    </header>
  )
}
