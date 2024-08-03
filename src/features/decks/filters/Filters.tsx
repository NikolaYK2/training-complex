import { DeleteIcon } from '@/assets/image/delete/DeleteIcon'
import { Button } from '@/commn/components/ui/button'
import { Search } from '@/commn/components/ui/search/Search'
import { SliderValue } from '@/commn/components/ui/slider/SliderValue'
import { TabSwitcher } from '@/commn/components/ui/tabSwitcher/TabSwitcher'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { useSearchUpdateParams } from '@/commn/hooks/useSearchUpdateParams'
import { DECKS_KEY_SEARCH_PARAMS } from '@/features/decks/Decks'
import { ResponseType } from '@/services/auth/AuthTypes'

import s from './Filters.module.scss'

type Props = {
  activeTab: string
  dataUserData: ResponseType | undefined
  maxCards: number
  minCards: number
  name: string
  setPage: (page: number) => void
}
export const Filters = ({ activeTab, dataUserData, maxCards, minCards, name, setPage }: Props) => {
  const { updateSearchParam } = useSearchUpdateParams()

  const setSearch = (name: string) => {
    updateSearchParam({ callBack: setPage, key: DECKS_KEY_SEARCH_PARAMS.searchName, value: name })
  }
  const setAuthorDecks = (authorId: string) => {
    updateSearchParam({ callBack: setPage, key: DECKS_KEY_SEARCH_PARAMS.authorId, value: authorId })
  }

  const setCountMinDecks = (countMin: number) => {
    updateSearchParam({
      callBack: setPage,
      key: DECKS_KEY_SEARCH_PARAMS.minCardsCount,
      value: countMin,
    })
  }

  const setCountMaxDecks = (countMax: number) => {
    updateSearchParam({ key: DECKS_KEY_SEARCH_PARAMS.maxCardsCount, value: countMax })
  }

  const handleClearFilter = () => {
    setCountMaxDecks(100)
    setCountMinDecks(0)
    setPage(1)
    setSearch('')
  }

  return (
    <div className={s.filters}>
      <div className={s.search}>
        <Search searchName={name} setSearch={setSearch} />
      </div>
      <div className={s.mobile}>
        <div className={s.tab}>
          <TextFormat style={{ marginBottom: '5px' }} variant={'body2'}>
            Show decks cards
          </TextFormat>

          <TabSwitcher
            activeTab={activeTab}
            tabInfo={[
              {
                callback: setAuthorDecks,
                trigger: 'My Cards',
                value: dataUserData?.id ?? '',
              },
              {
                callback: setAuthorDecks,
                trigger: 'All Cards',
                value: DECKS_KEY_SEARCH_PARAMS.default,
              },
            ]}
          />
        </div>
        <div className={s.slider}>
          <TextFormat style={{ marginBottom: '5px' }} variant={'body2'}>
            Number of cards
          </TextFormat>

          <SliderValue
            maxValue={maxCards}
            minValue={minCards}
            setCountMaxDecks={setCountMaxDecks}
            setCountMinDecks={setCountMinDecks}
          />
        </div>
        <Button className={s.deleteBtn} onClick={handleClearFilter} variant={'secondary'}>
          <DeleteIcon className={s.deleteIcon} />
          <TextFormat variant={'subtitle2'}>Clear Filter</TextFormat>
        </Button>
      </div>
    </div>
  )
}
