import { EditIcon } from '@/assets/image/edit/EditIcon'
import { CreateUpdateCard } from '@/features/cards/createUpdateCard/CreateUpdateCard'
import { useUpdateCardMutation } from '@/services/cards/cardsService'
import { CardsResponse } from '@/services/decks/DecksTypes'

import s from './EditCard.module.scss'

type Props = {
  answer: string
  answerImg: string
  className?: string
  dataGetCardById?: CardsResponse | undefined
  idCard?: string
  question: string
  questionImg: string
}
export const EditCard = ({
  answer,
  answerImg,
  className = '',
  idCard,
  question,
  questionImg,
}: Props) => {
  const [
    updateCard,
    { error: errorUpdateCard, isError: isErrorUpdateCard, isLoading: isLoadingUpdateCard },
  ] = useUpdateCardMutation()

  return (
    <label className={`${s.containerEditCard} ${className}`}>
      <EditIcon className={s.icon} />
      <CreateUpdateCard
        answer={answer}
        answerImg={answerImg}
        buttonName={'save change'}
        cardId={idCard}
        className={s.updateCard}
        error={errorUpdateCard}
        isError={isErrorUpdateCard}
        isLoading={isLoadingUpdateCard}
        mutationFunction={updateCard}
        question={question}
        questionImg={questionImg}
        titleContent={'edit Card'}
        triggerVariant={'link'}
      />
    </label>
  )
}
