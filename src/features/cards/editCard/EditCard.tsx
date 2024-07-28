import { CreateUpdateDeck } from '@/commn/components/ui/createUpdateDeck/CreateUpdateDeck'
import { useCreateUpdateDeckMutation } from '@/services/decks/decksService'

export const EditCard = () => {
  const [
    updateDeck,
    { error: errUpdateDeck, isError: isErrUpdateDeck, isLoading: isLoadUpdateDeck },
  ] = useCreateUpdateDeckMutation()

  return (
    <CreateUpdateDeck
      error={errUpdateDeck}
      isError={isErrUpdateDeck}
      isLoading={isLoadUpdateDeck}
      method={'PATCH'}
      mutationFunction={updateDeck}
      triggerVariant={'link'}
    />
  )
}
