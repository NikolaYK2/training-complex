import { SubmitHandler, useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'

import { Card } from '@/commn/components/ui/card/Card'
import { FormAuth } from '@/commn/components/ui/formAuth/FormAuth'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { templatesEmail } from '@/features/auth/templates/templatesEmail'
import { Page } from '@/features/pages/Page'
import { useResendVerificationEmailMutation } from '@/services/auth/authService'

type UserIdType = { html: string; userId: string }
export const CheckEmail = () => {
  const location = useLocation()
  const { email, userId } = location.state || {}

  const [sendVerification, { error, isError, isLoading }] = useResendVerificationEmailMutation()

  const { control, handleSubmit } = useForm<UserIdType>({
    defaultValues: {
      html: templatesEmail.checkEmail,
      userId: userId,
    },
  })

  const onSubmit: SubmitHandler<UserIdType> = async data => {
    try {
      await sendVerification({ html: data.html, userId: data.userId })
    } catch (e) {
      console.error('Error send verify ', e)
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
          descriptionMessage={`We’ve sent an Email with instructions to ${
            email ? email : '\u{1F4E7}'
          }`}
          onSubmit={handleSubmit(onSubmit)}
          title={'check email'}
        />
      </Card>
    </Page>
  )
}
