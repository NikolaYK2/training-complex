import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

import { Card } from '@/commn/components/ui/card/Card'
import { FormAuth } from '@/commn/components/ui/formAuth/FormAuth'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { LOGIN } from '@/routes/Router'
import { usePasswordResetMutation } from '@/services/auth/authService'
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
  const { token } = useParams<{ token: string }>()
  const navigate = useNavigate()
  const [resetPassword, { error, isError, isLoading }] = usePasswordResetMutation()
  const onSubmit: SubmitHandler<CreateNewPasswordType> = async data => {
    try {
      if (token) {
        await resetPassword({ password: data.password, token })
        reset()
        // Добавление задержки или других мер подтверждения успешного сброса пароля
        // перед переходом на страницу входа
        setTimeout(() => {
          navigate(LOGIN)
        }, 1000)
      }
    } catch (e) {
      console.error('New password ', e)
    }
  }

  if (isError) {
    return <div>Error: {JSON.stringify(error)}</div>
  }

  return (
    <Card>
      {isLoading && <Loading />}
      <FormAuth
        control={control}
        errorMessage={errors}
        formItem={['password']}
        onSubmit={handleSubmit(onSubmit)}
        title={'create new password'}
      />
    </Card>
  )
}
