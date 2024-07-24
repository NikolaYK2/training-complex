import { useNavigate } from 'react-router-dom'

import { Button } from '@/commn/components/ui/button'
import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { DECK_ROUTE } from '@/routes/Router'

import s from './BackTo.module.scss'

type Props = {
  nameLink: string
  saveHistoryPage?: null | string
}
export const BackTo = ({ nameLink, saveHistoryPage }: Props) => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(`${DECK_ROUTE}?page=${saveHistoryPage}`)
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
