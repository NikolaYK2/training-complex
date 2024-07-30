import { useState } from 'react'

import { DeleteIcon } from '@/assets/image/delete/DeleteIcon'
import { Button } from '@/commn/components/ui/button'
import { CreateUpdateDeck } from '@/commn/components/ui/createUpdateDeck/CreateUpdateDeck'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { Page } from '@/commn/components/ui/pages/Page'
import { Pagination } from '@/commn/components/ui/pagination/Pagination'
import { Search } from '@/commn/components/ui/search/Search'
import { SliderValue } from '@/commn/components/ui/slider/SliderValue'
import { TabSwitcher } from '@/commn/components/ui/tabSwitcher/TabSwitcher'
import { Table } from '@/commn/components/ui/tables/Table'
import { Title } from '@/commn/components/ui/title/Title'
import { TextFormat } from '@/commn/components/ui/typography/TextFormat'
import { useSearchUpdateParams } from '@/commn/hooks/useSearchUpdateParams'
import { useGetCurrentUserDataQuery } from '@/services/auth/authService'
import { DeckType } from '@/services/decks/DecksTypes'
import { useCreateUpdateDeckMutation, useGetDecksQuery } from '@/services/decks/decksService'

import s from './Decks.module.scss'

const DECKS_KEY_SEARCH_PARAMS = {
  authorId: 'authorId',
  default: 'default',
  maxCardsCount: 'maxCardsCount',
  minCardsCount: 'minCardsCount',
  page: 'page',
  pageDeckSaveHistory: 'page-deck',
  searchName: 'name',
}

export const Decks = () => {
  const [itemPage, setItemPage] = useState(10)
  const { searchParams, updateSearchParam } = useSearchUpdateParams()
  const { data: dataUserData } = useGetCurrentUserDataQuery()

  //rrm search params ------------
  const page = Number(searchParams.get(DECKS_KEY_SEARCH_PARAMS.page)) || 1
  const name = searchParams.get(DECKS_KEY_SEARCH_PARAMS.searchName) || ''
  const authorId = searchParams.get(DECKS_KEY_SEARCH_PARAMS.authorId) || ''
  const minCards = Number(searchParams.get(DECKS_KEY_SEARCH_PARAMS.minCardsCount)) || 0
  const maxCards = Number(searchParams.get(DECKS_KEY_SEARCH_PARAMS.maxCardsCount)) || 100
  const activeTab = authorId || DECKS_KEY_SEARCH_PARAMS.default

  const setPage = (page: number) => {
    updateSearchParam(DECKS_KEY_SEARCH_PARAMS.page, page)
  }

  const setSearch = (name: string) => {
    updateSearchParam(DECKS_KEY_SEARCH_PARAMS.searchName, name, setPage)
  }

  const setAuthorDecks = (authorId: string) => {
    updateSearchParam(DECKS_KEY_SEARCH_PARAMS.authorId, authorId, setPage)
  }

  const setCountMinDecks = (countMin: number) => {
    updateSearchParam(DECKS_KEY_SEARCH_PARAMS.minCardsCount, countMin, setPage)
  }

  const setCountMaxDecks = (countMax: number) => {
    updateSearchParam(DECKS_KEY_SEARCH_PARAMS.maxCardsCount, countMax)
  }
  const [
    createDeck,
    { error: errorCreateDeck, isError: isErrorCreateDeck, isLoading: isLoadingCreateDeck },
  ] = useCreateUpdateDeckMutation()

  const { data, error, isError, isLoading } = useGetDecksQuery({
    authorId: authorId || undefined,
    currentPage: page, //было просто page если use useState
    itemsPerPage: itemPage,
    maxCardsCount: maxCards,
    minCardsCount: minCards,
    name: name || undefined,
  }) //из query возвращается обьект из mutation картэш(массив с заранее определенными элементами)

  const handleClearFilter = () => {
    setCountMaxDecks(100)
    setCountMinDecks(0)
    setPage(1)
  }

  // if (isLoading) {
  //   return <Loading />
  // }
  if (isError) {
    console.error(error)

    return <div>Error: {JSON.stringify(error)}</div>
  }

  return (
    <Page>
      {isLoading && <Loading />}

      <Title isDeck nameDeck={'Decks list'}>
        <CreateUpdateDeck
          buttonName={'Add New Deck'}
          error={errorCreateDeck}
          isError={isErrorCreateDeck}
          isLoading={isLoadingCreateDeck}
          method={'POST'}
          mutationFunction={createDeck}
          nameTrigger={'Add New Deck'}
          titleContent={'Add New Deck'}
        />
      </Title>
      <div className={s.filters}>
        <div className={s.search}>
          <Search searchName={name} setSearch={setSearch} />
        </div>
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
      <div className={s.table}>
        <Table
          headers={[
            { id: 1, title: 'Name' },
            { id: 2, title: 'Cards' },
            { id: 3, title: 'Last Updated' },
            { id: 4, title: 'Created By' },
          ]}
          pageHistorySave={{ authorIdSave: authorId, minCardsSave: minCards, pageDeckSave: page }}
          paragraphs={data?.items.map((deck: DeckType) => ({
            cells: [
              { idDeck: deck.id, img: deck.cover, value: deck.name },
              { value: `${deck.cardsCount}` },
              { value: new Date(deck.updated).toLocaleDateString() },
              { value: deck.author.name },
            ],
            idCells: deck.id,
          }))}
        />
      </div>
      <Pagination
        currentPage={page}
        onPageChange={setPage}
        pageSize={1}
        setPageSize={setItemPage}
        siblingCount={1}
        totalCount={data?.pagination?.totalPages ?? 1}
      />
    </Page>
  )
}
