import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Card } from '@/commn/components/ui/card/Card'
import { FormAuth } from '@/commn/components/ui/formAuth/FormAuth'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { Page } from '@/commn/components/ui/pages/Page'
import { manageFeedback } from '@/commn/utils/manageFeedback'
import { useGetVerifyEmailMutation } from '@/services/auth/authService'

export const ConfirmEmail = () => {
  const { token: code } = useParams<{ token: string }>()
  const [verifyToken, { error, isLoading }] = useGetVerifyEmailMutation()
  const dispatch = useDispatch()

  useEffect(() => {
    if (code) {
      verifyToken({ code })
    }
  }, [code, verifyToken])

  manageFeedback({ data: error, dispatch, type: 'error' })

  return (
    <Page marginTop={'var(--margin-top-page)'}>
      {isLoading ? (
        <Loading />
      ) : (
        <Card>
          <FormAuth descriptionMessage={'Email verified successfully'} title={'confirm email'} />
        </Card>
      )}
    </Page>
  )
}
