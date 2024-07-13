import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Card } from '@/commn/components/ui/card/Card'
import { FormAuth } from '@/commn/components/ui/formAuth/FormAuth'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { CheckEmailStateType } from '@/features/auth/checkEmail/CheckEmail'
import { templatesEmail } from '@/features/auth/templates/templatesEmail'
import { Page } from '@/features/pages/Page'
import { CHECK_EMAIL, LOGIN } from '@/routes/Router'
import { usePasswordRecoveryMutation } from '@/services/auth/authService'
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
  const navigate = useNavigate()
  const [forgotPassword, { error, isError, isLoading }] = usePasswordRecoveryMutation()
  const onSubmit: SubmitHandler<ForgotPasswordType> = async data => {
    try {
      await forgotPassword({ email: data.email, html: templatesEmail.recoverPassword }).unwrap()
      navigate(CHECK_EMAIL, {
        state: {
          buttonName: 'back to sign in',
          email: data.email,
          redirect: false,
          route: LOGIN,
        } as CheckEmailStateType,
      })
      reset()
    } catch (e) {
      console.error('Forgot password: ', e)
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
          formItem={['email']}
          onSubmit={handleSubmit(onSubmit)}
          title={'forgot your password?'}
        />
      </Card>
    </Page>
  )
}
