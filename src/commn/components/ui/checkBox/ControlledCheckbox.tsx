import {FieldValues, useController, UseControllerProps} from "react-hook-form";
import {CheckboxProps} from "@radix-ui/react-checkbox";
import {TickBox} from "@/commn/components/ui/checkBox/TickBox.tsx";

export type ControlledCheckboxProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & Omit<CheckboxProps, 'onChange' | 'value' | 'id'>


export const ControlledCheckbox = <TFieldValues extends FieldValues>({
                                                                       name,
                                                                       control,
                                                                       ...checkboxProps
                                                                     }: ControlledCheckboxProps<TFieldValues>) => {
  const {field: {onChange, value}} = useController({name, control})

  return (
    <TickBox {...{onChange, checked: value, id: name, ...checkboxProps}}/>
  );
};
