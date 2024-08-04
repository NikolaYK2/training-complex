import { ChangeEvent, ReactElement, forwardRef, useState } from 'react'

import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { useUpdateUserDataMutation } from '@/services/auth/authService'

import s from './FileDownload.module.scss'

type MutationType = ReturnType<typeof useUpdateUserDataMutation>[0]
export type FiledDownloadProps = {
  buttonName?: string
  className?: string
  disabled?: boolean
  iconComponent: ReactElement
  mutation?: MutationType
  name: string
  onChange?: (file: File) => void
  setFilePreview?: (file: null | string) => void
}

export const FileDownload = forwardRef<HTMLInputElement, FiledDownloadProps>((props, ref) => {
  const {
    buttonName,
    className,
    disabled,
    iconComponent,
    mutation,
    name,
    onChange,
    setFilePreview,
    ...rest
  } = props
  const [fileInputKey, setFileInputKey] = useState(0)

  // Обработчик изменения файла
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const formData: FormData = new FormData() // Создание нового FormData
      const file = e.target.files[0] // Получение выбранного файла

      formData.append(name, file) // Добавление файла в FormData

      if (file) {
        //Создание FileReader для чтения файла и создания URL
        const reader = new FileReader()

        reader.onloadend = () => {
          setFilePreview?.(reader.result as string) // Сохранение URL в состоянии
          setFileInputKey(prev => prev + 1) //для предотвращения кеширования браузером, в случаи повторной загрузки той же картинки
        }
        reader.readAsDataURL(file) // Чтение файла как Data URL
        onChange?.(file)
      }

      mutation?.({ avatar: file })
    }
  }

  return (
    <label className={`${s.editAvatar} ${className || ''}`}>
      <input
        className={s.input}
        disabled={disabled}
        key={fileInputKey}
        onChange={handleFileChange}
        ref={ref}
        type={'file'}
        {...rest}
      />
      {iconComponent}
      {buttonName && (
        <TextFormat style={{ textTransform: 'capitalize' }} variant={'subtitle2'}>
          {buttonName}
        </TextFormat>
      )}
    </label>
  )
})
