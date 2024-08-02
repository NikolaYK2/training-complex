import { useNavigate } from 'react-router-dom'

import { Button } from '@/commn/components/ui/button'
import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'

import s from './BackTo.module.scss'

type Props = {
  nameLink: string
  saveClickPage?: null | number
}
export const BackTo = ({ nameLink, saveClickPage }: Props) => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    if (saveClickPage) {
      navigate(-saveClickPage - 1)
    } else {
      navigate(-1)
    }
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
