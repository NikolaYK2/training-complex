import { KeyboardEvent, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import s from './FilePreviewPortal.module.scss'

type Props = {
  onClose: (value: boolean) => void
  src: null | string
}
export const FilePreviewPortal = ({ onClose, src }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus()
    }
  }, [])

  if (!src) {
    return null
  }
  const handleClose = () => onClose(false)

  const handleCloseKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      handleClose()
    }
  }

  return (
    <div
      className={s.container}
      onClick={handleClose}
      onKeyDown={handleCloseKey}
      ref={containerRef}
      tabIndex={0}
    >
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
