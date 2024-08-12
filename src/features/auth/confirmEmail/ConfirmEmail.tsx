import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'

import { Card } from '@/commn/components/ui/card/Card'
import { FormAuth } from '@/commn/components/ui/formAuth/FormAuth'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { Page } from '@/commn/components/ui/pages/Page'
import { useGetVerifyEmailMutation } from '@/services/auth/authService'

export const ConfirmEmail = () => {
  const { token: code } = useParams<{ token: string }>()
  const [verifyToken, { isLoading }] = useGetVerifyEmailMutation()
  const timerId = useRef<number | undefined>()

  useEffect(() => {
    if (code) {
      timerId.current = window.setTimeout(() => {
        verifyToken({ code })
      }, 5000)
    }

    return () => window.clearTimeout(timerId.current)
  }, [code, verifyToken])

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
