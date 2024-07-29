import { CreateUpdateDeck } from '@/commn/components/ui/createUpdateDeck/CreateUpdateDeck'
import { useCreateUpdateDeckMutation } from '@/services/decks/decksService'

type Props = {
  cover: null | string | undefined
  idCard: string | undefined
  name: string | undefined
}
export const EditCard = ({ cover, idCard, name }: Props) => {
  const [
    updateDeck,
    { error: errUpdateDeck, isError: isErrUpdateDeck, isLoading: isLoadUpdateDeck },
  ] = useCreateUpdateDeckMutation()

  return (
    <CreateUpdateDeck
      coverDeckBy={cover}
      error={errUpdateDeck}
      idCard={idCard}
      isError={isErrUpdateDeck}
      isLoading={isLoadUpdateDeck}
      method={'PATCH'}
      mutationFunction={updateDeck}
      nameDeckBy={name}
      triggerVariant={'link'}
    />
  )
}
