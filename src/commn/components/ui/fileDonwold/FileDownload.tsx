import { ChangeEvent, ReactElement } from 'react'

import { TextFormat } from '@/commn/components/ui/typography/TextFormat'

import s from './FileDownload.module.scss'

type Props = {
  buttonName?: string
  callback: (value: FormData) => void
  className?: string
  disabled?: boolean
  iconComponent: ReactElement
}

export const FileDownload = (props: Props) => {
  const { buttonName, callback, className, disabled, iconComponent } = props

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const formData: FormData = new FormData()

      formData.append('avatar', e.target.files[0])

      try {
        await callback?.(formData)
      } catch (error) {
        console.error('Error updating user data:', error)
      }
    }
  }

  return (
    <label className={`${s.editAvatar} ${className || ''}`}>
      <input className={s.input} disabled={disabled} onChange={handleFileChange} type={'file'} />
      {iconComponent}
      {buttonName && (
        <TextFormat style={{ textTransform: 'capitalize' }} variant={'subtitle2'}>
          {buttonName}
        </TextFormat>
      )}
    </label>
  )
}
