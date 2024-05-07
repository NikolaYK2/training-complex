import { FieldValues, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/commn/components/ui/input/TextField'
import { UseControllerProps } from '@/commn/typs/UseControllerProps'

export type ControlledTextFieldProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & Omit<TextFieldProps, 'id' | 'onChange' | 'value'>

export const ControlledTextField = <TFieldValues extends FieldValues>({
  control,
  name,
  ...textFieldProps
}: ControlledTextFieldProps<TFieldValues>) => {
  const {
    field: { onChange, value },
  } = useController({ control, name })

  return <TextField {...{ id: name, onChange, value, ...textFieldProps }} />
}
