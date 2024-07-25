import { FieldValues, useController } from 'react-hook-form'

import { FileDownload, FiledDownloadProps } from '@/commn/components/ui/fileDonwold/FileDownload'
import { UseControllerProps } from '@/commn/typs/UseControllerProps'

export type ControlledTextFieldProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & Omit<FiledDownloadProps, 'id' | 'onChange' | 'value'>

export const ControlledFileDownload = <TFieldValues extends FieldValues>({
  buttonName,
  control,
  name,
  ...fileDownloadProps
}: ControlledTextFieldProps<TFieldValues>) => {
  // Используем хук useController для получения необходимых свойств
  const {
    field: { onChange, ref },
  } = useController({ control, name })

  return (
    <FileDownload
      {...fileDownloadProps}
      buttonName={buttonName}
      name={name}
      onChange={onChange}
      ref={ref}
    />
  )
}
