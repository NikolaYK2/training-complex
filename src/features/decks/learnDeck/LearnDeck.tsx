import { MouseEvent } from 'react'

import { LearnIcon } from '@/assets/image/learn/LearnIcon'
import { useRedirectLearn } from '@/features/decks/learnDeck/lib/useRedirectLearn'

import s from './LearnDeck.module.scss'

type Props = {
  idCard: string
}
export const LearnDeck = ({ idCard }: Props) => {
  const { handleRedirectLearnClick } = useRedirectLearn({ idCard })

  const handleClick = (e: MouseEvent<HTMLLabelElement>) => {
    e.stopPropagation()
    handleRedirectLearnClick()
  }

  return (
    <label className={s.containerLearnDeck} onClick={handleClick}>
      <LearnIcon animation className={s.icon} />
    </label>
  )
}
