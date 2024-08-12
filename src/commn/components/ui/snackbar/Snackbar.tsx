import { useEffect, useRef, useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/app/lib/hooksStore'
import { appSelectorMessage, appSelectorMessageType } from '@/app/model/selectorApp'
import { MessageType, appAction } from '@/app/model/sliceApp'
import { TickIcon } from '@/assets/image/tick/TickIcon'
import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import * as Toast from '@radix-ui/react-toast'

import s from './Snackbar.module.scss'

export const Snackbar = () => {
  const [open, setOpen] = useState(false)
  const message = useAppSelector(appSelectorMessage)
  const messageType = useAppSelector(appSelectorMessageType)

  const dispatch = useAppDispatch()
  const timerRef = useRef<number | undefined>(0)

  useEffect(() => {
    if (message) {
      setOpen(true)
      timerRef.current = window.setTimeout(() => {
        setOpen(false)
        dispatch(appAction.clearStatusMessage())
      }, 5000)
    }

    return () => clearTimeout(timerRef.current)
  }, [message, dispatch])

  return (
    <Toast.Provider swipeDirection={'right'}>
      <Toast.Root
        className={`${s.snackRoot} ${styles(messageType)}`}
        onOpenChange={setOpen}
        open={open}
      >
        <Toast.Description asChild className={s.descriptionBlock}>
          <div className={s.description}>
            {messageType === 'success' && <TickIcon className={s.iconOk} />}
            <TextFormat variant={'body1'}>{message}</TextFormat>
          </div>
        </Toast.Description>
        <Toast.Close aria-label={'Close'} className={s.btnClose}>
          <IconSvg name={'close'} />
        </Toast.Close>
      </Toast.Root>

      <Toast.Viewport className={s.viewport} />
    </Toast.Provider>
  )
}

const styles = (type: MessageType | null) => {
  switch (type) {
    case 'success':
      return s.success
    case 'error':
      return s.error
    default:
      return ''
  }
}
