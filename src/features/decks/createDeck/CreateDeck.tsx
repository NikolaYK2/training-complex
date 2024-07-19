import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { ImageIcon } from '@/assets/image/image/ImageIcon'
import { TickBox } from '@/commn/components/ui/checkBox/TickBox'
import { ControlledFileDownload } from '@/commn/components/ui/fileDonwold/ControlledFileDownload'
import { FIlePreview } from '@/commn/components/ui/filePreview/FIlePreview'
import { ControlledTextField } from '@/commn/components/ui/input/ControlledTextField'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { DialogModal } from '@/commn/components/ui/modals/dialog/DialogModal'
import { useCreateDeckMutation } from '@/services/decks/decksService'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './CreateDeck.module.scss'

const createDeckSchema = z.object({
  cover: z.any().optional().nullable(),
  isPrivate: z.boolean().default(false),
  name: z.string().trim().min(3, 'min 3 litters'),
})

type FormType = z.infer<typeof createDeckSchema>
export const CreateDeck = () => {
  const [filePreview, setFilePreview] = useState<null | string>(null) // Состояние для хранения URL изображения
  const [filePreviewFullScreen, setFilePreviewFullScreen] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [createDeck, { error, isError, isLoading: isLoadingCreatedDeck }] = useCreateDeckMutation()

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormType>({
    defaultValues: {
      cover: null,
      isPrivate: false,
      name: '',
    },
    resolver: zodResolver(createDeckSchema),
  })

  // Очистка состояния при успешной отправке формы
  const handleClose = () => {
    setFilePreview(null)
    setIsOpenModal(false)
    setFilePreviewFullScreen(false)
    reset() // Сброс формы
  }
  const handleCloseModal = () => {
    setIsOpenModal(!isOpenModal) //закрытие модалки
    setFilePreviewFullScreen(false)
  }
  const onSubmit: SubmitHandler<FormType> = async data => {
    try {
      await createDeck({ cover: data.cover, isPrivate: data.isPrivate, name: data.name })
      handleClose()
    } catch (e) {
      console.error('Error creating deck: ', e)
    }

    // try {
    //
    //   const formData = new FormData()
    //
    //   // Добавляем поля в FormData
    //   formData.append('name', data.name)
    //   formData.append('isPrivate', data.isPrivate.toString())
    //
    //   if (data.cover instanceof File) {
    //     // Проверка, если это файл
    //     formData.append('cover', data.cover)
    //   }
    //
    //   await createDeck(formData)
    //   handleClose()
    // } catch (e) {
    //   console.error('Error creating deck: ', e)
    // }
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
      trigger={'add new card'}
    >
      {[
        <div key={'loading'}>{isLoadingCreatedDeck && <Loading />}</div>,
        <ControlledTextField
          control={control}
          errorMessage={errors.name?.message}
          key={'input-name'}
          label={'Name Pack'}
          name={'name'}
          type={'text'}
        />,

        <FIlePreview
          filePreview={filePreview}
          filePreviewFullScreen={filePreviewFullScreen}
          key={'file-preview'}
          setFilePreview={setFilePreview}
          setFilePreviewFullScreen={setFilePreviewFullScreen}
        />,

        <ControlledFileDownload
          buttonName={'upload image'}
          className={s.newDeck}
          control={control}
          iconComponent={<ImageIcon />}
          key={'input-file'}
          name={'cover'}
          setFilePreview={setFilePreview}
        />,
        <TickBox key={'TickBox'} label={'opana!'} />,
      ]}
    </DialogModal>
  )
}
