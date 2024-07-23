import { BackTo } from '@/commn/components/ui/backTo/BackTo'
import { Title } from '@/commn/components/ui/title/Title'
import { CreateCard } from '@/features/cards/createCard/CreateCard'
import { Page } from '@/features/pages/Page'

export const Cards = () => {
  return (
    <Page marginTop={'var(--margin-top-page-link'}>
      <BackTo nameLink={'Back to Decks List'} />
      <Title name={'Decks list'}>
        <CreateCard />
      </Title>
    </Page>
  )
}
