import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Card } from '@/commn/components/ui/card/Card'
import { FormAuth } from '@/commn/components/ui/formAuth/FormAuth'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { Page } from '@/features/pages/Page'
import { useGetVerifyEmailMutation } from '@/services/auth/authService'

export const ConfirmEmail = () => {
  const { token } = useParams<{ token: string }>()
  const [verifyToken, { data, error, isError, isLoading }] = useGetVerifyEmailMutation()

  useEffect(() => {
    if (token) {
      verifyToken({ token })
    }
  }, [token, verifyToken])

  return (
    <Page marginTop={'var(--margin-top-page)'}>
      {isLoading ? (
        <Loading />
      ) : (
        <Card>
          <FormAuth title={'confirm email'} />
        </Card>
      )}
    </Page>
  )
}
