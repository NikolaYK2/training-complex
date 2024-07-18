import { Button } from '@/commn/components/ui/button'
import { useCreateDeckMutation } from '@/services/decks/decksService'

export const CreateDeck = () => {
  const [createDeck, { error, isError, isLoading: isLoadingCreatedDeck }] = useCreateDeckMutation()

  if (isError) {
    return <div>Error: {JSON.stringify(error)}</div>
  }

  return (
    <Button disabled={isLoadingCreatedDeck} onClick={() => createDeck({ name: '123' })}>
      {isLoadingCreatedDeck ? 'loading' : 'Add new deck'}
    </Button>
  )
}
