import { SubmitHandler, useForm } from 'react-hook-form'

import { Card } from '@/commn/components/ui/card/Card'
import { FormAuth } from '@/commn/components/ui/formAuth/FormAuth'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const forgotPasswordSchema = z.object({
  email: z.string().trim().email(),
})

export type ForgotPasswordType = z.infer<typeof forgotPasswordSchema>

export const ForgotPassword = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ForgotPasswordType>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordSchema),
  })
  const onSubmit: SubmitHandler<ForgotPasswordType> = data => {
    console.log(data)
    reset()
  }

  return (
    <Card>
      <FormAuth
        control={control}
        errorMessage={errors}
        onSubmit={handleSubmit(onSubmit)}
        title={'forgot your password?'}
      />
    </Card>
  )
}
