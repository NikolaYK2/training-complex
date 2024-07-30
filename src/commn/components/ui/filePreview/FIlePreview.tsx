import { MouseEvent } from 'react'
import { FieldValues, Path, PathValue, UseFormSetValue } from 'react-hook-form'

import { FullscreenIcon } from '@/assets/image/fuuscreen/FullscreenIcon'
import { FilePreviewPortal } from '@/commn/components/ui/filePreviewPortal/FilePreviewPortal'

import s from './FIlePreview.module.scss'

type Props<T extends FieldValues> = {
  filePreview: null | string
  filePreviewFullScreen: boolean
  setFilePreview: (filePreview: null | string) => void
  setFilePreviewFullScreen: (isOpen: boolean) => void
  setValue?: UseFormSetValue<T>
  valueKey?: Path<T>
}
export const FIlePreview = <T extends FieldValues>({
  filePreview,
  filePreviewFullScreen,
  setFilePreview,
  setFilePreviewFullScreen,
  setValue,
  valueKey,
}: Props<T>) => {
  const handleOpenFullscreen = () => {
    setFilePreviewFullScreen(true)
  }
  const handleDeleteImg = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setFilePreview(null)
    if (valueKey) {
      setValue?.(valueKey, null as PathValue<T, Path<T>>)
    }
  }

  return (
    <div className={s.containerFilePreview}>
      {filePreview && (
        <div className={s.filePreview}>
          <img alt={'image'} src={filePreview} />
          <div className={s.close} onClick={handleDeleteImg}>
            ❌
          </div>

          <div className={s.open} onClick={handleOpenFullscreen}>
            <FullscreenIcon />
          </div>
        </div>
      )}

      {filePreviewFullScreen && (
        <FilePreviewPortal onClose={setFilePreviewFullScreen} src={filePreview} />
      )}
    </div>
  )
}
