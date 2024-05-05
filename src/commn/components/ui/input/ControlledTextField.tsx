import {FieldValues, useController} from "react-hook-form";
import {TextField, TextFieldProps} from "@/commn/components/ui/input/TextField.tsx";
import {UseControllerProps} from "@/commn/typs/UseControllerProps.ts";

export type ControlledTextFieldProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & Omit<TextFieldProps, 'onChange' | 'value' | 'id'>

export const ControlledTextField = <TFieldValues extends FieldValues>({
                                                                        name,
                                                                        control,
                                                                        ...textFieldProps
                                                                      }: ControlledTextFieldProps<TFieldValues>) => {
  const {field: {onChange, value}} = useController({name, control});

  return (
    <TextField {...{onChange, value, id: name, ...textFieldProps}}/>
  );
};
