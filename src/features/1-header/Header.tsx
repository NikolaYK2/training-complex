import { Link } from 'react-router-dom'

import { Button } from '@/commn/components/ui/button'
import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'

import s from './Header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.logo}>
          <IconSvg name={'logo'} />
        </div>

        <Button as={Link} to={'/login'} variant={'secondary'}>
          <TextFormat variant={'subtitle2'}>Sign In</TextFormat>
        </Button>
      </div>
    </header>
  )
}
