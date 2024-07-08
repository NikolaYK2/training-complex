import { Link } from 'react-router-dom'

import { Button } from '@/commn/components/ui/button'
import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'

import s from './ErrorRoute.module.scss'

export const ErrorRoute = () => {
  return (
    <div className={s.containerErrorRoute}>
      <IconSvg name={'errorRote'} />
      <TextFormat variant={'body1'}>Sorry! Page not found!</TextFormat>
      <Button as={Link} to={'/'}>
        <TextFormat variant={'subtitle2'}>Back to home page</TextFormat>
      </Button>
    </div>
  )
}
