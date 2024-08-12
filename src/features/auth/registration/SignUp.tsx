import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Card } from '@/commn/components/ui/card/Card'
import { FormAuth } from '@/commn/components/ui/formAuth/FormAuth'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { Page } from '@/commn/components/ui/pages/Page'
import { manageFeedback } from '@/commn/utils/manageFeedback'
import { CheckEmailStateType } from '@/features/auth/checkEmail/CheckEmail'
import { templatesEmail } from '@/features/auth/templates/templatesEmail'
import { CHECK_EMAIL_ROUTE } from '@/routes/Router'
import { useRegistrationAuthMutation } from '@/services/auth/authService'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const RegisterSchema = z
  .object({
    email: z.string().trim().email(),
    password: z.string().min(3).max(30),
    passwordConfirm: z.string().min(3).max(30),
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
  const [registration, { isLoading: isLoadingRegistration }] = useRegistrationAuthMutation()

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onSubmit: SubmitHandler<RegisterFormType> = async data => {
    try {
      const registrationResult = await registration({
        email: data.email,
        html: templatesEmail.checkEmail,
        password: data.password,
        sendConfirmationEmail: true,
      }).unwrap()

      navigate(CHECK_EMAIL_ROUTE, {
        state: {
          email: registrationResult.email,
          userId: registrationResult.id,
        } as CheckEmailStateType,
      })
      reset()
    } catch (e) {
      manageFeedback({ data: e, dispatch, type: 'error' })
    }
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
