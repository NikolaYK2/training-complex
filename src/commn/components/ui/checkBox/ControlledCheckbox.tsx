import { FieldValues, useController } from 'react-hook-form'

import { TickBox, TickBoxProps } from '@/commn/components/ui/checkBox/TickBox'
import { UseControllerProps } from '@/commn/typs/UseControllerProps'

export type ControlledCheckboxProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & Omit<TickBoxProps, 'id' | 'onChange' | 'value'>

export const ControlledCheckbox = <TFieldValues extends FieldValues>({
  control,
  name,
  ...checkboxProps
}: ControlledCheckboxProps<TFieldValues>) => {
  const {
    field: { onChange, ref, value },
  } = useController({ control, name })

  return (
    <TickBox
      {...{
        checked: value,
        id: name,
        onValueChange: onChange,
        ref,
        ...checkboxProps,
      }}
    />
  )
}
