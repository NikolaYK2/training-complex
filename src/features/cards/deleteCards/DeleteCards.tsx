import { SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Loading } from '@/commn/components/ui/loading/Loading'
import { DialogModal } from '@/commn/components/ui/modals/dialog/DialogModal'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { useCreateEntityForm } from '@/commn/hooks/useCreateEntityForm'
import { useDeleteDeckMutation } from '@/services/decks/decksService'
import { z } from 'zod'

const deleteCardSchema = z.object({
  id: z.string(),
})

type FormType = z.infer<typeof deleteCardSchema>
type Props = {
  idCard: string | undefined
  nameDeck: string | undefined
}
export const DeleteCards = ({ idCard, nameDeck }: Props) => {
  const navigate = useNavigate()

  const { handleSubmit } = useCreateEntityForm({
    defaultValues: {
      id: idCard ?? '',
    },
    schema: deleteCardSchema,
  })
  const [
    deleteDeck,
    { error: errorDeleteDeck, isError: isErrorDeleteDeck, isLoading: isLoadingDeleteDeck },
  ] = useDeleteDeckMutation()

  const onSubmit: SubmitHandler<FormType> = async data => {
    if (data.id) {
      await deleteDeck({ id: data.id })
      navigate(-1)
    }
  }

  if (isErrorDeleteDeck) {
    return <div>Error: {JSON.stringify(errorDeleteDeck)}</div>
  }
  if (isLoadingDeleteDeck) {
    return <Loading />
  }

  return (
    <DialogModal
      buttonName={'delete card'}
      onSubmit={handleSubmit(onSubmit)}
      titleContent={'delete pack'}
      triggerVariant={'link'}
    >
      {[
        <TextFormat key={'text-1'} variant={'subtitle1'}>
          {`Do you really want to remove ${nameDeck ? nameDeck : 'name deck'} `}
        </TextFormat>,
        <TextFormat key={'text-2'} variant={'subtitle1'}>
          All cards will be deleted.
        </TextFormat>,
      ]}
    </DialogModal>
  )
}
