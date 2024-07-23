import { useState } from 'react'
import { DefaultValues, FieldValues, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { ZodSchema } from 'zod'

type UseCreateEntityFormProps<T extends FieldValues> = {
  defaultValues: DefaultValues<T>
  schema: ZodSchema<T>
}
export const useCreateEntityForm = <T extends FieldValues>({
  defaultValues,
  schema,
}: UseCreateEntityFormProps<T>) => {
  // State for storing the URL of the image
  const [filePreview, setFilePreview] = useState<null | string>(null)
  //state for previewing the picture
  const [filePreviewFullScreen, setFilePreviewFullScreen] = useState(false)
  // controlled modal window
  const [isOpenModal, setIsOpenModal] = useState(false)

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<T>({
    defaultValues,
    resolver: zodResolver(schema),
  })
  // Reset the form
  const handleFormReset = () => {
    setFilePreview(null)
    setIsOpenModal(false)
    setFilePreviewFullScreen(false)
    reset()
  }
  // Reset preview fullScreen when modal window is closed
  const handleCloseModal = () => {
    setIsOpenModal(!isOpenModal)
    setFilePreviewFullScreen(false)
  }

  return {
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
  }
}
