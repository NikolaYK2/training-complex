import { ElementRef, KeyboardEvent, forwardRef } from 'react'

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

    const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === 'Enter') {
        event.preventDefault()
        event.currentTarget.click()
      }
    }

    return (
      <div className={`${s.container} ${s[position]}`}>
        <label className={s.clickEffect}>
          <CheckboxRadix.Root
            className={s.rootBlock}
            defaultChecked={false}
            disabled={disabled}
            id={'c1'}
            onCheckedChange={onValueChange}
            onKeyDown={handleKeyDown}
            ref={ref}
          >
            <CheckboxRadix.Indicator className={s.indicator}>
              <IconSvg name={'tick'} />
            </CheckboxRadix.Indicator>
          </CheckboxRadix.Root>
        </label>
        {label && (
          <label className={s.label} htmlFor={'c1'}>
            {label}
          </label>
        )}
      </div>
    )
  }
)
