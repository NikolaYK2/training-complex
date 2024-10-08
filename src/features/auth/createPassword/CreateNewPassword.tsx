import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { Card } from '@/commn/components/ui/card/Card'
import { FormAuth } from '@/commn/components/ui/formAuth/FormAuth'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { Page } from '@/commn/components/ui/pages/Page'
import { tryCatch } from '@/commn/utils/tryCatch'
import { LOGIN_ROUTE } from '@/routes/Router'
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
  const dispatch = useDispatch()

  const [resetPassword, { error, isError, isLoading }] = usePasswordResetMutation()

  const onSubmit: SubmitHandler<CreateNewPasswordType> = async data => {
    return tryCatch(dispatch, async () => {
      if (token) {
        await resetPassword({ password: data.password, token }).unwrap()
        reset()

        setTimeout(() => {
          navigate(LOGIN_ROUTE)
        }, 1000)
      }
    })
  }

  if (isError) {
    return <div>Error: {JSON.stringify(error)}</div>
  }

  return (
    <Page marginTop={'var(--margin-top-page)'}>
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
    </Page>
  )
}
