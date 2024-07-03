import { SubmitHandler, useForm } from 'react-hook-form'

import { Card } from '@/commn/components/ui/card/Card'
import { FormAuth } from '@/commn/components/ui/formAuth/FormAuth'
import { Page } from '@/features/pages/Page'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(5),
  remember: z.boolean().optional(),
})

export type LoginFormType = z.infer<typeof loginSchema>

export const SignIn = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
    resolver: zodResolver(loginSchema),
  })

  const onSubmit: SubmitHandler<LoginFormType> = data => {
    console.log(data)
    reset()
  }

  return (
    <Page marginTop={'36px'}>
      <Card>
        <FormAuth
          control={control}
          errorMessage={errors}
          formItem={['email', 'password']}
          onSubmit={handleSubmit(onSubmit)}
          title={'sign in'}
        />
      </Card>
    </Page>
  )
}
