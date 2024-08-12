import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Card } from '@/commn/components/ui/card/Card'
import { FormAuth } from '@/commn/components/ui/formAuth/FormAuth'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { Page } from '@/commn/components/ui/pages/Page'
import { tryCatch } from '@/commn/utils/tryCatch'
import { CheckEmailStateType } from '@/features/auth/checkEmail/CheckEmail'
import { templatesEmail } from '@/features/auth/templates/templatesEmail'
import { CHECK_EMAIL_ROUTE, LOGIN_ROUTE } from '@/routes/Router'
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
  const dispatch = useDispatch()
  const [forgotPassword, { error, isError, isLoading }] = usePasswordRecoveryMutation()
  const onSubmit: SubmitHandler<ForgotPasswordType> = async data => {
    return tryCatch(dispatch, async () => {
      await forgotPassword({ email: data.email, html: templatesEmail.recoverPassword }).unwrap()
      navigate(CHECK_EMAIL_ROUTE, {
        state: {
          buttonName: 'back to sign in',
          email: data.email,
          redirect: false,
          route: LOGIN_ROUTE,
        } as CheckEmailStateType,
      })
      reset()
    })
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
