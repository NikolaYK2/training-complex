import { FormEventHandler, ReactElement, ReactNode } from 'react'

import { Button, ButtonVariantType } from '@/commn/components/ui/button'
import { IconNameType, IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import * as Dialog from '@radix-ui/react-dialog'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'

import s from './DialogModal.module.scss'

type DialogModalProps = {
  children?: ReactElement[]
  isOpenModal: boolean
  onSubmit?: FormEventHandler<HTMLFormElement>
  setIsOpenModal: (open: boolean) => void
  textH2?: string
  textP?: string
  trigger?: string
  triggerIcon?: IconNameType
  triggerVariant?: ButtonVariantType
}
/**
 * Example usage of children prop:
 *
 * const children = {[
 *   <Select
 *     key={1}
 *      options={[
 *       { id: 1, value: 'Select-box' },
 *       { id: 2, value: 'hi maloy' },
 *       { id: 3, value: 'Sam maloy' },
 *     ]}
 *    />,
 *   <TextField key={'Input1'} type={'text'} />,
 *   <TextField key={'Input2'} type={'password'} />,
 *   <TickBox key={'TickBox'} label={'opana!'} />,
 * ]}
 *
 * Usage:
 * <DialogModal>
 *   {children}
 * </DialogModal>
 */
export const DialogModal = ({
  children,
  isOpenModal, //указываем условия при котором закрываетя модалка
  onSubmit,
  setIsOpenModal, //управление открытия закрытия модал окна
  textH2,
  textP,
  trigger,
  triggerIcon,
  triggerVariant,
}: DialogModalProps) => {
  return (
    <Dialog.Root onOpenChange={setIsOpenModal} open={isOpenModal}>
      <Dialog.Trigger asChild>
        <Button variant={triggerVariant}>
          {triggerIcon && <IconSvg name={triggerIcon as IconNameType} />}
          <TextFormat variant={'subtitle2'}>{trigger}</TextFormat>
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={s.overlayBackground} />
        <Dialog.Content className={s.content}>
          <VisibilityToggle isHidden={!textH2}>
            <Dialog.Title className={`${s.titleH2Block}`}>
              <span className={s.titleH2}>{textH2}</span>
              <Dialog.Close asChild>
                <button className={s.buttonClose} type={'button'}>
                  <IconSvg name={'close'} />
                </button>
              </Dialog.Close>
            </Dialog.Title>
          </VisibilityToggle>

          <VisibilityToggle isHidden={!textP}>
            <Dialog.Description className={`${s.descriptionP}`}>{textP}</Dialog.Description>
          </VisibilityToggle>

          <VisibilityToggle isHidden={!children}>
            <form className={s.item} onSubmit={onSubmit}>
              {children?.map(child => (
                <fieldset className={s.fieldset} key={child.key}>
                  <label>{child}</label>
                </fieldset>
              )) ||
                (!textH2 && !textP && <div className={s.background} />)}
              {onSubmit && (
                <div className={s.buttonsBlock}>
                  <Dialog.Close asChild>
                    <Button variant={'secondary'}>
                      <TextFormat variant={'subtitle2'}>cancel</TextFormat>{' '}
                    </Button>
                  </Dialog.Close>

                  <Button>
                    <TextFormat variant={'subtitle2'}>add new pack</TextFormat>
                  </Button>
                </div>
              )}
            </form>
          </VisibilityToggle>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

type PropsTitleType = {
  children: ReactNode
  isHidden: boolean
}
const VisibilityToggle = ({ children, isHidden }: PropsTitleType) => {
  return <>{isHidden ? <VisuallyHidden.Root>{children}</VisuallyHidden.Root> : <>{children}</>}</>
}
