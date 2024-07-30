import { FormEventHandler, ReactElement, ReactNode } from 'react'

import { Button, ButtonVariantType } from '@/commn/components/ui/button'
import { IconNameType, IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import * as Dialog from '@radix-ui/react-dialog'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'

import s from './DialogModal.module.scss'

type DialogModalProps = {
  buttonName?: string
  children?: ReactElement[]
  className?: string
  isOpenModal?: boolean
  onSubmit?: FormEventHandler<HTMLFormElement>
  setIsOpenModal?: (open: boolean) => void
  textDescription?: string
  titleContent?: string
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
  buttonName,
  children,
  className = '',
  isOpenModal, //указываем условия при котором закрываетя модалка
  onSubmit,
  setIsOpenModal, //управление открытия закрытия модал окна
  textDescription,
  titleContent,
  trigger,
  triggerIcon,
  triggerVariant = 'primary',
}: DialogModalProps) => {
  return (
    <Dialog.Root onOpenChange={setIsOpenModal} open={isOpenModal}>
      <Dialog.Trigger asChild className={className}>
        <Button variant={triggerVariant}>
          {triggerIcon && <IconSvg name={triggerIcon as IconNameType} />}
          <TextFormat variant={'subtitle2'}>{trigger}</TextFormat>
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={s.overlayBackground} />
        <Dialog.Content className={s.content}>
          <VisibilityToggle isHidden={!titleContent}>
            <Dialog.Title className={`${s.titleH2Block}`}>
              <span className={s.titleH2}>{titleContent}</span>
              <Dialog.Close asChild>
                <button className={s.buttonClose} type={'button'}>
                  <IconSvg name={'close'} />
                </button>
              </Dialog.Close>
            </Dialog.Title>
          </VisibilityToggle>

          <VisibilityToggle isHidden={!textDescription}>
            <Dialog.Description className={`${s.descriptionP}`}>
              {textDescription}
            </Dialog.Description>
          </VisibilityToggle>

          <VisibilityToggle isHidden={!children}>
            <form className={s.item} onSubmit={onSubmit}>
              {children?.map(child => (
                <fieldset className={s.fieldset} key={child.key}>
                  <label>{child}</label>
                </fieldset>
              )) ||
                (!titleContent && !textDescription && <div className={s.background} />)}
              {onSubmit && (
                <div className={s.buttonsBlock}>
                  <Dialog.Close asChild>
                    <Button variant={'secondary'}>
                      <TextFormat variant={'subtitle2'}>cancel</TextFormat>{' '}
                    </Button>
                  </Dialog.Close>

                  <Button>
                    <TextFormat variant={'subtitle2'}>{buttonName}</TextFormat>
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
