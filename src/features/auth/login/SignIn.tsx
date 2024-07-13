import { SubmitHandler, useForm } from 'react-hook-form'

import { Card } from '@/commn/components/ui/card/Card'
import { FormAuth } from '@/commn/components/ui/formAuth/FormAuth'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { localStorageUtil } from '@/commn/utils/localStorageUtil'
import { Page } from '@/features/pages/Page'
import { useLoginAuthMutation } from '@/services/auth/authService'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(5),
  remember: z.boolean().default(false), // Добавить default значение,
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

  const [authorisation, { error, isError, isLoading }] = useLoginAuthMutation()

  const onSubmit: SubmitHandler<LoginFormType> = async data => {
    try {
      const tokensRes = await authorisation({
        email: data.email,
        password: data.password,
        rememberMe: data.remember,
      }).unwrap()

      localStorageUtil.saveItem('accessToken', tokensRes?.accessToken)
      localStorageUtil.saveItem('refreshToken', tokensRes?.refreshToken)

      reset()
    } catch (e) {
      console.error('login error: ', e)
    }
  }

  if (isError) {
    return <div>{JSON.stringify(error)}</div>
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
