import { ReactElement, ReactNode } from 'react'

import { Button } from '@/commn/components/ui/button'
import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import * as Dialog from '@radix-ui/react-dialog'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'

import s from './DialogModal.module.scss'

type Props = {
  children?: ReactElement[]
  onSubmit?: any
  textH2?: string
  textP?: string
  trigger: string
}
// {[
//   <Select
//     key={1}
//     options={[
//       { id: 1, value: 'Select-box' },
//       { id: 2, value: 'hi maloy' },
//       { id: 3, value: 'Sam maloy' },
//     ]}
//   />,
//   <TextField key={'Input1'} type={'text'} />,
//   <TextField key={'Input2'} type={'password'} />,
//   <TickBox key={'TickBox'} label={'opana!'} />,
// ]}

export const DialogModal = ({ children, onSubmit, textH2, textP, trigger }: Props) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant={'primary'}>{trigger}</Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={s.overlayBackground} />
        <Dialog.Content className={s.content}>
          <IsVisibleTitle isCheck={!textH2}>
            <Dialog.Title className={`${s.titleH2}`}>
              {textH2}
              <Dialog.Close asChild>
                <button className={s.buttonClose} type={'button'}>
                  <IconSvg name={'close'} />
                </button>
              </Dialog.Close>
            </Dialog.Title>
          </IsVisibleTitle>
          <Dialog.Description
            className={`${s.descriptionP}`}
            style={{ padding: !textP ? '0' : '' }}
          >
            {textP}
          </Dialog.Description>
          <div className={s.item} style={{ padding: !children ? '0' : '' }}>
            {children?.map(child => (
              <fieldset className={s.fieldset} key={child.key}>
                <label>{child}</label>
              </fieldset>
            )) ||
              (!textH2 && !textP && <div className={s.background} />)}
          </div>
          {!onSubmit && (
            <div className={s.buttonsBlock}>
              <Dialog.Close asChild>
                <Button variant={'secondary'}>
                  <TextFormat variant={'subtitle2'}>cansel</TextFormat>{' '}
                </Button>
              </Dialog.Close>

              <Button>
                <TextFormat variant={'subtitle2'}>add new pack</TextFormat>
              </Button>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

type PropsTitleType = {
  children: ReactNode
  isCheck: boolean
}
const IsVisibleTitle = ({ children, isCheck }: PropsTitleType) => {
  return <>{isCheck ? <VisuallyHidden.Root>{children}</VisuallyHidden.Root> : <>{children}</>}</>
}
