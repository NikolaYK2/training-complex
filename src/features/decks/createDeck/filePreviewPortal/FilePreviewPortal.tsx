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

  return createPortal(
    <div className={s.filePortalContainer} onClick={handleClose}>
      <div className={s.filePreviewContent}>
        <img alt={'Preview'} src={src ? src : ''} />
      </div>
    </div>,
    document.documentElement
  )
}
