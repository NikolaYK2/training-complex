import { SubmitHandler, useForm } from 'react-hook-form'

import { Card } from '@/commn/components/ui/card/Card'
import { FormAuth } from '@/commn/components/ui/formAuth/FormAuth'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const CreateNewPasswordSchema = z.object({
  password: z.string().min(5),
})
export type CreateNewPasswordType = z.infer<typeof CreateNewPasswordSchema>

export const CreateNewPassword = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<CreateNewPasswordType>({
    defaultValues: {
      password: '',
    },
    resolver: zodResolver(CreateNewPasswordSchema),
  })
  const onSubmit: SubmitHandler<CreateNewPasswordType> = data => {
    console.log(data)
    reset()
  }

  return (
    <Card>
      <FormAuth
        control={control}
        errorMessage={errors}
        onSubmit={handleSubmit(onSubmit)}
        title={'create new password'}
      />
    </Card>
  )
}
