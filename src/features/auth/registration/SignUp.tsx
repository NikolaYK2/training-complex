import { SubmitHandler, useForm } from 'react-hook-form'

import { Card } from '@/commn/components/ui/card/Card'
import { FormAuth } from '@/commn/components/ui/formAuth/FormAuth'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const RegisterSchema = z
  .object({
    email: z.string().trim().email(),
    password: z.string().min(5),
    passwordConfirm: z.string().min(5),
  })
  .refine(data => data.password === data.passwordConfirm, {
    message: "Passwords don't match",
    path: ['passwordConfirm'],
  })

export type RegisterFormType = z.infer<typeof RegisterSchema>

export const SignUp = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<RegisterFormType>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    resolver: zodResolver(RegisterSchema),
  })
  const onSubmit: SubmitHandler<RegisterFormType> = data => {
    console.log(data)
    reset()
  }

  return (
    <Card>
      <FormAuth
        control={control}
        errorMessage={errors}
        formItem={['email', 'password', 'passwordConfirm']}
        onSubmit={handleSubmit(onSubmit)}
        title={'sign up'}
      />
    </Card>
  )
}
