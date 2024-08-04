import { CreateUpdateDeck } from '@/features/decks/createUpdateDeck/CreateUpdateDeck'
import { useDeckMutation } from '@/services/lib/deck/useDeckMutation'

type Props = {
  cover: null | string | undefined
  idCard: string | undefined
  isPrivateCard: boolean | undefined
  name: string | undefined
}
export const EditCards = ({ cover, idCard, isPrivateCard, name }: Props) => {
  const { errUpdateDeck, isErrUpdateDeck, isLoadUpdateDeck, updateDeck } = useDeckMutation()

  return (
    <CreateUpdateDeck
      buttonName={'change save'}
      coverDeckBy={cover}
      error={errUpdateDeck}
      idCard={idCard}
      isError={isErrUpdateDeck}
      isLoading={isLoadUpdateDeck}
      isPrivateCard={isPrivateCard}
      method={'PATCH'}
      mutationFunction={updateDeck}
      nameDeckBy={name}
      titleContent={'edit pack'}
      triggerVariant={'link'}
    />
  )
}
