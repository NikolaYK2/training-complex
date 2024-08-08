import {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useUpdateDeckMutation,
} from '@/services/decks/decksService'

export const useDeckMutation = () => {
  const [
    createDeck,
    { error: errorCreateDeck, isError: isErrorCreateDeck, isLoading: isLoadingCreateDeck },
  ] = useCreateDeckMutation()
  const [
    updateDeck,
    { error: errUpdateDeck, isError: isErrUpdateDeck, isLoading: isLoadUpdateDeck },
  ] = useUpdateDeckMutation()

  const [
    deleteDeck,
    { error: errorDeleteDeck, isError: isErrorDeleteDeck, isLoading: isLoadingDeleteDeck },
  ] = useDeleteDeckMutation()

  return {
    createDeck,
    deleteDeck,
    errUpdateDeck,
    errorCreateDeck,
    errorDeleteDeck,
    isErrUpdateDeck,
    isErrorCreateDeck,
    isErrorDeleteDeck,
    isLoadUpdateDeck,
    isLoadingCreateDeck,
    isLoadingDeleteDeck,
    updateDeck,
  }
}
