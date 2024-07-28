import { SubmitHandler } from 'react-hook-form'

import { ImageIcon } from '@/assets/image/image/ImageIcon'
import { ButtonVariantType } from '@/commn/components/ui/button'
import { ControlledCheckbox } from '@/commn/components/ui/checkBox/ControlledCheckbox'
import { ControlledFileDownload } from '@/commn/components/ui/fileDonwold/ControlledFileDownload'
import { FIlePreview } from '@/commn/components/ui/filePreview/FIlePreview'
import { ControlledTextField } from '@/commn/components/ui/input/ControlledTextField'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { DialogModal } from '@/commn/components/ui/modals/dialog/DialogModal'
import { useCreateEntityForm } from '@/commn/hooks/useCreateEntityForm'
import { useCreateUpdateDeckMutation } from '@/services/decks/decksService'
import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { z } from 'zod'

import s from './CreateUpdateDeck.module.scss'

const createDeckSchema = z.object({
  cover: z.any().optional().nullable(),
  isPrivate: z.boolean(),
  name: z.string().trim().min(3, 'min 3 litters'),
})

type FormType = z.infer<typeof createDeckSchema>
type CreateUpdateDeckMutationTrigger = ReturnType<typeof useCreateUpdateDeckMutation>[0]
type Props = {
  className?: string
  error: FetchBaseQueryError | SerializedError | undefined
  isError: boolean
  isLoading: boolean
  method: 'PATCH' | 'POST'
  mutationFunction: CreateUpdateDeckMutationTrigger
  nameTrigger?: string
  triggerVariant?: ButtonVariantType
}
export const CreateUpdateDeck = ({
  error,
  isError,
  isLoading,
  method,
  mutationFunction,
  nameTrigger,
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
  } = useCreateEntityForm({
    defaultValues: {
      cover: null,
      isPrivate: false,
      name: '',
    },
    schema: createDeckSchema,
  })
  const onSubmit: SubmitHandler<FormType> = async data => {
    try {
      await mutationFunction({
        cover: data.cover,
        isPrivate: data.isPrivate,
        method,
        name: data.name,
      })
      handleFormReset()
    } catch (e) {
      console.error('Error creating deck: ', e)
    }
  }

  if (isError) {
    return <div>Error: {JSON.stringify(error)}</div>
  }

  return (
    <DialogModal
      isOpenModal={isOpenModal}
      onSubmit={handleSubmit(onSubmit)}
      setIsOpenModal={handleCloseModal}
      textH2={'add new deck'}
      trigger={nameTrigger}
      triggerVariant={triggerVariant}
    >
      {[
        <div key={'loading'}>{isLoading && <Loading />}</div>,
        <ControlledTextField
          control={control}
          errorMessage={errors.name?.message}
          key={'input-name'}
          label={'Name Pack'}
          name={'name'}
          type={'text'}
        />,

        <FIlePreview
          filePreview={filePreview.fileImg}
          filePreviewFullScreen={filePreviewFullScreen}
          key={'file-preview'}
          setFilePreview={cover => setFilePreview(prev => ({ ...prev, fileImg: cover }))}
          setFilePreviewFullScreen={setFilePreviewFullScreen}
        />,

        <ControlledFileDownload
          buttonName={'upload image'}
          className={s.newDeck}
          control={control}
          iconComponent={<ImageIcon className={s.imageIcon} />}
          key={'input-file'}
          name={'cover'}
          setFilePreview={cover => setFilePreview(prev => ({ ...prev, fileImg: cover }))}
        />,
        <ControlledCheckbox
          control={control}
          key={'check-box'}
          label={'Private pack'}
          name={'isPrivate'}
        />,
      ]}
    </DialogModal>
  )
}
