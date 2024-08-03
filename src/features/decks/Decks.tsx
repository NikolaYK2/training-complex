import { useState } from 'react'

import { DeleteIcon } from '@/assets/image/delete/DeleteIcon'
import { Button } from '@/commn/components/ui/button'
import { CardRemover } from '@/commn/components/ui/cardRemover/CardRemover'
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
import { CreateUpdateDeck } from '@/features/decks/createUpdateDeck/CreateUpdateDeck'
import { LearnDeck } from '@/features/decks/learnDeck/LearnDeck'
import { useGetCurrentUserDataQuery } from '@/services/auth/authService'
import {
  AUTHOR_NAME_ORDER_BY,
  CARDS_COUNT_ORDER_BY,
  DeckType,
  NAME_ORDER_BY,
  OrderByType,
  UPDATED_ORDER_BY,
} from '@/services/decks/DecksTypes'
import { useGetDecksQuery } from '@/services/decks/decksService'
import { useDeckMutation } from '@/services/decks/lib/useDeckMutation'

import s from './Decks.module.scss'

const DECKS_KEY_SEARCH_PARAMS = {
  authorId: 'authorId',
  default: 'default',
  maxCardsCount: 'maxCardsCount',
  minCardsCount: 'minCardsCount',
  orderBy: 'orderBy',
  page: 'page',
  pageDeckSaveHistory: 'page-deck',
  searchName: 'name',
}

export const Decks = () => {
  const [itemPage, setItemPage] = useState('10')
  const { searchParams, updateSearchParam } = useSearchUpdateParams()
  const { data: dataUserData } = useGetCurrentUserDataQuery()

  //rrm search params ------------
  const page = Number(searchParams.get(DECKS_KEY_SEARCH_PARAMS.page)) || 1
  const name = searchParams.get(DECKS_KEY_SEARCH_PARAMS.searchName) || ''
  const authorId = searchParams.get(DECKS_KEY_SEARCH_PARAMS.authorId) || ''
  const minCards = Number(searchParams.get(DECKS_KEY_SEARCH_PARAMS.minCardsCount)) || 0
  const maxCards = Number(searchParams.get(DECKS_KEY_SEARCH_PARAMS.maxCardsCount)) || 100
  const orderBy = searchParams.get(DECKS_KEY_SEARCH_PARAMS.orderBy) || null
  const activeTab = authorId || DECKS_KEY_SEARCH_PARAMS.default

  const setPage = (page: number) => {
    updateSearchParam({ key: DECKS_KEY_SEARCH_PARAMS.page, value: page })
  }

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

  const setOrderByDeck = (orderBy: OrderByType) => {
    updateSearchParam({ key: DECKS_KEY_SEARCH_PARAMS.orderBy, value: orderBy })
  }

  const {
    createDeck,
    deleteDeck,
    errUpdateDeck,
    errorCreateDeck,
    errorDeleteDeck,
    isErrUpdateDeck,
    isErrorCreateDeck,
    isErrorDeleteDeck,
    isLoadUpdateDeck,
    isLoadingCreateDeck,
    isLoadingDeleteDeck,
    updateDeck,
  } = useDeckMutation()

  const { data, error, isError, isLoading } = useGetDecksQuery({
    authorId: authorId || undefined,
    currentPage: page, //было просто page если use useState
    itemsPerPage: Number(itemPage),
    maxCardsCount: maxCards,
    minCardsCount: minCards,
    name: name || undefined,
    orderBy: orderBy || undefined,
  }) //из query возвращается обьект из mutation картэш(массив с заранее определенными элементами)

  const handleClearFilter = () => {
    setCountMaxDecks(100)
    setCountMinDecks(0)
    setPage(1)
    setSearch('')
  }

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
            { id: 1, orderBy: NAME_ORDER_BY, title: 'Name' },
            { id: 2, orderBy: CARDS_COUNT_ORDER_BY, title: 'Cards' },
            { id: 3, orderBy: UPDATED_ORDER_BY, title: 'Last Updated' },
            { id: 4, orderBy: AUTHOR_NAME_ORDER_BY, title: 'Created By' },
            { id: 5, title: '' },
          ]}
          paragraphs={data?.items.map((deck: DeckType) => ({
            cardCounts: deck.cardsCount,
            cells: [
              { img: deck.cover, value: deck.name },
              { value: `${deck.cardsCount}` },
              { value: new Date(deck.updated).toLocaleDateString() },
              { value: deck.author.name },
              {
                element: [
                  <LearnDeck idCard={deck.id} key={'learn'} />,

                  <CreateUpdateDeck
                    buttonName={'change save'}
                    coverDeckBy={deck.cover}
                    error={errUpdateDeck}
                    idCard={deck.id}
                    isError={isErrUpdateDeck}
                    isIcon
                    isLoading={isLoadUpdateDeck}
                    isPrivateCard={deck.isPrivate}
                    key={'edit'}
                    method={'PATCH'}
                    mutationFunction={updateDeck}
                    nameDeckBy={deck.name}
                    titleContent={'edit pack'}
                    triggerVariant={'link'}
                  />,
                  <CardRemover
                    buttonName={'delete pack'}
                    className={s.cardRemover}
                    error={errorDeleteDeck}
                    idCard={deck.id}
                    isError={isErrorDeleteDeck}
                    isIcon
                    isLoading={isLoadingDeleteDeck}
                    key={'delete'}
                    mutationDeck={deleteDeck}
                    text={`Do you really want to remove /${deck.name}? All cards will be deleted.`}
                    titleName={'delete pack'}
                  />,
                ],
                elementUser: dataUserData?.id === deck.userId,
              },
            ],
            idCells: deck.id,
          }))}
          setOrderBy={setOrderByDeck}
        />
      </div>
      <div className={s.pagination}>
        <Pagination
          currentPage={page}
          itemPage={itemPage}
          onPageChange={setPage}
          pageSize={1}
          setPageSize={setItemPage}
          siblingCount={1}
          totalCount={data?.pagination?.totalPages ?? 1}
        />
      </div>
    </Page>
  )
}
