import { SubmitHandler } from 'react-hook-form'

import { DialogModal } from '@/commn/components/ui/modals/dialog/DialogModal'
import { useCreateEntityForm } from '@/commn/hooks/useCreateEntityForm'
import { z } from 'zod'

const createCardSchema = z.object({
  answer: z.string().trim().min(3, 'min 3 litters').max(500, 'max 500 litters'),
  answerImg: z.any().optional().nullable(),
  answerVideo: z.string().trim().min(3, 'min 3 litters').max(500, 'max 500 litters'),
  id: z.string(),
  question: z.string().trim().min(3, 'min 3 litters').max(500, 'max 500 litters'),
  questionImg: z.any().optional().nullable(),
  questionVideo: z.string().trim().min(3, 'min 3 litters').max(500, 'max 500 litters'),
})

type FormType = z.infer<typeof createCardSchema>

export const CreateCard = () => {
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
      answerImg: '',
      answerVideo: '',
      id: '',
      question: '',
      questionImg: '',
      questionVideo: '',
    },
    schema: createCardSchema,
  })
  const onSubmit: SubmitHandler<FormType> = async data => {
    try {
      // handleClose()
      console.log(data)
    } catch (e) {
      console.error('Error creating deck: ', e)
    }
  }

  return (
    <DialogModal
      isOpenModal={isOpenModal}
      onSubmit={handleSubmit(onSubmit)}
      setIsOpenModal={handleCloseModal}
      textH2={'add new card'}
      trigger={'add new card'}
    ></DialogModal>
  )
}
