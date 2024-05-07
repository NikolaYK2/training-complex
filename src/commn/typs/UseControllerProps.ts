import { Control, FieldPath, FieldPathValue, FieldValues, RegisterOptions } from 'react-hook-form'

export type UseControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  control: Control<TFieldValues>
  defaultValue?: FieldPathValue<TFieldValues, TName>
  disabled?: boolean
  name: TName
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    'disabled' | 'setValueAs' | 'valueAsDate' | 'valueAsNumber'
  >
  shouldUnregister?: boolean
}
