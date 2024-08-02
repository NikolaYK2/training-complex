import { useNavigate } from 'react-router-dom'

import { Button } from '@/commn/components/ui/button'
import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'

import s from './BackTo.module.scss'

type Props = {
  nameLink: string
}
export const BackTo = ({ nameLink }: Props) => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-2)
  }

  return (
    <Button className={s.containerBackTo} onClick={handleGoBack} variant={'link'}>
      <div className={s.icon}>
        <IconSvg name={'backTo'} />
        <IconSvg name={'backTo'} />
      </div>
      <TextFormat className={s.text} variant={'body2'}>
        {nameLink}
      </TextFormat>
    </Button>
  )
}
