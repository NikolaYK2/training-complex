import { useEffect, useRef, useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/app/lib/hooksStore'
import { appSelectorMessage, appSelectorMessageType } from '@/app/model/selectorApp'
import { appAction } from '@/app/model/sliceApp'
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
  const timerRef = useRef(0)

  useEffect(() => {
    let timerId = timerRef.current

    setOpen(false)

    if (message) {
      setOpen(true)
      window.clearTimeout(timerId)
      timerId = window.setTimeout(() => {
        setOpen(false)
        dispatch(appAction.clearStatusMessage())
      }, 3000)
    }

    return () => clearTimeout(timerId)
  }, [message])

  return (
    <Toast.Provider swipeDirection={'right'}>
      <Toast.Root className={s.snackRoot} onOpenChange={setOpen} open={open}>
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
