import { Button } from '@/commn/components/ui/button'
import { TextField } from '@/commn/components/ui/input/TextField'
import { SliderValue } from '@/commn/components/ui/slider/SliderValue'
import { TabSwitcher } from '@/commn/components/ui/tabSwitcher/TabSwitcher'
import { Table } from '@/commn/components/ui/tables/Table'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { Page } from '@/features/pages/Page'

import s from './Decks.module.scss'

export const Decks = () => {
  return (
    <Page>
      <div className={s.deck}>
        <TextFormat variant={'h1'}>Decks</TextFormat>
        <Button>Add new deck</Button>
      </div>
      <div className={s.filters}>
        <div className={s.search}>
          <TextField type={'search'} />
        </div>
        <div className={s.tab}>
          <TabSwitcher
            tabInfo={[
              { description: '', trigger: 'MyCards', value: '1' },
              { description: '', trigger: 'AllCards', value: '2' },
            ]}
          />
        </div>
        <div className={s.slider}>
          <SliderValue />
        </div>
        <Button variant={'secondary'}>Clear</Button>
      </div>
      <div className={s.table}>
        <Table
          headers={[
            { id: 1, title: 'name' },
            { id: 2, title: 'cards' },
            { id: 3, sort: true, title: 'last updated' },
            { id: 4, title: 'Created by' },
          ]}
          paragraphs={[
            [
              { id: 1, title: 'Pack Name' },
              { id: 2, title: '10' },
              { id: 3, title: '18.03.2024' },
              { id: 4, title: 'Kev K2' },
            ],
          ]}
        />
      </div>
    </Page>
  )
}
