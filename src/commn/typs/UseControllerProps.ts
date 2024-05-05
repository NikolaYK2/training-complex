import {Control, FieldPath, FieldPathValue, FieldValues, RegisterOptions} from "react-hook-form";

export type UseControllerProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues>
  = FieldPath<TFieldValues>> = {
  name: TName;
  rules?: Omit<RegisterOptions<TFieldValues, TName>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  shouldUnregister?: boolean;
  defaultValue?: FieldPathValue<TFieldValues, TName>;
  control: Control<TFieldValues>;
  disabled?: boolean;
};