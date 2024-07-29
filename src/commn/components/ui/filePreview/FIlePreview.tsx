import { UseFormSetValue } from 'react-hook-form'

import { FullscreenIcon } from '@/assets/image/fuuscreen/FullscreenIcon'
import { FilePreviewPortal } from '@/commn/components/ui/filePreviewPortal/FilePreviewPortal'

import s from './FIlePreview.module.scss'

type Props = {
  filePreview: null | string
  filePreviewFullScreen: boolean
  setFilePreview: (filePreview: null | string) => void
  setFilePreviewFullScreen: (isOpen: boolean) => void
  setValue?: UseFormSetValue<{ cover?: File | null; isPrivate: boolean; name: string }>
}
export const FIlePreview = ({
  filePreview,
  filePreviewFullScreen,
  setFilePreview,
  setFilePreviewFullScreen,
  setValue,
}: Props) => {
  const handleOpenFullscreen = () => {
    setFilePreviewFullScreen(true)
  }

  return (
    <div className={s.containerFilePreview}>
      {filePreview && (
        <div className={s.filePreview}>
          <img alt={'image'} src={filePreview} />
          <div
            className={s.close}
            onClick={e => {
              e.stopPropagation()
              setFilePreview(null)
              setValue?.('cover', null)
            }}
          >
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
