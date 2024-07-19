import { createPortal } from 'react-dom'

import s from './FilePreviewPortal.module.scss'

type Props = {
  onClose: (value: boolean) => void
  src: null | string
}
export const FilePreviewPortal = ({ onClose, src }: Props) => {
  if (!src) {
    return null
  }
  const handleClose = () => onClose(false)

  return (
    <div className={s.containerFilePreviewPortal} onClick={handleClose}>
      {createPortal(
        <div className={s.filePortalContainer}>
          <div className={s.filePreviewContent}>
            <img alt={'Preview'} src={src ? src : ''} />
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}
