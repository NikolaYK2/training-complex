import { useEffect } from 'react'
import { SubmitHandler } from 'react-hook-form'

import { useAppDispatch } from '@/app/lib/hooksStore'
import { ImageIcon } from '@/assets/image/image/ImageIcon'
import { ButtonVariantType } from '@/commn/components/ui/button'
import { ControlledFileDownload } from '@/commn/components/ui/fileDonwold/ControlledFileDownload'
import { FIlePreview } from '@/commn/components/ui/filePreview/FIlePreview'
import { ControlledTextField } from '@/commn/components/ui/input/ControlledTextField'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { DialogModal } from '@/commn/components/ui/modals/dialog/DialogModal'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { useCreateEntityForm } from '@/commn/hooks/useCreateEntityForm'
import { deepNotEqual } from '@/commn/utils/deepNotEqual'
import { manageFeedback } from '@/commn/utils/manageFeedback'
import { tryCatch } from '@/commn/utils/tryCatch'
import { useUpdateCardMutation } from '@/services/cards/cardsService'
import { useCreateCardInDeckMutation } from '@/services/decks/decksService'
import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { z } from 'zod'

import s from './CreateUpdateCard.module.scss'

const createUpdateCardSchema = z.object({
  answer: z.string().trim().min(3, 'min 3 litters').max(500, 'max 500 litters'),
  answerImg: z.any().optional().nullable(),
  answerVideo: z
    .string()
    .trim()
    .min(3, 'min 3 litters')
    .max(500, 'max 500 litters')
    .optional()
    .or(z.literal('')),
  id: z.string(),
  question: z.string().trim().min(3, 'min 3 litters').max(500, 'max 500 litters'),
  questionImg: z.any().optional().nullable(),
  questionVideo: z
    .string()
    .trim()
    .min(3, 'min 3 litters')
    .max(500, 'max 500 litters')
    .optional()
    .or(z.literal('')),
})

export type FormTypeCreateUpdateCard = z.infer<typeof createUpdateCardSchema>

type MutationFunctionType =
  | ReturnType<typeof useCreateCardInDeckMutation>[0]
  | ReturnType<typeof useUpdateCardMutation>[0]
type Props = {
  answer?: string
  answerImg?: string
  buttonName?: 'add new card' | 'save change'
  callBack?: () => void
  cardId: string | undefined
  className?: string
  error: FetchBaseQueryError | SerializedError | undefined
  isError: boolean
  isLoading: boolean
  mutationFunction: MutationFunctionType
  question?: string
  questionImg?: string
  titleContent: string
  trigger?: string
  triggerVariant?: ButtonVariantType
}
export const CreateUpdateCard = ({
  answer,
  answerImg,
  buttonName,
  callBack,
  cardId,
  className,
  error,
  isError,
  isLoading,
  mutationFunction,
  question,
  questionImg,
  titleContent,
  trigger,
  triggerVariant,
}: Props) => {
  const {
    control,
    errors,
    filePreview,
    filePreviewFullScreen,
    handleCloseModal,
    handleFormReset,
    handleSubmit,
    isOpenModal,
    setFilePreview,
    setFilePreviewFullScreen,
    setValue,
  } = useCreateEntityForm({
    defaultValues: {
      answer: answer ?? '',
      answerImg: answerImg ?? null,
      answerVideo: '',
      id: cardId,
      question: question ?? '',
      questionImg: questionImg ?? null,
      questionVideo: '',
    },
    schema: createUpdateCardSchema,
  })

  const param = { answer, answerImg, id: cardId, question, questionImg }
  const dispatch = useAppDispatch()
  const onSubmit: SubmitHandler<FormTypeCreateUpdateCard> = async data => {
    const dataParam = {
      answer: data.answer,
      answerImg: data.answerImg,
      id: data.id,
      question: data.question,
      questionImg: data.questionImg,
    }

    return tryCatch(dispatch, async () => {
      if (deepNotEqual(param, dataParam)) {
        await mutationFunction(dataParam)
        handleCloseModal()
        buttonName === 'add new card' && handleFormReset()
        callBack && callBack?.()
      } else {
        handleCloseModal()
      }
    })
  }

  useEffect(() => {
    if (answerImg) {
      setFilePreview(prev => ({ ...prev, answerImg: answerImg }))
    }
    if (questionImg) {
      setFilePreview(prev => ({ ...prev, questionImg: questionImg }))
    }
    if (answer) {
      setValue('answer', answer)
    }
    if (question) {
      setValue('question', question)
    }
  }, [answerImg, setFilePreview, questionImg, answer, question, setValue])

  useEffect(() => {
    if (isError) {
      manageFeedback({ data: error, dispatch, type: 'error' })
    }
  }, [isError])

  return (
    <DialogModal
      buttonName={buttonName}
      className={className}
      isOpenModal={isOpenModal}
      onSubmit={handleSubmit(onSubmit)}
      setIsOpenModal={handleCloseModal}
      titleContent={titleContent}
      trigger={trigger}
      triggerVariant={triggerVariant}
    >
      {[
        <Loading isLoading={isLoading} key={'loafing'} />,
        <TextFormat key={'Question'} variant={'subtitle2'}>
          Question:
        </TextFormat>,
        <ControlledTextField
          control={control}
          errorMessage={errors?.question?.message}
          key={'input-question'}
          label={'Question?'}
          name={'question'}
          type={'text'}
        />,
        <FIlePreview
          filePreview={filePreview.questionImg}
          filePreviewFullScreen={filePreviewFullScreen}
          key={'input-file-question'}
          setFilePreview={questionImg => setFilePreview(prev => ({ ...prev, questionImg }))}
          setFilePreviewFullScreen={setFilePreviewFullScreen}
          setValue={setValue}
          valueKey={'questionImg'}
        />,
        <ControlledFileDownload
          buttonName={'upload image'}
          control={control}
          iconComponent={<ImageIcon className={s.imageIcon} />}
          key={'input-img-question'}
          name={'questionImg'}
          setFilePreview={questionImg => setFilePreview(prev => ({ ...prev, questionImg }))}
        />,

        <TextFormat key={'Answer'} style={{ marginTop: '4.979%' }} variant={'subtitle2'}>
          Answer:
        </TextFormat>,
        <ControlledTextField
          control={control}
          errorMessage={errors?.answer?.message}
          key={'input-answer'}
          label={'Question?'}
          name={'answer'}
          type={'text'}
        />,
        <FIlePreview
          filePreview={filePreview.answerImg}
          filePreviewFullScreen={filePreviewFullScreen}
          key={'input-file-answer'}
          setFilePreview={answerImg => setFilePreview(prev => ({ ...prev, answerImg }))}
          setFilePreviewFullScreen={setFilePreviewFullScreen}
          setValue={setValue}
          valueKey={'answerImg'}
        />,
        <ControlledFileDownload
          buttonName={'upload image'}
          control={control}
          iconComponent={<ImageIcon className={s.imageIcon} />}
          key={'input-img-answer'}
          name={'answerImg'}
          setFilePreview={answerImg => setFilePreview(prev => ({ ...prev, answerImg }))}
        />,
      ]}
    </DialogModal>
  )
}
