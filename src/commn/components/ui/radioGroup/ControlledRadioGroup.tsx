import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroupComponent } from '@/commn/components/ui/radioGroup/RadioGroupComponent'
import { RadioGroupProps } from '@radix-ui/react-radio-group'

export type ControlledTextFieldProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & Omit<RadioGroupProps, 'id' | 'onChange' | 'value'>

export const ControlledRadioGroup = <TFieldValues extends FieldValues>({
  control,
  name,
  ...textFieldProps
}: ControlledTextFieldProps<TFieldValues>) => {
  const {
    field: { onChange, ref, value },
  } = useController({ control, name })

  return (
    <RadioGroupComponent
      name={name}
      onChange={onChange}
      ref={ref}
      value={value}
      {...textFieldProps}
    />
  )
}
