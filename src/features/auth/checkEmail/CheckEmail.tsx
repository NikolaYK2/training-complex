import { Card } from '@/commn/components/ui/card/Card'
import { FormAuth } from '@/commn/components/ui/formAuth/FormAuth'
import { Page } from '@/features/pages/Page'

export const CheckEmail = () => {
  return (
    <Page marginTop={'var(--margin-top-page)'}>
      <Card>
        <FormAuth title={'check email'} />
      </Card>
    </Page>
  )
}
