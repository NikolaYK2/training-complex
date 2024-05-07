import { ElementRef, forwardRef } from 'react'

import { IconSvg } from '@/commn/components/ui/iconSvg/IconSvg'
import * as CheckboxRadix from '@radix-ui/react-checkbox'

import s from './TickBox.module.scss'

export type TickBoxProps = {
  disabled?: boolean
  label?: string
  onValueChange?: (checked: boolean) => void
  position?: 'left' | 'right'
}
export const TickBox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, TickBoxProps>(
  (props, ref) => {
    const { disabled, label = '', onValueChange, position = '' } = props

    return (
      <div className={`${s.container} ${s[position]}`}>
        <label className={s.clickEffect}>
          <CheckboxRadix.Root
            className={s.rootBlock}
            defaultChecked
            disabled={disabled}
            id={'c1'}
            onCheckedChange={onValueChange}
            ref={ref}
          >
            <CheckboxRadix.Indicator className={s.indicator}>
              <IconSvg name={'tick'} />
            </CheckboxRadix.Indicator>
          </CheckboxRadix.Root>
        </label>
        <label className={s.label} htmlFor={'c1'}>
          {label}
        </label>
      </div>
    )
  }
)
