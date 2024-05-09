import { FC, ReactElement } from 'react'

import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import * as Dialog from '@radix-ui/react-dialog'

import s from './DialogModal.module.scss'

type Props = {
  children?: ReactElement[]
  textH2?: string
  textP?: string
}
export const DialogModal: FC<Props> = ({ children, textH2, textP }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>Value</button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={s.overlayBackground} />
        <Dialog.Content className={s.content}>
          <Dialog.Title className={s.titleH2}>
            {textH2}
            <Dialog.Close asChild>
              {textH2 && (
                <button className={s.buttonClose}>
                  <IconSvg name={'close'} />
                </button>
              )}
            </Dialog.Close>
          </Dialog.Title>
          <Dialog.Description className={`${s.descriptionP} ${textH2 && textP && s.borderTop}`}>
            {textP}
          </Dialog.Description>
          {children?.map(child => (
            <fieldset className={s.fieldset} key={child.key}>
              <label>{child}</label>
            </fieldset>
          )) ||
            (!textH2 && !textP && <div className={s.background}></div>)}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
