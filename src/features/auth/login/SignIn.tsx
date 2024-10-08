import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { Card } from '@/commn/components/ui/card/Card'
import { FormAuth } from '@/commn/components/ui/formAuth/FormAuth'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { Page } from '@/commn/components/ui/pages/Page'
import { tryCatch } from '@/commn/utils/tryCatch'
import { useLoginAuthMutation } from '@/services/auth/authService'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(3).max(30),
  remember: z.boolean().default(false), // Добавить default значение,
})

export type LoginFormType = z.infer<typeof loginSchema>

export const SignIn = () => {
  const dispatch = useDispatch()
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

  const [authorisation, { isLoading }] = useLoginAuthMutation()
  const onSubmit: SubmitHandler<LoginFormType> = async data => {
    return tryCatch(dispatch, async () => {
      await authorisation({
        email: data.email,
        password: data.password,
        rememberMe: data.remember,
      }).unwrap()

      reset()
    })
  }

  return (
    <Page marginTop={'var(--margin-top-page)'}>
      <Card>
        {isLoading && <Loading />}
        <FormAuth
          control={control}
          errorMessage={errors}
          formItem={['email', 'password', 'remember']}
          onSubmit={handleSubmit(onSubmit)}
          title={'sign in'}
        />
      </Card>
    </Page>
  )
}
