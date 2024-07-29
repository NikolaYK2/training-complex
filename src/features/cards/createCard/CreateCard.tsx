import { SubmitHandler } from 'react-hook-form'

import { ImageIcon } from '@/assets/image/image/ImageIcon'
import { ControlledFileDownload } from '@/commn/components/ui/fileDonwold/ControlledFileDownload'
import { FIlePreview } from '@/commn/components/ui/filePreview/FIlePreview'
import { ControlledTextField } from '@/commn/components/ui/input/ControlledTextField'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { DialogModal } from '@/commn/components/ui/modals/dialog/DialogModal'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { useCreateEntityForm } from '@/commn/hooks/useCreateEntityForm'
import { useCreateCardInDeckMutation } from '@/services/decks/decksService'
import { z } from 'zod'

import s from './CreateCard.module.scss'

const createCardSchema = z.object({
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

type FormType = z.infer<typeof createCardSchema>

type Props = {
  cardId: string | undefined
}
export const CreateCard = ({ cardId }: Props) => {
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
  } = useCreateEntityForm({
    defaultValues: {
      answer: '',
      answerImg: null,
      answerVideo: '',
      id: cardId ?? '',
      question: '',
      questionImg: null,
      questionVideo: '',
    },
    schema: createCardSchema,
  })
  const [
    createCardInDeck,
    { error: errorCreateCard, isError: isErrorCreatedCard, isLoading: isLoadingCreateCard },
  ] = useCreateCardInDeckMutation()
  const onSubmit: SubmitHandler<FormType> = async data => {
    try {
      await createCardInDeck({
        answer: data.answer,
        answerImg: data.answerImg,
        id: data.id,
        question: data.question,
        questionImg: data.questionImg,
      })
      handleFormReset()
    } catch (e) {
      console.error('Error creating deck: ', e)
    }
  }

  if (isLoadingCreateCard) {
    return <Loading />
  }
  if (isErrorCreatedCard) {
    return <div>Error: {JSON.stringify(errorCreateCard)}</div>
  }

  return (
    <DialogModal
      isOpenModal={isOpenModal}
      onSubmit={handleSubmit(onSubmit)}
      setIsOpenModal={handleCloseModal}
      titleContent={'add new card'}
      trigger={'add new card'}
    >
      {[
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
