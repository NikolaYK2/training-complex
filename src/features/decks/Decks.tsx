import { useAppDispatch } from '@/app/lib/hooksStore'
import { CardRemover } from '@/commn/components/ui/cardRemover/CardRemover'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { Page } from '@/commn/components/ui/pages/Page'
import { Pagination } from '@/commn/components/ui/pagination/Pagination'
import { Table } from '@/commn/components/ui/tables/Table'
import { Title } from '@/commn/components/ui/title/Title'
import { DECKS_KEY_SEARCH_PARAMS, useSearchUpdateParams } from '@/commn/hooks/useSearchUpdateParams'
import { manageFeedback } from '@/commn/utils/manageFeedback'
import { CreateUpdateDeck } from '@/features/decks/createUpdateDeck/CreateUpdateDeck'
import { FavoriteDeck } from '@/features/decks/favoriteDeck/FavoriteDeck'
import { Filters } from '@/features/decks/filters/Filters'
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
import { useDeckMutation } from '@/services/lib/deck/useDeckMutation'

import s from './Decks.module.scss'

export const Decks = () => {
  const { clearParams, searchParams, updateSearchParam } = useSearchUpdateParams()
  const { data: dataUserData } = useGetCurrentUserDataQuery()
  const dispatch = useAppDispatch()
  //rrm search params ------------
  const page = Number(searchParams.get(DECKS_KEY_SEARCH_PARAMS.page)) || 1
  const pageItem = Number(searchParams.get(DECKS_KEY_SEARCH_PARAMS.pageItem)) || 10
  const name = searchParams.get(DECKS_KEY_SEARCH_PARAMS.searchName) || ''
  const authorId = searchParams.get(DECKS_KEY_SEARCH_PARAMS.authorId) || ''
  const minCards = Number(searchParams.get(DECKS_KEY_SEARCH_PARAMS.minCardsCount)) || 0
  const maxCards = Number(searchParams.get(DECKS_KEY_SEARCH_PARAMS.maxCardsCount)) || 100
  const orderBy = searchParams.get(DECKS_KEY_SEARCH_PARAMS.orderBy) || null
  const favoritedBy = searchParams.get(DECKS_KEY_SEARCH_PARAMS.favoritedBy) || ''
  const activeTab = authorId || DECKS_KEY_SEARCH_PARAMS.default

  const setPage = (page: number) => {
    updateSearchParam({ key: DECKS_KEY_SEARCH_PARAMS.page, value: page })
  }
  const setItemPage = (items: string) => {
    updateSearchParam({ key: DECKS_KEY_SEARCH_PARAMS.pageItem, value: items })
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
    currentPage: page,
    favoritedBy: favoritedBy || undefined,
    itemsPerPage: pageItem,
    maxCardsCount: maxCards,
    minCardsCount: minCards,
    name: name || undefined,
    orderBy: orderBy || undefined,
  }) //из query возвращается обьект из mutation картэш(массив с заранее определенными элементами)

  if (isError) {
    manageFeedback({ data: error, dispatch, type: 'error' })
  }

  return (
    <Page>
      {isLoading && <Loading />}

      <Title isDeck nameDeck={'Decks list'}>
        <CreateUpdateDeck
          buttonName={'Add New Deck'}
          callback={clearParams}
          className={s.btnCreateDeck}
          error={errorCreateDeck}
          isError={isErrorCreateDeck}
          isLoading={isLoadingCreateDeck}
          mutationFunction={createDeck}
          nameTrigger={'Add New Deck'}
          titleContent={'Add New Deck'}
        />
      </Title>
      <Filters
        activeTab={activeTab}
        callback={clearParams}
        dataUserData={dataUserData}
        favoritedBy={favoritedBy}
        maxCards={maxCards}
        minCards={minCards}
        name={name}
        updateSearchParam={updateSearchParam}
      />
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
              { forMobileTitle: 'Name', img: deck.cover, value: deck.name },
              { forMobileTitle: 'Cards', value: `${deck.cardsCount}` },
              {
                forMobileTitle: 'Last Updated',
                value: new Date(deck.updated).toLocaleDateString(),
              },
              { forMobileTitle: 'Created By', value: deck.author.name },
              {
                element: [
                  <FavoriteDeck idCard={deck.id} isFavorite={deck.isFavorite} key={'like'} />,

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
                    mutationFunction={updateDeck}
                    nameDeckBy={deck.name}
                    titleContent={'edit pack'}
                    triggerVariant={'link'}
                  />,
                  <CardRemover
                    buttonName={'delete pack'}
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
      <Pagination
        currentPage={page}
        itemPage={String(pageItem)}
        onPageChange={setPage}
        pageSize={1}
        setPageSize={setItemPage}
        siblingCount={1}
        totalCount={data?.pagination?.totalPages ?? 1}
      />
    </Page>
  )
}
