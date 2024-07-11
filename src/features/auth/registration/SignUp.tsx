import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Card } from '@/commn/components/ui/card/Card'
import { FormAuth } from '@/commn/components/ui/formAuth/FormAuth'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { errorsResponse } from '@/commn/utils/errorsResponse'
import { Page } from '@/features/pages/Page'
import { useRegistrationAuthMutation } from '@/services/auth/authService'
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

const emailConfirmationTemplate = `
  <b>Hello, ##name##!</b><br/>
  Please confirm your email by clicking on the link below:<br/>
  <a href="http://localhost:5173/confirm-email/##token##">Confirm email</a>.
  If it doesn't work, copy and paste the following link in your browser:<br/>
  http://localhost:5173/confirm-email/  ##token##
`

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
  const [registration, { error, isError, isLoading: isLoadingRegistration }] =
    useRegistrationAuthMutation()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<RegisterFormType> = async data => {
    try {
      await registration({
        email: data.email,
        html: emailConfirmationTemplate,
        password: data.password,
        sendConfirmationEmail: true,
      }).unwrap()
      navigate('/check-email', { state: { email: data.email } })
      reset()
    } catch (e) {
      console.error('failed to register: ', e)
    }
  }

  if (isError) {
    return <div>{errorsResponse(error)}</div>
  }

  return (
    <Page marginTop={'var(--margin-top-page)'}>
      <Card>
        {isLoadingRegistration && <Loading />}
        <FormAuth
          control={control}
          errorMessage={errors}
          formItem={['email', 'password', 'passwordConfirm']}
          onSubmit={handleSubmit(onSubmit)}
          title={'sign up'}
        />
      </Card>
    </Page>
  )
}
