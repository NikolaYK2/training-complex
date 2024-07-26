import { ComponentPropsWithoutRef, forwardRef } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'
import { RadioGroupProps } from '@radix-ui/react-radio-group'

import s from './RadioGroupComponent.module.scss'

export type RadioGroupPropsType = RadioGroupProps & {
  name: string
  onChange?: (value: string) => void
  value: string
} & ComponentPropsWithoutRef<'div'>

export const RadioGroupComponent = forwardRef<HTMLDivElement, RadioGroupPropsType>(
  ({ name, onChange, value, ...props }, ref) => (
    <RadioGroup.Root
      className={s.root}
      name={name}
      onValueChange={onChange}
      ref={ref}
      value={value}
      {...props}
    />
  )
)
