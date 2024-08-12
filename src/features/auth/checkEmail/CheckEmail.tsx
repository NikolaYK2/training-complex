import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { Card } from '@/commn/components/ui/card/Card'
import { FormAuth } from '@/commn/components/ui/formAuth/FormAuth'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { Page } from '@/commn/components/ui/pages/Page'
import { tryCatch } from '@/commn/utils/tryCatch'
import { templatesEmail } from '@/features/auth/templates/templatesEmail'
import { useResendVerificationEmailMutation } from '@/services/auth/authService'

export type CheckEmailStateType = {
  buttonName?: string
  email: string
  redirect: boolean
  route?: string
  userId?: string
}

type UserIdType = { html: string; userId: string }
export const CheckEmail = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const { buttonName, email, redirect, route, userId } =
    (location.state as CheckEmailStateType) || {}

  const [setVerify, { isLoading }] = useResendVerificationEmailMutation()

  const { control, handleSubmit } = useForm<UserIdType>({
    defaultValues: {
      html: templatesEmail.checkEmail,
      userId: userId,
    },
  })

  const onSubmit: SubmitHandler<UserIdType> = async data => {
    return tryCatch(dispatch, async () => {
      await setVerify({ html: data.html, userId: data.userId }).unwrap()
    })
  }

  return (
    <Page marginTop={'var(--margin-top-page)'}>
      <Card>
        {isLoading && <Loading />}
        <FormAuth
          buttonName={buttonName}
          control={control}
          descriptionMessage={`We’ve sent an Email with instructions to ${
            email ? email : '\u{1F4E7}'
          }`}
          onSubmit={handleSubmit(onSubmit)}
          redirect={redirect}
          route={route}
          title={'check email'}
        />
      </Card>
    </Page>
  )
}
