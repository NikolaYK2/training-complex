import { useLocation } from 'react-router-dom'

import { Card } from '@/commn/components/ui/card/Card'
import { FormAuth } from '@/commn/components/ui/formAuth/FormAuth'
import { Page } from '@/features/pages/Page'

export const CheckEmail = () => {
  const location = useLocation()
  const { email } = location.state || {}

  return (
    <Page marginTop={'var(--margin-top-page)'}>
      <Card>
        <FormAuth
          response={`We’ve sent an Email with instructions to ${email}`}
          title={'check email'}
        />
      </Card>
    </Page>
  )
}
