import { SubmitHandler } from 'react-hook-form'
import { NavigateFunction } from 'react-router-dom'

import { DeleteIcon } from '@/assets/image/delete/DeleteIcon'
import { extractTextParts } from '@/commn/components/ui/cardRemover/lib/extractTextParts'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { DialogModal } from '@/commn/components/ui/modals/dialog/DialogModal'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { useCreateEntityForm } from '@/commn/hooks/useCreateEntityForm'
import { useDeleteCardMutation } from '@/services/cards/cardsService'
import { useDeleteDeckMutation } from '@/services/decks/decksService'
import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { z } from 'zod'

import s from './CardRemover.module.scss'

const cardRemoverSchema = z.object({
  id: z.string().min(1),
})

type FormType = z.infer<typeof cardRemoverSchema>
type MutationDeckType =
  | ReturnType<typeof useDeleteCardMutation>[0]
  | ReturnType<typeof useDeleteDeckMutation>[0]
type Props = {
  buttonName?: string
  className?: string
  error: FetchBaseQueryError | SerializedError | undefined
  idCard: string
  isError: boolean
  isIcon?: boolean
  isLoading?: boolean
  mutationDeck: MutationDeckType
  navigate?: NavigateFunction
  text?: string
  titleName?: string
}
/**
 *
 *  text - если хотите выделить name, перед name  ставить "/"
 */
export const CardRemover = ({
  buttonName,
  className = '',
  error,
  idCard,
  isError,
  isIcon = false,
  isLoading,
  mutationDeck,
  navigate,
  text = '',
  titleName,
}: Props) => {
  const { handleCloseModal, handleSubmit } = useCreateEntityForm({
    defaultValues: {
      id: idCard,
    },
    schema: cardRemoverSchema,
  })

  const onSubmit: SubmitHandler<FormType> = async data => {
    if (data.id) {
      await mutationDeck({ id: data.id })
      navigate && navigate?.(-1)
    }
  }

  const { firstText, lastText, name } = extractTextParts(text ?? '')

  if (isError) {
    return <div>Error: {JSON.stringify(error)}</div>
  }

  return (
    <label className={`${s.containerCardRemover} ${className}`} onClick={e => e.stopPropagation()}>
      {isIcon && <DeleteIcon className={s.iconDelete} />}
      <DialogModal
        buttonName={buttonName}
        onSubmit={handleSubmit(onSubmit)}
        setIsOpenModal={handleCloseModal}
        titleContent={titleName}
        triggerVariant={'link'}
      >
        {[
          <Loading isLoading={isLoading} key={'loading'} />,
          <TextFormat key={'text-1'} style={{ display: '' }} variant={'body1'}>
            <span style={{ display: 'flex' }}>
              {firstText}
              <TextFormat
                style={{ marginLeft: '5px' }}
                variant={'subtitle1'}
              >{`${name}`}</TextFormat>
            </span>
            {lastText}
          </TextFormat>,
        ]}
      </DialogModal>
    </label>
  )
}
