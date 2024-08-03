import { ElementRef, ReactNode, forwardRef } from 'react'

import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import * as Select from '@radix-ui/react-select'
import { SelectItemProps, SelectProps } from '@radix-ui/react-select'

import s from './Selector.module.scss'

type Props = SelectProps & {
  children: ReactNode
  className?: string
  defaultValue?: string
}

export const Selector = forwardRef<ElementRef<typeof Select.Root>, Props>(
  ({ children, className, defaultValue = '10', ...props }: Props, ref) => {
    return (
      <Select.Root defaultValue={defaultValue} {...props}>
        <Select.Trigger className={`${s.trigger} ${className}`} ref={ref}>
          <Select.Value />
          <Select.Icon className={s.iconTrigger}>
            <IconSvg name={'arrow'} />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className={s.content} position={'popper'} sideOffset={-1}>
            <Select.Viewport className={s.viewport}>{children}</Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    )
  }
)

export const SelectItem = forwardRef<ElementRef<typeof Select.Item>, SelectItemProps>(
  (props: SelectItemProps, forwardedRef) => {
    const { children, className = '', ...rest } = props

    return (
      <Select.Item className={`${s.item} ${className}`} {...rest} ref={forwardedRef}>
        <Select.ItemText>
          <TextFormat variant={'body2'}>{children}</TextFormat>{' '}
        </Select.ItemText>
      </Select.Item>
    )
  }
)
